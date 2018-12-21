import React from 'react';
import axios from 'axios';


class Index extends React.Component {

    static async getInitialProps() {

        var promise = axios.get('http://localhost:4000/sessions').then(response => {
            return {
                hasErrored: false,
                sessionData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;


    }

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            sessionData: props.sessionData
        }
    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (

            <ul>
                {this.state.sessionData.map((session) =>
                    <li key={session.id}>
                        {session.title} {session.id}
                    </li>
                )}
            </ul>
        )
    }

}

export default Index

