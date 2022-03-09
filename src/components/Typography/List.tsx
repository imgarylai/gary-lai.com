import {
  ListItem,
  ListItemProps,
  ListProps,
  OmitCommonProps,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  LiHTMLAttributes,
  OlHTMLAttributes,
} from "react";

export const Ul = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
      keyof ListProps
    > &
    ListProps & { as?: "ul" | undefined }
) => <UnorderedList my={1} pl={4} ml={2} {...props} />;

export const Ol = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>,
      keyof ListProps
    > &
    ListProps & { as?: "ol" | undefined }
) => <OrderedList my={1} pl={4} ml={2} {...props} />;

export const Li = (
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
      keyof ListProps
    > &
    ListItemProps & { as?: "li" | undefined }
) => <ListItem my={1} {...props} />;
