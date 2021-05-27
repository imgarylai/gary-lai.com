import PostList from "@src/components/Posts";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPostsByTag, getTagsWithOccurrences } from "@src/lib/posts";

const PostsByTag = ({ slug, posts, total }) => (
  <PostList
    posts={posts}
    page={1}
    total={total}
    title={`Tags`}
    urlPrefix={`/tags/${slug}`}
  />
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

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { posts, total } = await getPostsByTag(slug);
  return {
    props: {
      slug,
      posts: posts.slice(0, POSTS_PER_PAGE),
      total,
    },
  };
};
