import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import { POSTS_PER_PAGE } from "@src/lib/consts";
import NextLink from "next/link";

const Pagination = ({ page, total, urlPrefix = "" }) => {
  const hasNextPage = Math.ceil(total / POSTS_PER_PAGE) > page;
  const hasPreviousPage = page > 1;

  return (
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
  );
};

export default Pagination;
