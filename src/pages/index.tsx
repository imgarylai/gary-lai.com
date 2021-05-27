import {
  Avatar,
  Badge,
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import PostItem from "@src/components/Posts/PostItem";
import { H2 } from "@src/components/Typography/Headings";
import { getPosts } from "@src/lib/posts";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
const Home = ({ posts }) => (
  <>
    <NextSeo title={"Gary Lai"} />
    <Grid
      templateColumns={{
        md: "repeat(12, 1fr)",
      }}
      gap={12}
    >
      <GridItem colSpan={{ md: 4 }}>
        <Center>
          <Box
            maxW={{ base: "320px", md: "100%" }}
            w={"full"}
            bg={useColorModeValue("white", "whiteAlpha.100")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Avatar
              size={"2xl"}
              src={"/images/gary.png"}
              alt={"Gary Lai"}
              mb={4}
              pos={"relative"}
            />
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              Gary Lai
            </Heading>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              @imgarylai
            </Text>
            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              I'm a software engineer and a 🧋 lover. My past experience was
              mostly in the E-Commerce fields. I like to turn jobs into
              automation and make my colleagues work less.
            </Text>

            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #API
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #REACTJS
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
              >
                #RUBY
              </Badge>
            </Stack>
          </Box>
        </Center>
      </GridItem>
      <GridItem colSpan={{ md: 8 }}>
        <Box>
          <H2>Recent Posts</H2>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={2}
            align="stretch"
            mb={2}
          >
            {posts &&
              posts.map((post) => <PostItem key={post.slug} post={post} />)}
          </VStack>
          <NextLink href={`/archives`} passHref>
            <Link>View all posts</Link>
          </NextLink>
        </Box>
      </GridItem>
    </Grid>
  </>
);

export default Home;

export const getStaticProps = async () => {
  const { posts, total } = await getPosts();

  return {
    props: {
      posts: posts.slice(0, 5),
      total,
    },
  };
};
