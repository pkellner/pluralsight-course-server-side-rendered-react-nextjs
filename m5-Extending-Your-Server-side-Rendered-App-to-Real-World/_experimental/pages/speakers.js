import React, {Component} from 'react';
import axios from "axios";
import SpeakerCard from "../src/speakers/speakerCard";
import Error from "next/error";



class speakers extends Component {


    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        }
    }

    static async getInitialProps() {

        var promise = axios.get('http://localhost:4000/speakers').then(response => {
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

    render() {
        const {hasErrored, message} = this.state;
        if (hasErrored) {
            return <Error statusCode={message} />
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col margintopbottom">
                        <h2>Speakers</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="card-deck">
                        {this.state.speakerData.map((speaker) =>
                            <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
                                <SpeakerCard  speaker={speaker}/>
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

speakers.propTypes = {};
speakers.defaultProps = {};

export default speakers;
