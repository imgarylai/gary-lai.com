import { POSTS_PER_PAGE } from "@src/lib/consts";
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
export const getAllPosts = async (pageNumber = 1, perPage = POSTS_PER_PAGE) => {
  const allPosts = await Promise.all(
    getPostSlugs.map(async (slug) => await getPostBySlug(slug))
  );
  const posts = allPosts
    .sort((a, b) => (dayjs(b.data.date).isAfter(a.data.date) ? 1 : -1))
    .slice((pageNumber - 1) * perPage, pageNumber * perPage);
  const total = allPosts.length;
  return {
    posts,
    total,
  };
};

export const getPostBySlug = async (slug) => {
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
