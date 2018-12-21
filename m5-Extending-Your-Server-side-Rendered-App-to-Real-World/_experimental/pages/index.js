import React from 'react';
import Link from "next/link";


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }

    static async getInitialProps() {

        const promise = new Promise((resolve, reject) => {
            setInterval(() => {
                resolve({
                    time: new Date().toISOString()
                })
            }, 3000);
        });
        return promise;
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
        return (

                <div className="container">
                    <div className="row">

                        <h6 className="margintopbottom20">
                            Silicon Valley Code Camp is a community event where developers learn from fellow developers.
                            We also have developer related topics that
                            include software branding, legal issues around software as well as other topics developers
                            are interested in hearing about.

                        </h6>
                    </div>

                    <div className='row'>
                        <Link
                            href={{
                                pathname: "/session", query:
                                    {
                                        sessionSlug: 'cracking-the-product-manager-interview',
                                        sessionId: '7368',
                                        sessionData: {id: 7368, junk: 'abcd',sessionSlug: 'cracking-the-product-manager-interview'}
                                    }
                            }}
                            as={`session/cracking-the-product-manager-interview`}>
                            <a>session/cracking-the-product-manager-interview</a>
                        </Link>
                    </div>

                </div>


        )
    }
}

export default Index

// session/cracking-the-product-manager-interview

// <React.Fragment>
// <Link prefetch href='/sessions'><a>sessions</a></Link>
// <div>
// <DigitalClock  time={this.state.time} />
// </div>
// </React.Fragment>


