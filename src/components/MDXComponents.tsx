import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import Blockquote from "@src/components/Typography/Blockquote";
import Br from "@src/components/Typography/Br";
import Code from "@src/components/Typography/Code";
import { H1, H2, H3, H4, H5, H6 } from "@src/components/Typography/Headings";
import Hr from "@src/components/Typography/Hr";
import InlineCode from "@src/components/Typography/InlineCode";
import { Li, Ol, Ul } from "@src/components/Typography/List";
import P from "@src/components/Typography/P";
import Pre from "@src/components/Typography/Pre";

const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  inlineCode: InlineCode,
  br: Br,
  hr: Hr,
  p: P,
  ul: Ul,
  ol: Ol,
  li: Li,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  table: Table,
  tbody: Tbody,
  thead: Thead,
  tfoot: Tfoot,
  tr: Tr,
  th: Th,
  td: Td,
};
export default MDXComponents;
