import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPosts } from "@src/lib/posts";
import Archives from "@src/pages/archives";

export default Archives;

export const getStaticProps = async () => {
  const { posts, total } = await getPosts();

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      total,
    },
  };
};
