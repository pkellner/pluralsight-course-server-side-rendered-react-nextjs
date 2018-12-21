import React, {Component} from 'react';
import axios from "axios";
import Error from 'next/error'
import SessionCard from "../src/sessions/sessionCard";


class sessions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            sessionData: props.sessionData
        }
    }

    static async getInitialProps() {

        var promise = axios.get('http://localhost:4000/sessions').then(response => {
            return {
                hasErrored: false,
                sessionData: response.data
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
        const {hasErrored, message} = this.state;
        if (hasErrored) {
            return <Error statusCode={message} />
        }

        return (

            <div className="container">
                <div className="row">
                    <div className="col margintopbottom">
                        <h2>Sessions</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {this.state.sessionData.map((session) =>
                            <div className="card col-4 cardmin margintopbottom" key={session.id} >
                                <SessionCard  session={session}/>
                            </div>
                        )}
                    </div>


                </div>

            </div>



        )


        // {speaker.userFirstName} {speaker.userLastName}    {speaker.attendeeId} <br/>
        // {speaker.userBioShort}
        // <img src={`/static/speakers/Speaker-${speaker.attendeeId}.jpg`} />

        // return (
        //     <ul>
        //         {this.state.speakerData.map((speaker) =>
        //             <li key={speaker.id}>
        //                 {speaker.id} {speaker.firstName} {speaker.lastName}
        //             </li>
        //         )}
        //     </ul>
        // );
    }
}

sessions.propTypes = {};
sessions.defaultProps = {};

export default sessions;
