import React, { Component } from "react";
import axios from "axios";
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
import ErrorPage from 'next/error'

class Speaker extends Component {
    static GetSpeakerUrl() {
        console.log(
            `process.env.NODE_ENV:${
                process.env.NODE_ENV
            } process.env.RESTURL_SPEAKER_PROD:${
                process.env.RESTURL_SPEAKER_PROD
            } `
        );
        console.log(
            `publicRuntimeConfig.RESTURL_SPEAKER_PROD:${
                publicRuntimeConfig.RESTURL_SPEAKER_PROD
            }`
        );
        console.log(
            `process.env.RESTURL_SPEAKER_DEV:${process.env.RESTURL_SPEAKER_DEV}`
        );

        if (process.env.NODE_ENV === "production") {
            return (
                process.env.RESTURL_SPEAKER_PROD ||
                publicRuntimeConfig.RESTURL_SPEAKER_PROD
            );
        } else {
            return process.env.RESTURL_SPEAKER_DEV;
        }
    }

    static async getInitialProps({ query }) {
        const dev = process.env.NODE_ENV !== "production";
        console.log("Speaker:getInitialProps: dev:" + dev);
        console.log(
            "Speaker:getInitialProps: Speaker.GetSpeakerUrl():" +
                Speaker.GetSpeakerUrl()
        );

        var promise = axios
            .get(`${Speaker.GetSpeakerUrl()}/${query.speakerId}`)
            .then((response) => {
                return {
                    hasErrored: false,
                    speakerDataOne: response.data
                };
            })
            .catch((error) => {
                return {
                    hasErrored: true,
                    message: error.message
                };
            });
        return promise;
    }

    // static GetSpeakerUrl() {
    //     if (process.env.NODE_ENV === "production") {
    //         return "https://www.siliconvalley-codecamp.com/rest/Speaker";
    //     } else {
    //         return "http://localhost:4000/speakers";
    //     }
    // }

    render() {
        if (this.props.hasErrored) {
            // errorcode always turns 404, not sure why
            return (
                <ErrorPage statusCode={333} />
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <h2 className="margintopbottom20">
                        {this.props.speakerDataOne.firstName}{" "}
                        {this.props.speakerDataOne.lastName}
                    </h2>
                    <p className="margintopbottom20">
                        {this.props.speakerDataOne.bio}
                    </p>
                </div>
            </div>
        );
    }
}

Speaker.propTypes = {};
Speaker.defaultProps = {};

export default Speaker;
