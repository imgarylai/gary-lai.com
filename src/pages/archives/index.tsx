import ArchivePosts from "@src/components/ArchivePosts";
import { getPosts } from "@src/lib/posts";

const Archives = ({ posts, total }) => {
  return <ArchivePosts posts={posts} total={total} />;
};

export default Archives;

export const getStaticProps = async ({ params }) => {
  const { posts, total } = await getPosts(1, 10);
  return { props: { posts, total } };
};
