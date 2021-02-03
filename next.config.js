const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withLess({
    env: {
      // 환경변수 SSR CSR 동시 지급하기 위해선 여기에
      END_POINT: process.env.END_POINT,
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  })
);
