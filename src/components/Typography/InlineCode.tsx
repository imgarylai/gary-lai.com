import { Code, useColorModeValue } from "@chakra-ui/react";

const InlineCode = (props: any) => (
  <Code
    apply="mdx.code"
    color={useColorModeValue("gray.800", "gray.200")}
    {...props}
  />
);
export default InlineCode;
