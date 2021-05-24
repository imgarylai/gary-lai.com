import { DefaultSeo } from "next-seo";

const SEO = () => (
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
    additionalLinkTags={[
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ]}
    additionalMetaTags={[
      { name: "msapplication-TileColor", content: "#00aba9" },
      { name: "theme-color", content: "#ffffff" },
    ]}
  />
);
export default SEO;
