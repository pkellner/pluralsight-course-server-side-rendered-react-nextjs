/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css

You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from 'next/document'

import 'bootstrap/dist/css/bootstrap.css';

export default class MyDocument extends Document {
    render () {
        return (
            <html>
            <Head>
                <link rel='stylesheet' href='/static/bootstrap.min.css' />
                <link rel='stylesheet' href='/static/style.css' />

                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
