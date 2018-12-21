import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Speakershoc} from "../src/speakers/speakershoc";


class speakershocpage extends Component {
    render() {
        return (
            <div>
                <Speakershoc/>
            </div>
        );
    }
}

speakershocpage.propTypes = {};
speakershocpage.defaultProps = {};

export default speakershocpage;
