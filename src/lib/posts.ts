import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";

export const POSTS_PATH = join(process.cwd(), "src/posts");
export const POSTS_PER_PAGE = 10;
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const getPosts = (pageNumber = 1, perPage = POSTS_PER_PAGE) => {
  const allPosts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    return {
      content,
      data,
      filePath,
    };
  });
  const posts = allPosts.slice(
    (pageNumber - 1) * perPage,
    pageNumber * perPage
  );
  const total = allPosts.length;
  return {
    posts,
    total,
  };
};

export const getPostSlugs = () => {
  const slugs = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return slugs;
};

export const getPostBySlug = async (slug) => {
  const postFilePath = join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, "utf8");

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  return {
    mdxSource,
    data,
  };
};
