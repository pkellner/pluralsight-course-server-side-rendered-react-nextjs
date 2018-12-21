import {Component} from "react";
import React from "react";
import Link from "next/link";

class SpeakerCard extends Component {

    render() {
        return (
            <div>
            <img className="card-img-top" src={`/static/speakers/Speaker-${this.props.speaker.id}.jpg`}/>
            <div className="card-body">

                <Link
                    href={{
                        pathname: "/speaker", query:
                            {
                                speakerId: this.props.speaker.id
                            }
                    }}
                    as={`speaker/${this.props.speaker.id}`}>
                    <a className="btn btn-lg btn-block btn-outline-primary">
                        Details</a>
                </Link>

                <h4 className="card-title">{this.props.speaker.userFirstName}
                   {this.props.speaker.userLastName} </h4>
                <p className="card-text">{this.props.speaker.bioShort}</p>
            </div>
        </div>
        );
    }
}

export default SpeakerCard;

