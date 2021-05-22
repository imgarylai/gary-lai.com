import { Container, Stack, useColorModeValue } from "@chakra-ui/react";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <Stack bg={useColorModeValue("gray.50", "gray.900")} mt={"60px"} py={4}>
      <Container maxW={"6xl"}>{children}</Container>
    </Stack>
    <Footer />
  </>
);
export default Layout;
