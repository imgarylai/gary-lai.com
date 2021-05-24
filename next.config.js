const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  env: {
    host: "https://gary-lai.com",
  },
  future: {
    webpack5: true,
  },
});
