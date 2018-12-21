
class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    tick() {
        this.setState(() => {
            return ({
                time: new Date().toLocaleString()
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
        return React.createElement('h1',
            {className: 'orange'},
            'Hello From Pluralsight and React: ' + this.state.time);
    }
}



ReactDOM.render(
    React.createElement(Hello, {time: new Date().toLocaleTimeString()}, null),
    document.getElementById('app')
);


