import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

export class Layout extends React.Component {
    render() {
        const {children} = this.props

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}