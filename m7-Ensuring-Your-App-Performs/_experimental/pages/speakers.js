import React from "react";
import axios from "axios";
import SpeakerCard from "../src/speakerCard";

import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Speakers extends React.Component {
    static GetSpeakersUrl() {
        if (process.env.NODE_ENV === "production") {
            return (
                process.env.RESTURL_SPEAKERS_PROD ||
                publicRuntimeConfig.RESTURL_SPEAKERS_PROD
            );
        } else {
            return process.env.RESTURL_SPEAKERS_DEV;
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: props.isLoading,
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        };
    }

    componentDidMount() {
        axios
            .get(Speakers.GetSpeakersUrl())
            .then((response) => {
                this.setState({
                    hasErrored: false,
                    isLoading: false,
                    speakerData: response.data
                });
            })
            .catch((error) => {
                this.setState({
                    hasErrored: true,
                    isLoading: false,
                    speakerData: []
                });
            });
    }

    static async getInitialProps({ req }) {
        const isServer = !!req;

        if (isServer) {
            var promise = axios
                .get(Speakers.GetSpeakersUrl())
                .then((response) => {
                    return {
                        hasErrored: false,
                        isLoading: false,
                        speakerData: response.data
                    };
                })
                .catch((error) => {
                    return {
                        hasErrored: true,
                        message: error.message
                    };
                });
            return promise;
        } else {
            return {
                speakerData: [...Array(5)].map((_, i) => ({
                    firstName: "",
                    lastName: "",
                    id: i
                })),
                isLoading: true
            };
        }
    }

    render() {
        if (this.props.hasErrored) {
            return (
                <div className="container">
                    <div className="row">
                        <div>
                            <h2>ERROR</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <h3>{this.props.message}</h3>
                        </div>
                    </div>
                </div>
            );
        }



        return (

                <div className="container">
                    <div className="row">
                        <div className="card-deck">
                            {this.state.speakerData.map((speaker) => (
                                <div
                                    className="card col-4 cardmin margintopbottom20"
                                    key={speaker.id}
                                >
                                    <SpeakerCard speaker={speaker} isLoading={this.state.isLoading} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

        );
    }
}

export default Speakers;
