import React from 'react';
import axios from 'axios';
import SpeakerCard from "../src/speakerCard";

import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

class Speakers extends React.Component {

    static GetSpeakersUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SPEAKERS_PROD
                || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
        } else {
            return process.env.RESTURL_SPEAKERS_DEV;
        }
    }
    static async getInitialProps() {
        var promise = axios.get(Speakers.GetSpeakersUrl()).then(response => {
            return {
                hasErrored: false,
                speakerData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.speakerData.map((speaker) =>
                            <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                                <SpeakerCard speaker={speaker}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

}

export default Speakers

