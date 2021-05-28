import { useColorMode } from "@chakra-ui/react";
import { DiscussionEmbed } from "disqus-react";

const Comments = (props) => {
  const { colorMode } = useColorMode();

  return <DiscussionEmbed {...props} theme={colorMode} />;
};
export default Comments;
