import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import PostProps from "@src/types/postProps";
import TagsProps from "@src/types/tagsProps";

export const POSTS_PATH = join(process.cwd(), "src/posts");

const getSlugFromFileName = (filePath: string) => {
  return filePath.replace(/\.mdx?$/, "");
};

export const getPostSlugs = fs.readdirSync(POSTS_PATH).map(getSlugFromFileName);

export const getPostBySlug = async (slug: string): Promise<PostProps> => {
  const postFilePath = join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath, "utf8");
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);
  return {
    slug: slug,
    source: mdxSource,
    frontMatter: data,
  };
};

export const getPosts = async (): Promise<{
  posts: PostProps[];
  total: number;
}> => {
  const allPosts = await Promise.all(
    getPostSlugs.map(async (slug) => await getPostBySlug(slug))
  );
  return {
    posts: allPosts.sort((a, b) =>
      dayjs(b.frontMatter.date).isAfter(a.frontMatter.date) ? 1 : -1
    ),
    total: allPosts.length,
  };
};

export const getTags = async () => {
  const { posts } = await getPosts();
  return posts
    .reduce(
      (flat, next) => flat.concat(next.frontMatter!.tags!),
      [] as string[]
    )
    .sort();
};

export const getTagsWithOccurrences = async (): Promise<TagsProps> => {
  const tags = await getTags();
  return tags.reduce((obj: { [key: string]: number }, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
};

export const getPostsByTag = async (tag: string) => {
  const { posts } = await getPosts();
  const filteredPosts = posts.filter((post) =>
    post.frontMatter!.tags!.includes(tag)
  );
  return {
    posts: filteredPosts,
    total: filteredPosts.length,
  };
};
