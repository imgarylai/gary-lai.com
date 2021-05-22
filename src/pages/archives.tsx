import { postFilePaths, POSTS_PATH } from "@src/utils/mdxUtils";
import fs from "fs";
import matter from "gray-matter";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import path from "path";

const Archives = ({ posts }) => (
  <>
    <NextSeo title={"Archives"} />
    <ul>
      {posts.map((post) => (
        <li key={post.filePath}>
          <NextLink
            as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/posts/[slug]`}
          >
            <a>{post.data.title}</a>
          </NextLink>
        </li>
      ))}
    </ul>
  </>
);

export default Archives;

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
