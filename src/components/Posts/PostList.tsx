import { StackDivider, VStack } from "@chakra-ui/react";
import PostItem from "@src/components/Posts/PostItem";

import PostProps from "@src/types/postProps";

export interface PostListProps {
  posts: PostProps[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={2}
      align="stretch"
      mb={2}
    >
      {posts && posts.map((post) => <PostItem key={post.slug} post={post} />)}
    </VStack>
  );
};
export default PostList;
