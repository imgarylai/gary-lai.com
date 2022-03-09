import { Heading } from "@chakra-ui/react";

export const H1 = (props: any) => (
  <Heading as="h1" size="2xl" py={2} {...props} />
);

export const H2 = (props: any) => (
  <Heading as="h2" size="xl" py={2} {...props} />
);

export const H3 = (props: any) => (
  <Heading as="h3" size="lg" py={2} {...props} />
);

export const H4 = (props: any) => (
  <Heading as="h4" size="md" py={2} {...props} />
);

export const H5 = (props: any) => (
  <Heading as="h5" size="sm" py={2} {...props} />
);

export const H6 = (props: any) => (
  <Heading as="h6" size="xs" py={2} {...props} />
);
