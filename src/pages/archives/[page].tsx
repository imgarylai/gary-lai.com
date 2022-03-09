import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPosts, getPostSlugs } from "@src/lib/posts";
import { NextSeo } from "next-seo";
import { H2 } from "@src/components/Typography/Headings";
import { GetStaticProps } from "next";
import ParamsProps from "@src/types/paramsProps";
import PostProps from "@src/types/postProps";
import PostList from "@src/components/Posts/PostList";
import Pagination from "@src/components/Posts/Pagination";

export interface ArchivePageProps {
  posts: PostProps[];
  page: number;
  total: number;
}

const ArchivePage = ({ posts, page, total }: ArchivePageProps) => {
  const hasPreviousPage = page > 1;
  const pageTitle = `Archives ${hasPreviousPage ? ` - Page ${page}` : ""}`;
  return (
    <>
      <NextSeo title={pageTitle} />
      <H2>{pageTitle}</H2>
      <PostList posts={posts} />
      {posts && (
        <Pagination page={page} total={total} urlPrefix={`/archives`} />
      )}
    </>
  );
};

export default ArchivePage;

export const getStaticPaths = async () => {
  const pages = Math.ceil(getPostSlugs.length / POSTS_PER_PAGE);
  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: { page: String(page + 1) },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { page } = context.params as ParamsProps;
  const { posts, total } = await getPosts();

  return {
    props: {
      posts: posts.slice(
        (Number(page) - 1) * POSTS_PER_PAGE,
        Number(page) * POSTS_PER_PAGE
      ),
      page: Number(page),
      total,
    },
  };
};
