import { Link, Tag, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const TagLink = ({ tag, count = 0 }) => (
  <NextLink href={`/tags/${tag}`} passHref>
    <Link
      _hover={{
        color: useColorModeValue("blackAlpha.600", "whiteAlpha.600"),
      }}
    >
      <Tag
        colorScheme={useColorModeValue("gray.600", "gray.300")}
        bg={useColorModeValue("gray.300", "gray.600")}
      >
        {tag} {count > 0 ? `x ${count}` : ``}
      </Tag>
    </Link>
  </NextLink>
);

export default TagLink;
