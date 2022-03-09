import {
  Flex,
  Link,
  ScaleFade,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NAV_ITEMS, NavItem } from "@src/components/Navbar/navData";
import { useNavbar } from "@src/context/useNavbar";
import NextLink from "next/link";

interface MobileNavProps {
  isNavbarOpen: boolean;
}

export const MobileNav = ({ isNavbarOpen }: MobileNavProps) => {
  return (
    <ScaleFade initialScale={0.9} in={isNavbarOpen} unmountOnExit={true}>
      <Stack
        p={4}
        display={{ md: "none" }}
        zIndex={9999}
        pos="fixed"
        top="60px"
        w={"full"}
        bg={"white"}
        minH={"calc(100vh - 60px)"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    </ScaleFade>
  );
};

const MobileNavItem = ({ href, label }: NavItem) => {
  const { onNavbarToggle } = useNavbar();
  return (
    <Stack spacing={4}>
      <NextLink href={href ?? "#"} passHref>
        <Flex
          py={2}
          as={Link}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
          onClick={onNavbarToggle}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Flex>
      </NextLink>
    </Stack>
  );
};
