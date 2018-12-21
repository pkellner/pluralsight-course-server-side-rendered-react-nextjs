import React from 'react'
import App, { Container } from 'next/app'
import Footer from "../src/common/footer";
import Navbar from "../src/common/navbar";

// https://zeit.co/blog/next6#app-component
// https://medium.com/@jamischarles/lessons-learned-with-next-js-change-title-6423b2f2ab8d

class Layout extends React.Component {
    render () {
        const {children} = this.props

        return (
          <React.Fragment>

              <div className="jumbotron">
                  <div className="row">
                      <div className="col-12 col-sm-4 text-center">
                          <h6 className="text-uppercase">October 13-14&nbsp;&nbsp;2018</h6>
                          <h6 className="text-uppercase">San Jose, California</h6>
                      </div>
                      <div className="col-12 col-sm-8 text-lg-right">
                          <div><img src='/static/common/SVCClogo-100px.png' /></div>
                          <h2>Silicon Valley Code Camp 2018</h2>
                      </div>
                  </div>
              </div>

             <Navbar/>
              {children}

              <Footer/>



          </React.Fragment>
        );

        // return <div className='layout'>
        //     {children}
        // </div>
    }
}

export default class MyApp extends App {
    render () {
        const {Component, pageProps} = this.props
        return <Container>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Container>
    }
}