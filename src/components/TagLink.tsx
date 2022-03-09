import { Link, Tag, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface TagLinkProps {
  tagName: string;
  count?: number;
}

const TagLink = ({ tagName, count = 0 }: TagLinkProps) => (
  <NextLink href={`/tags/${tagName}`} passHref>
    <Link
      _hover={{
        color: useColorModeValue("blackAlpha.600", "whiteAlpha.600"),
      }}
    >
      <Tag
        colorScheme={useColorModeValue("gray.600", "gray.300")}
        bg={useColorModeValue("gray.300", "gray.600")}
      >
        {tagName} {count > 0 ? `x ${count}` : ``}
      </Tag>
    </Link>
  </NextLink>
);

export default TagLink;
