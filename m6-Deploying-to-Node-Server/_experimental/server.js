const express = require("express");
const next = require("next");
const LRUCache = require("lru-cache");

console.log("server.js...");

const dev = process.env.NODE_ENV !== "production";
console.log("server.js process.env.NODE_ENV:" + process.env.NODE_ENV);
console.log("server.js dev:" + dev);
const app = next({ dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
    length: function(n, key) {
        return n.toString().length + key.toString().length;
    },
    max: 100 * 1000 * 1000, // 100MB cache soft limit
    maxAge: 1000 * 10 // 1000 * 60 * 60 // 1hour
});

let cacheHits = 0;
let cacheMisses = 0;
let cacheErrors = 0;

app.prepare()
    .then(() => {
        const server = express();

        server.get("/speaker/:speakerId", (req, res) => {
            const actualPage = "/speaker";
            const queryParams = { speakerId: req.params.speakerId };
            app.render(req, res, actualPage, queryParams);
        });

        server.get("*", (req, res) => {
            if (
                process.env.LRU_CACHE &&
                process.env.LRU_CACHE == "1" &&
                (req.url === "/" ||
                    req.url === "/speakers" ||
                    req.url === "/sessions")
            ) {
                return renderAndCache(req, res, req.url, {});
            } else {
                return handle(req, res);
            }
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log("> Ready http://localhost:3000");
        });
    })
    .catch((ex) => {
        console.error(`error ${ex.stack}`);
        process.exit(1);
    });

function getCacheKey(req) {
    return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req);

    let cacheSize = 0;
    let cacheCnt = 0;
    ssrCache.forEach(function(value, key, cache) {
        cacheSize += value.toString().length;
        cacheCnt++;
    });

    if ((cacheHits + cacheMisses + cacheErrors) % 100 === 0) {
        console.log(
            `Cache Hits ${cacheHits}, Misses ${cacheMisses}, Errors: ${cacheErrors}`
        );
        console.log(`Total Cache Size: ${cacheSize}  Items: ${cacheCnt}`);
    }

    if (ssrCache.has(key)) {
        res.setHeader("x-cache", "HIT");
        res.send(ssrCache.get(key));
        cacheHits++;
        return;
    }

    try {
        // If not let's render the page into HTML
        const html = await app.renderToHTML(req, res, pagePath, queryParams);

        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            cacheErrors++;
            return;
        }

        cacheMisses++;

        // Let's cache this page
        ssrCache.set(key, html);

        res.setHeader("x-cache", "MISS");
        res.send(html);
    } catch (err) {
        app.renderError(err, req, res, pagePath, queryParams);
    }
}
