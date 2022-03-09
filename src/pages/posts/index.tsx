import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPosts } from "@src/lib/posts";
import ArchivePage, { ArchivePageProps } from "@src/pages/archives/[page]";

const Posts = ({ posts, page, total }: ArchivePageProps) => (
  <ArchivePage posts={posts} page={page} total={total} />
);

export default Posts;

export const getStaticProps = async () => {
  const { posts, total } = await getPosts();

  return {
    props: {
      posts: posts.slice(0, POSTS_PER_PAGE),
      page: 1,
      total: total,
    },
  };
};
