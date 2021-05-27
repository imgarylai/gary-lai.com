import { HStack } from "@chakra-ui/react";
import TagLink from "@src/components/TagLink";
import { H2 } from "@src/components/Typography/Headings";
import { getTagsWithOccurrences } from "@src/lib/posts";
import { NextSeo } from "next-seo";

const Tags = ({ tags }) => {
  return (
    <>
      <NextSeo title={`Tags`} />
      <H2 as={`h1`}>Tags</H2>
      <HStack spacing={2} my={4}>
        {Object.keys(tags).map((tag) => (
          <>
            <TagLink key={tag} tag={`${tag}`} count={tags[tag]} />
          </>
        ))}
      </HStack>
    </>
  );
};

export default Tags;

export const getStaticProps = async () => {
  const tags = await getTagsWithOccurrences();
  return {
    props: {
      tags,
    },
  };
};
