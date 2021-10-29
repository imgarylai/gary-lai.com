import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { FC } from "react";

export const Ul: FC = (props) => (
  <UnorderedList my={1} pl={4} ml={2} {...props} />
);
export const Ol: FC = (props) => (
  <OrderedList my={1} pl={4} ml={2} {...props} />
);
export const Li: FC = (props) => <ListItem my={1} {...props} />;
