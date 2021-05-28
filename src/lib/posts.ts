import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";

export const POSTS_PATH = join(process.cwd(), "src/posts");

const getSlugFromFileName = (filePath) => {
  return filePath.replace(/\.mdx?$/, "");
};

export const getPostSlugs = fs.readdirSync(POSTS_PATH).map(getSlugFromFileName);

export const getPostBySlug = async (slug: string) => {
  const postFilePath = join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, "utf8");

  const { content, data } = matter(source);

  const mdxSource = await serialize(content);
  return {
    slug,
    mdxSource,
    data,
  };
};

export const getPosts = async () => {
  const allPosts = await Promise.all(
    getPostSlugs.map(async (slug) => await getPostBySlug(slug))
  );
  return {
    posts: allPosts.sort((a, b) =>
      dayjs(b.data.date).isAfter(a.data.date) ? 1 : -1
    ),
    total: allPosts.length,
  };
};

export const getTags = async () => {
  const { posts } = await getPosts();
  return posts.reduce((flat, next) => flat.concat(next.data.tags), []).sort();
};

export const getTagsWithOccurrences = async () => {
  const tags = await getTags();
  return tags.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
};

export const getPostsByTag = async (tag) => {
  const { posts } = await getPosts();
  const filteredPosts = posts.filter((post) => post.data.tags.includes(tag));
  return {
    posts: filteredPosts,
    total: filteredPosts.length,
  };
};
