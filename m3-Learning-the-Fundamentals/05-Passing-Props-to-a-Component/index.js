// const myReactElement = React.createElement('h1',
//     {className: 'orange'},
//     'Hello From Pluralsight and React');

const Hello = (props) => {
    return React.createElement('h1',
        {className: 'orange'},
        'Hello From Pluralsight and React ' + props.time);
};

ReactDOM.render(
    React.createElement(Hello, {time: new Date().toLocaleTimeString()}, null),
    document.getElementById('app')
);