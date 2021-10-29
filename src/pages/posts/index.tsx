import PostList from "@src/components/Posts";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPosts } from "@src/lib/posts";

import { NextPage } from "next";

const Posts: NextPage = ({ posts, total }) => (
  <>
    <PostList
      posts={posts}
      page={1}
      total={total}
      title={`Archives`}
      urlPrefix={`/archives`}
    />
  </>
);

export default Posts;

export const getStaticProps = async () => {
  const { posts, total } = await getPosts();

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      total: total,
    },
  };
};
