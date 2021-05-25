import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Link,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { H1, H2 } from "@src/components/Typography/Headings";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

const ArchivePosts = ({ posts, total, page = 1 }) => {
  const hasNextPage = Math.ceil(total / POSTS_PER_PAGE) > page;
  const hasPreviousPage = page > 1;
  const pageTitle = `Archives ${hasPreviousPage ? ` - Page ${page}` : ""}`;

  return (
    <>
      <NextSeo title={pageTitle} />
      <H1>{pageTitle}</H1>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {posts &&
          posts.map((post) => (
            <Box key={post.filePath}>
              <NextLink
                as={`/posts/${post.slug}`}
                href={`/posts/[slug]`}
                passHref
              >
                <Link
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  <H2>{post.data.title}</H2>
                  <Text>{dayjs(post.data.date).format("MMM D, YYYY")}</Text>
                </Link>
              </NextLink>
            </Box>
          ))}
      </VStack>
      {posts && (
        <Flex my={4}>
          <Box>
            {hasPreviousPage && (
              <NextLink
                href="/archives/[page]"
                as={`/archives/${page - 1}`}
                passHref
              >
                <Link>
                  <ChevronLeftIcon /> Previous
                </Link>
              </NextLink>
            )}
          </Box>
          <Spacer />
          <Box>
            {hasNextPage && (
              <NextLink
                href="/archives/[page]"
                as={`/archives/${page + 1}`}
                passHref
              >
                <Link>
                  Next <ChevronRightIcon />
                </Link>
              </NextLink>
            )}
          </Box>
        </Flex>
      )}
    </>
  );
};
export default ArchivePosts;
