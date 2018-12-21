//const rootElement = document.getElementById('app');

// const myElement = document.createElement('h1');
// myElement.className = "orange";
// myElement.innerText = 'Hello From Pluralsight';


const myReactElement = React.createElement('h1',
    {className: 'orange'},
    'Hello From Pluralsight and React');

ReactDOM.render(
    myReactElement,
    document.getElementById('app')
);