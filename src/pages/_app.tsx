import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import splitbee from "@splitbee/web";
import Layout from "@src/components/Layout";
import theme from "@src/lib/theme";
import { BlogJsonLd, DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
import * as gtag from "@src/lib/gtag";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    // splitbee.init();
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ChakraProvider theme={theme}>
      <>
        <DefaultSeo
          defaultTitle={`Gary Lai`}
          titleTemplate="%s | Bubble tea lover🧋"
          description="Bubble Tea lover🧋"
          canonical={process.env.host}
          openGraph={{
            url: process.env.host,
            title: "Gary Lai",
            description: "Bubble Tea lover🧋",
            images: [
              {
                url: process.env.host + `/images/logo.png`,
                width: 600,
                height: 600,
                alt: "Gary Lai",
              },
            ],
            site_name: "Bubble Tea lover🧋",
          }}
          twitter={{
            handle: "@imgarylai",
            site: "@imgarylai",
            cardType: "summary_large_image",
          }}
        />
        <Head>
          <link rel="shortcut icon" href={"/favicon.ico"} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={"/apple-touch-icon.png"}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={"/favicon-32x32.png"}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={"/favicon-16x16.png"}
          />
          <link rel="manifest" href={"/site.webmanifest"} />
          <link
            rel="mask-icon"
            href={"/safari-pinned-tab.svg"}
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ChakraProvider>
  );
};

export default App;
