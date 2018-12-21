import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import SessionCard from "../src/sessions/sessionCard";
import SpeakerCard from "../src/speakers/speakerCard";

class session extends Component {

    static async getInitialProps ({ query, res }) {

        var promise = axios.get(`http://localhost:4000/sessions/${query.sessionId}`).then(response => {
            return {
                hasErrored: false,
                sessionDataOne: response.data
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

    render() {
        debugger;
        return (
            <div className='container'>

                {/*{JSON.stringify(this.props.sessionDataOne)}*/}

                <div className="row">
                    <h2 className='margintopbottom20'>{this.props.sessionDataOne.title}</h2>
                    <p className='margintopbottom20'>{this.props.sessionDataOne.description}</p>
                </div>

                <div className="row">
                    <div className="card-deck">
                    {this.props.sessionDataOne.speakersList.map((speaker) =>
                        <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                            <SpeakerCard  speaker={speaker}/>
                        </div>
                    )}
                    </div>


                </div>

            </div>
        );
    }
}

session.propTypes = {};
session.defaultProps = {};

export default session;
