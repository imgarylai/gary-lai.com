import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NextSeo title="" titleTemplate="%s |  " />
    <Component {...pageProps} />
  </>
);

export default App;
