import PostList from "@src/components/Posts";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPosts, getPostSlugs } from "@src/lib/posts";

const ArchivesPerPage = ({ posts, page, total }) => (
  <PostList
    posts={posts}
    page={page}
    total={total}
    title={`Archives`}
    urlPrefix={`/archives`}
  />
);

export default ArchivesPerPage;

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
  const { posts, total } = await getPosts();

  return {
    props: {
      posts: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
      page: Number(page),
      total,
    },
  };
};
