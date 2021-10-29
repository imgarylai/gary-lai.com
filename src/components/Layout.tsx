import { Container, Stack, useColorModeValue } from "@chakra-ui/react";
import Footer from "@src/components/Footer";
import Navbar from "@src/components/Navbar";
import { NavbarProvider } from "@src/context/useNavbarContext";
import React from "react";

const Layout: React.FC = ({ children }) => (
  <NavbarProvider>
    <Navbar />
    <Stack bg={useColorModeValue("gray.50", "gray.900")} mt={"60px"} py={4}>
      <Container maxW={"6xl"}>{children}</Container>
    </Stack>
    <Footer />
  </NavbarProvider>
);
export default Layout;
