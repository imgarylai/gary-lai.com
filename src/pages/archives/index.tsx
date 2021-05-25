import ArchivePosts from "@src/components/ArchivePosts";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getAllPosts } from "@src/lib/posts";

const Archives = ({ posts, total }) => {
  return <ArchivePosts posts={posts} total={total} />;
};

export default Archives;

export const getStaticProps = async ({ params }) => {
  const { posts, total } = await getAllPosts(1, POSTS_PER_PAGE);
  return { props: { posts, total } };
};
