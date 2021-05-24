import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  styles: {
    global: {
      "html, #__next": {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
      },
      ".body": {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: "scroll", // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});
export default theme;
