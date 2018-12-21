import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

class Index extends Component {

    static async getInitialProps() {
        return {};
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-12 col-sm-4 text-center">
                            <h6 className="text-uppercase">October 13-14&nbsp;&nbsp;2018</h6>
                            <h6 className="text-uppercase">San Jose, California</h6>
                        </div>
                        <div className="col-12 col-sm-8 text-lg-right">
                            <div><img src='/static/SVCClogo.png'/></div>
                            <h2>Silicon Valley Code Camp 2018</h2>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Speakers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sessions</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col margintopbottom">
                            <h2>Home</h2>
                            <h6 className="margintopbottom20">
                                Silicon Valley Code Camp is a community event where
                                developers learn from fellow developers.
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="jumbotron text-center">
                    <h7><b>Silicon Valley Code Camp 2018</b> is Hosted by PayPal in San Jose
                        at their Town Hall location. 2121 North First Street. <b>October 13-14 2018</b></h7>
                </div>
            </div>

        );
    }
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
