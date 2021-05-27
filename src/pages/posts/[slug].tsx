import { HStack, Spinner } from "@chakra-ui/react";
import MDXComponents from "@src/components/MDXComponents";
import TagLink from "@src/components/TagLink";
import { H2, H6 } from "@src/components/Typography/Headings";
import { getPostBySlug, getPostSlugs } from "@src/lib/posts";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { useRouter } from "next/router";

const PostPage = ({ source, frontMatter, slug }) => {
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
      />
      <ArticleJsonLd
        url={canonical}
        title={title}
        images={[]}
        datePublished={dayjs(date).format()}
        dateModified={dayjs(date).format()}
        authorName={["Gary Lai"]}
        publisherName="Gary Lai"
        publisherLogo={process.env.host + "/images/logo.png"}
        description={description}
      />
      <H2 as={"h1"}>{title}</H2>
      <H6>{dayjs(date).format("YYYY-MM-DD")}</H6>
      <HStack spacing={2} py={4}>
        {tags.map((tag) => (
          <TagLink key={tag} tag={tag} />
        ))}
      </HStack>
      <MDXRemote {...source} components={MDXComponents} />
    </>
  );
};
export default PostPage;

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { mdxSource, data } = await getPostBySlug(slug);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
