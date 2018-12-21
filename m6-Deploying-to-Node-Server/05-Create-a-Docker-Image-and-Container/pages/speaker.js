import React, {Component} from 'react';
import axios from "axios";
import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();


class Speaker extends Component {

    static GetSpeakerUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SPEAKER_PROD
                || publicRuntimeConfig.RESTURL_SPEAKER_PROD;
        } else {
            return process.env.RESTURL_SPEAKER_DEV;
        }
    }

    static async getInitialProps({query}) {
        var promise = axios.
        get(`${Speaker.GetSpeakerUrl()}/${query.speakerId}`).
        then(response => {
            return {
                hasErrored: false,
                speakerDataOne: response.data
            };
        }).catch(error => {
            return {
                hasErrored: true,
                message: error.message
            }
        });
        return promise;
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <h2 className='margintopbottom20'>{this.props.speakerDataOne.firstName} {this.props.speakerDataOne.lastName}</h2>
                    <p className='margintopbottom20'>{this.props.speakerDataOne.bio}</p>
                </div>
            </div>
        );
    }
}

Speaker.propTypes = {};
Speaker.defaultProps = {};

export default Speaker;
