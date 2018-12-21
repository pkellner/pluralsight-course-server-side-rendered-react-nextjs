import React, {Component} from 'react';

import axios from 'axios';

const API = 'http://localhost:4000/sessions';
const DEFAULT_QUERY = '';

// https://github.com/rwieruch/react-data-fetching/blob/master/src/HigherOrderComponentApproach/index.js

const withFetching = (url) => (Component) =>
    class WithFetching extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                data: null,
                isLoading: false,
                error: null,
            };
        }

        componentDidMount() {
            this.setState({isLoading: true});

            axios.get(url)
                .then(result => {
                    debugger;
                    return this.setState({
                        data: result.data,
                        isLoading: false
                    });
                })
                .catch(error => this.setState({
                    error,
                    isLoading: false
                }));
        }

        render() {
            return <Component {...this.props} {...this.state} />;
        }
    };

const Speakershoc = ({data, isLoading, error}) => {
    if (!data) {
        return <p>No data yet ...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <ul>
            {data.map(mydata =>
                <li key={mydata.id}>
                    <a href={mydata.id}>{mydata.title}</a>
                </li>
            )}
        </ul>
    );
};

export const Speakershoc = withFetching(API + DEFAULT_QUERY)(Speakershoc);


// class speakershoc extends Component {
//     render() {
//         return (
//             <div></div>
//         );
//     }
// }
//
// speakershoc.propTypes = {};
// speakershoc.defaultProps = {};
//
// export default speakershoc;
