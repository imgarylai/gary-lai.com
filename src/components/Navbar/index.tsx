import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  IconButton,
  ScaleFade,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { DesktopNav } from "@src/components/Navbar/DesktopNav";
import { MobileNav } from "@src/components/Navbar/MobileNav";
import { useNavbarContext } from "@src/context/useNavbarContext";
import Image from "next/image";
import NextLink from "next/link";
import { IoMoon, IoSunny } from "react-icons/io5";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isNavbarOpen, onNavbarToggle } = useNavbarContext();

  return (
    <Box>
      <Flex
        as={"header"}
        pos="fixed"
        top="0"
        w={"full"}
        minH={"60px"}
        boxShadow={"sm"}
        zIndex="999"
        justify={"center"}
        css={{
          backdropFilter: "saturate(180%) blur(5px)",
          backgroundColor: useColorModeValue(
            "rgba(255, 255, 255, 0.8)",
            "rgba(26, 32, 44, 0.8)"
          ),
        }}
      >
        <Container as={Flex} maxW={"6xl"} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onNavbarToggle}
              icon={
                isNavbarOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              size={"sm"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1, md: "auto" }}
            justify={{ base: "center", md: "start" }}
          >
            <NextLink href={"/"} passHref>
              <Stack
                as={"a"}
                direction={"row"}
                alignItems={"center"}
                spacing={{ base: 2, sm: 4 }}
              >
                <Image
                  src="/images/logo.svg"
                  alt={"Gary like Bubble Tea!"}
                  width={"48"}
                  height={"48"}
                />
              </Stack>
            </NextLink>
          </Flex>

          <Stack
            direction={"row"}
            align={"center"}
            spacing={8}
            flex={{ base: 1, md: "auto" }}
            justify={"flex-end"}
          >
            <DesktopNav display={{ base: "none", md: "flex" }} />
            <IconButton
              size={"sm"}
              variant={"ghost"}
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              icon={
                colorMode == "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
          </Stack>
        </Container>
      </Flex>
      <MobileNav isNavbarOpen={isNavbarOpen} />
    </Box>
  );
};
export default Navbar;
