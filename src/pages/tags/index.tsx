import { HStack } from "@chakra-ui/react";
import TagLink from "@src/components/TagLink";
import { H2 } from "@src/components/Typography/Headings";
import { getTagsWithOccurrences } from "@src/lib/posts";
import { NextSeo } from "next-seo";
import TagsProps from "@src/types/tagsProps";

const Tags = ({ tagsWithOccurrences }: TagsProps) => {
  return (
    <>
      <NextSeo title={`Tags`} />
      <H2 as={`h1`}>Tags</H2>
      <HStack spacing={2} my={4}>
        {Object.keys(tagsWithOccurrences).map((key: string) => (
          <TagLink key={key} tagName={key} count={tagsWithOccurrences[key]} />
        ))}
      </HStack>
    </>
  );
};

export default Tags;

export const getStaticProps = async () => {
  const tagsWithOccurrences = await getTagsWithOccurrences();
  return {
    props: {
      tagsWithOccurrences,
    },
  };
};
