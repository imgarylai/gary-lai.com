import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPostsByTag, getTagsWithOccurrences } from "@src/lib/posts";
import TagPage, { TagPageProps } from "@src/pages/tags/[slug]/[page]";
import { GetStaticProps } from "next";
import ParamsProps from "@src/types/paramsProps";

const PostsByTag = ({ slug, page, posts, total }: TagPageProps) => (
  <TagPage slug={slug} page={page} posts={posts} total={total} />
);

export default PostsByTag;

export const getStaticPaths = async () => {
  const tags = await getTagsWithOccurrences();
  const paths = Object.keys(tags).map((tag) => ({
    params: { slug: tag },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as ParamsProps;
  const { posts, total } = await getPostsByTag(slug!);
  return {
    props: {
      page: 1,
      slug,
      posts: posts.slice(0, POSTS_PER_PAGE),
      total,
    },
  };
};
