import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import SessionCard from "../src/sessions/sessionCard";

class speaker extends Component {

    static async getInitialProps ({ query, res }) {

        var promise = axios.get(`http://localhost:4000/speakers/${query.speakerId}`).then(response => {
            return {
                hasErrored: false,
                speakerDataOne: response.data
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

speaker.propTypes = {};
speaker.defaultProps = {};

export default speaker;


// <div className="row">
//     <div className="card-deck">
//     {this.props.sessionDataOne.speakersList.map((speaker) =>
//         <div className="card col-4 cardmin margintopbottom20" key={speaker.id}>
//             <SpeakerCard  speaker={speaker}/>
//         </div>
//     )}
//     </div>
//
//
// </div>