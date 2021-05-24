import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";

export const Ul = (props) => <UnorderedList my={1} pl={4} ml={2} {...props} />;
export const Ol = (props) => <OrderedList my={1} pl={4} ml={2} {...props} />;
export const Li = (props) => <ListItem my={1} {...props} />;
