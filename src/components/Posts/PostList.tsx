import { StackDivider, VStack } from "@chakra-ui/react";
import PostItem from "@src/components/Posts/PostItem";

const PostList = ({ posts }) => {
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
