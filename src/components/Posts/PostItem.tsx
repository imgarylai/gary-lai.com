import { Grid, GridItem, Link, useColorModeValue } from "@chakra-ui/react";
import { H5 } from "@src/components/Typography/Headings";
import dayjs from "dayjs";
import NextLink from "next/link";

const PostItem = ({ post }) => (
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
          <H5>{dayjs(post.data.date).format("YYYY MMM D")} </H5>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 10 }} order={{ base: -1, md: 0 }}>
          <H5
            _hover={{
              textDecoration: "none",
            }}
          >
            {post.data.title}
          </H5>
        </GridItem>
      </Grid>
    </Link>
  </NextLink>
);
export default PostItem;
