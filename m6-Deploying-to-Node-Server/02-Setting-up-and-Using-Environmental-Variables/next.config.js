const withCSS = require("@zeit/next-css");

require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

/* Without CSS Modules, with PostCSS */
module.exports = withCSS(
    {
        webpack(config, options) {
            config.plugins = config.plugins || [];
            config.plugins = [
                ...config.plugins,
                // Read the .env file
                new Dotenv({
                    path: path.join(__dirname, ".env"),
                    systemvars: true
                })
            ];
            return config;
        }
    }
);
