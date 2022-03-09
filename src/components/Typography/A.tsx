import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const A = (props: any) => (
  <NextLink as={props.as} href={props.href!} passHref>
    <Link color={`teal`} {...props} />
  </NextLink>
);
export default A;
