const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  env: {
    host: "https://gary-lai.com",
    github: "https://github.com/imgarylai",
    twitter: "https://twitter.com/imgarylai",
    handle: "@imgarylai",
    site: "@imgarylai",
    repo: "https://github.com/imgarylai/gary-lai.com",
    title: "Gary Lai",
    title_template: "%s | Bubble Tea Lover🧋",
    description: "Bubble Tea Lover🧋",
    measurement_id: "G-C5CDL8Q12D",
  },
  swcMinify: true,
});
