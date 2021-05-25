import ArchivePosts from "@src/components/ArchivePosts";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getAllPosts, getPostSlugs } from "@src/lib/posts";

const ArchivePage = ({ posts, page, total }) => (
  <ArchivePosts posts={posts} page={page} total={total} />
);

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

export const getStaticProps = async ({ params }) => {
  const { page } = params;
  const { posts, total } = await getAllPosts(Number(page), POSTS_PER_PAGE);
  return { props: { posts, page: Number(page), total } };
};
