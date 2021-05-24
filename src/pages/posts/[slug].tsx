import { Spinner } from "@chakra-ui/react";
import Index from "@src/components/MDXComponents";
import { H1 } from "@src/components/Typography/Headings";
import { getPostBySlug, getPostSlugs } from "@src/lib/posts";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const PostPage = ({ source, frontMatter }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }
  return (
    <>
      <NextSeo title={frontMatter.title} />
      <H1>{frontMatter.title}</H1>
      {frontMatter.date}
      <MDXRemote {...source} components={Index} />
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

export const getStaticPaths = async () => {
  const paths = await getPostSlugs();

  return {
    paths,
    fallback: true,
  };
};
