// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true);

        const { pathname, query } = parsedUrl

        // need to look up slug on server
        if (pathname.startsWith('/session/')) {
            const currentSlug = pathname.slice(9);
            app.render(req,res,'/session',{
                sessionSlug: currentSlug
            });
        }

        // if (pathname === '/session/cracking-the-coding-interview') {
        //     console.log("path is cracking...")
        //     app.render(req,res,'/session',{
        //         sessionSlug: 'cracking-the-coding-interview'
        //     });
        // }

        if (pathname === '/a') {
            app.render(req, res, '/b', query)
        } else if (pathname === '/b') {
            app.render(req, res, '/a', query)
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
