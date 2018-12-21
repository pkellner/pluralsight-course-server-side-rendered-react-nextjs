import React, {Component} from 'react';
import axios from "axios";

class Speaker extends Component {

    static async getInitialProps({query}) {
        var promise =
            axios.
            get(`http://localhost:4000/speakers/${query.speakerId}`).
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
