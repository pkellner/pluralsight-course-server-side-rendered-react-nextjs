import React, {Component} from 'react';
import './DigitalClock.css';

class DigitalClock extends Component {
    render() {
        const date = new Date(this.props.time);

        let h = date.getHours();
        let m = date.getMinutes();
        let s = (date.getSeconds() + (date.getMilliseconds() / 1000.0)).toFixed(3);
        let session = "AM";
        if (h == 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12;
            session = "PM";
        }
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        const time = h + ":" + m + ":" + s + " " + session;
        return (
            <div className="clock">{time}</div>
        );
    }
}

DigitalClock.propTypes = {};
DigitalClock.defaultProps = {};

export default DigitalClock;
