import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";

interface FrontMatter {
  title?: string;
  description?: string;
  date?: Date | string;
  tags?: string[];
  [p: string]: any;
}

export default interface PostProps {
  slug: string;
  source: MDXRemoteSerializeResult;
  frontMatter: FrontMatter;
}
