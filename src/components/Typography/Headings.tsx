import { Heading } from "@chakra-ui/react";
import { FC } from "react";

export const H1: FC = (props) => (
  <Heading as="h1" size="2xl" py={2} {...props} />
);
export const H2: FC = (props) => (
  <Heading as="h2" size="xl" py={2} {...props} />
);
export const H3: FC = (props) => (
  <Heading as="h3" size="lg" py={2} {...props} />
);
export const H4: FC = (props) => (
  <Heading as="h4" size="md" py={2} {...props} />
);
export const H5: FC = (props) => (
  <Heading as="h5" size="sm" py={2} {...props} />
);
export const H6: FC = (props) => (
  <Heading as="h6" size="xs" py={2} {...props} />
);
