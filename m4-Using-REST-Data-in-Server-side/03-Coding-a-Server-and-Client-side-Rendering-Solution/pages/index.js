import React from "react";
import DigitalClock from "../src/DigitalClock";

class Index extends React.Component {

    static async getInitialProps () {
        return ({
            time: new Date().toISOString()
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            //time: new Date().toISOString()
            time: props.time
        }
    }

    tick() {
        this.setState(() => {
            return ({
                time: new Date().toISOString()
            });
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return <DigitalClock time={this.state.time}></DigitalClock>
    }
}

export default Index;



