import { HStack, Spinner } from "@chakra-ui/react";
import MDXComponents from "@src/components/MDXComponents";
import TagLink from "@src/components/TagLink";
import { H2, H6 } from "@src/components/Typography/Headings";
import { getPostBySlug, getPostSlugs } from "@src/lib/posts";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { DiscussionEmbed } from "disqus-react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import PostProps from "@src/types/postProps";

const PostPage = ({ source, frontMatter, slug }: PostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  const { title, description, date, tags } = frontMatter;
  const canonical = process.env.host + router.asPath;
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          title: title,
          description: description,
          url: canonical,
          type: "article",
          article: {
            publishedTime: dayjs(date).toISOString(),
          },
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: tags!.join(" "),
          },
        ]}
      />
      <ArticleJsonLd
        url={canonical}
        title={title!}
        images={[]}
        datePublished={dayjs(date).format()}
        dateModified={dayjs(date).format()}
        authorName={["Gary Lai"]}
        publisherName="Gary Lai"
        publisherLogo={process.env.host + "/images/logo.png"}
        description={description!}
      />
      <H2>{title}</H2>
      <H6>{dayjs(date).format("YYYY-MM-DD")}</H6>
      <MDXRemote {...source} components={MDXComponents} />
      <HStack spacing={2} py={4}>
        {tags && tags.map((tag: string) => <TagLink key={tag} tagName={tag} />)}
      </HStack>
      <DiscussionEmbed
        shortname="gary-lai"
        config={{
          url: canonical,
          identifier: slug,
          title: title,
        }}
      />
    </>
  );
};
export default PostPage;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const { source, frontMatter } = await getPostBySlug(slug);

  return {
    props: {
      slug: slug,
      source: source,
      frontMatter: frontMatter,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: getPostSlugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: true,
  };
};
