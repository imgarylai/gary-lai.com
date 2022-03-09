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
  const textColorValue = useColorModeValue("gray.600", "gray.200");
  const hoverTextColorValue = useColorModeValue("gray.800", "white");
  return (
    <Stack direction={"row"} spacing={4} {...props}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href ?? "#"} passHref>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={textColorValue}
              _hover={{
                textDecoration: "none",
                color: hoverTextColorValue,
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
