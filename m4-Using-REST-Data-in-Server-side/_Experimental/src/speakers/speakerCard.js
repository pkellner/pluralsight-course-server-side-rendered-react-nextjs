import {Component} from "react";
import React from "react";
import Link from "next/link";

class SpeakerCard extends Component {

    render() {


        const speakerSlug = this.props.speaker.presenterUrl ?
            this.props.speaker.presenterUrl.slice(5) :
            `${this.props.speaker.userFirstName.toLowerCase()}-${this.props.speaker.userLastName.toLowerCase()}-${this.props.speaker.id}`;


        return (
            <div>
            <img className="card-img-top" src={`/static/speakers/Speaker-${this.props.speaker.id}.jpg`}/>
            <div className="card-body">

                <Link
                    href={{
                        pathname: "/speaker", query:
                            {
                                speakerSlug: speakerSlug,
                                speakerId: this.props.speaker.id
                            }
                    }}
                    as={`speaker/${speakerSlug}`}>

                    <a href="#" className="btn btn-lg btn-block btn-outline-primary margintopbottom10">Details</a>
                </Link>








                <h4 className="card-title">{this.props.speaker.userFirstName} {this.props.speaker.userLastName} </h4>
                <p className="card-text">{this.props.speaker.bioShort}</p>
            </div>
        </div>
        );
    }
}

export default SpeakerCard;

