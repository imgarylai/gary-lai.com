import { useColorMode } from "@chakra-ui/react";
import { DiscussionEmbed } from "disqus-react";
import { FC } from "react";

const Comments: FC = (props) => {
  const { colorMode } = useColorMode();

  return (
    <DiscussionEmbed
      {...props}
      theme={colorMode === "light" ? "dark" : "light"}
    />
  );
};
export default Comments;
