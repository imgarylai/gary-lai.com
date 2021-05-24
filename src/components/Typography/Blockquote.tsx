import { Alert, useColorMode } from "@chakra-ui/react";

const Blockquote = (props) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.200",
    dark: "gray.800",
  };

  return (
    <Alert
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

export default Blockquote;
