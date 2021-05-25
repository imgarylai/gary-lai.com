import { DefaultSeo } from "next-seo";

const SEO = () => (
  <DefaultSeo
    defaultTitle={process.env.title}
    titleTemplate={process.env.title_template}
    description={process.env.description}
    canonical={process.env.host}
    openGraph={{
      url: process.env.host,
      title: process.env.title,
      description: process.env.description,
      images: [
        {
          url: process.env.host + `/images/logo.png`,
          width: 600,
          height: 600,
          alt: process.env.title,
        },
      ],
      site_name: process.env.title,
    }}
    twitter={{
      handle: process.env.handle,
      site: process.env.site,
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
