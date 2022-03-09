import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPostsByTag, getTagsWithOccurrences } from "@src/lib/posts";
import PostList from "@src/components/Posts/PostList";
import PostProps from "@src/types/postProps";
import ParamsProps from "@src/types/paramsProps";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { H2 } from "@src/components/Typography/Headings";
import Pagination from "@src/components/Posts/Pagination";

export interface TagPageProps {
  slug: string;
  posts: PostProps[];
  page: number;
  total: number;
}

const TagPage = ({ posts, page, total, slug }: TagPageProps) => {
  const hasPreviousPage = page > 1;
  const pageTitle = `Tags ${hasPreviousPage ? ` - Page ${page}` : ""}`;
  return (
    <>
      <NextSeo title={pageTitle} />
      <H2>{pageTitle}</H2>
      <PostList posts={posts} />
      {posts && (
        <Pagination page={page} total={total} urlPrefix={`/tags/${slug}`} />
      )}
    </>
  );
};

export default TagPage;

export const getStaticPaths = async () => {
  const tags = await getTagsWithOccurrences();
  const paths = Object.keys(tags)
    .map((key) => {
      const pages = Math.ceil(tags[key] / POSTS_PER_PAGE);
      return Array.from(Array(pages).keys()).map((page) => ({
        params: { slug: key, page: String(page + 1) },
      }));
    })
    .reduce((flat, next) => flat.concat(next), []);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, page } = params as ParamsProps;
  const { posts, total } = await getPostsByTag(slug!);

  return {
    props: {
      slug,
      posts: posts.slice(
        (Number(page) - 1) * POSTS_PER_PAGE,
        Number(page) * POSTS_PER_PAGE
      ),
      page: Number(page),
      total,
    },
  };
};
