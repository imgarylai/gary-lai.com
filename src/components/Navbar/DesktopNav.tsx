import {
  Box,
  BoxProps,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "@src/components/Navbar/navData";
import NextLink from "next/link";

export const DesktopNav = (props: BoxProps) => {
  return (
    <Stack direction={"row"} spacing={4} {...props}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href ?? "#"} passHref>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={useColorModeValue("gray.600", "gray.200")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("gray.800", "white"),
              }}
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  );
};
