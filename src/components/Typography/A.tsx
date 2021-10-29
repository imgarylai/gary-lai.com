import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const A: ({
  as,
  href,
  ...otherProps
}: {
  as: string;
  href: string;
  [p: string]: any;
}) => JSX.Element = ({ as, href, ...otherProps }) => (
  <NextLink as={as} href={href}>
    <Link color={`teal`} {...otherProps} />
  </NextLink>
);
export default A;
