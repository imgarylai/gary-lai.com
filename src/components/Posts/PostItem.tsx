import { Grid, GridItem, Link, useColorModeValue } from "@chakra-ui/react";
import { H5 } from "@src/components/Typography/Headings";
import dayjs from "dayjs";
import NextLink from "next/link";
import PostProps from "@src/types/postProps";

interface PostItemProps {
  post: PostProps;
}

const PostItem = ({ post }: PostItemProps) => (
  <NextLink href={`/posts/${post.slug}`} passHref>
    <Link
      _hover={{
        textDecoration: "none",
      }}
    >
      <Grid
        templateColumns={{
          md: "repeat(12, 1fr)",
        }}
        gap={{ base: 0, md: 2 }}
        alignItems={`center`}
        flexDirection={{ md: "row-reverse" }}
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
        _hover={{
          color: useColorModeValue("blackAlpha.600", "whiteAlpha.600"),
        }}
      >
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <H5>{dayjs(post.frontMatter.date).format("YYYY MMM D")} </H5>
        </GridItem>
        <GridItem
          colSpan={{ base: 1, md: 10 }}
          order={{ base: -1, md: 0 }}
          _hover={{
            textDecoration: "none",
          }}
        >
          <H5>{post.frontMatter.title}</H5>
        </GridItem>
      </Grid>
    </Link>
  </NextLink>
);
export default PostItem;
