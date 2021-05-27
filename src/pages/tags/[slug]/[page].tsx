import PostList from "@src/components/Posts";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import { getPostsByTag, getTagsWithOccurrences } from "@src/lib/posts";

const PostsByTagPerPage = ({ posts, page, total, slug }) => (
  <PostList
    posts={posts}
    page={page}
    total={total}
    title={"Tags"}
    urlPrefix={`/tags/${slug}`}
  />
);

export default PostsByTagPerPage;

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

export const getStaticProps = async ({ params }) => {
  const { slug, page } = params;
  const { posts, total } = await getPostsByTag(slug);

  return {
    props: {
      slug,
      posts: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
      page: Number(page),
      total,
    },
  };
};
