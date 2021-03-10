const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const env = require("./.env.js");
module.exports = withCSS(
  withLess({ env, lessLoaderOptions: { javascriptEnabled: true } })
);
