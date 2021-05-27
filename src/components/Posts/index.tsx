import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Spacer,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { H2, H3 } from "@src/components/Typography/Headings";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

const PostList = ({ posts, page, total, title, urlPrefix }) => {
  const hasNextPage = Math.ceil(total / POSTS_PER_PAGE) > page;
  const hasPreviousPage = page > 1;
  const pageTitle = `${title} ${hasPreviousPage ? ` - Page ${page}` : ""}`;

  return (
    <>
      <NextSeo title={pageTitle} />
      <H2 as={`h1`}>{pageTitle}</H2>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {posts &&
          posts.map((post) => (
            <NextLink key={post.slug} href={`/posts/${post.slug}`} passHref>
              <Link
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("blackAlpha.600", "whiteAlpha.600"),
                }}
              >
                <H3 as={`h2`}>{post.data.title}</H3>
                <Text>{dayjs(post.data.date).format("MMM D, YYYY")}</Text>
              </Link>
            </NextLink>
          ))}
      </VStack>
      {posts && (
        <Flex my={4}>
          <Box>
            {hasPreviousPage && (
              <NextLink href={urlPrefix + `/${page - 1}`} passHref>
                <Link>
                  <ChevronLeftIcon /> Previous {page - 1}/{total}
                </Link>
              </NextLink>
            )}
          </Box>
          <Spacer />
          <Box>
            {hasNextPage && (
              <NextLink href={urlPrefix + `/${page + 1}`} passHref>
                <Link>
                  Next {page + 1}/{total} <ChevronRightIcon />
                </Link>
              </NextLink>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
};
export default PostList;
