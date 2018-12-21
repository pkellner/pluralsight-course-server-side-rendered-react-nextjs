import {Component} from "react";
import Link from "next/link";
import React from "react";

class SessionCard extends Component {
    render() {
        return (
            <div className="card-body">
                <h4 className="card-title">
                    <Link
                        href={{
                            pathname: "/session", query:
                                {
                                    sessionSlug: this.props.session.sessionSlug,
                                    sessionId: this.props.session.id
                                }
                        }}
                        as={`session/${this.props.session.sessionSlug}`}>
                        <a>{this.props.session.title}</a>
                    </Link>
                </h4>
                <h6 className="card-title">{this.props.session.speakersNamesCsv}</h6>
                <p className="card-text">{this.props.session.descriptionShort}
                </p>

            </div>

        );
    }
}

export default SessionCard;