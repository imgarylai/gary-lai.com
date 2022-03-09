import { Alert, useColorMode } from "@chakra-ui/react";

const Blockquote = (props: any) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.200",
    dark: "gray.800",
  };

  return (
    <Alert
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        "> *:first-of-type": {
          marginLeft: 8,
        },
      }}
      {...props}
    />
  );
};

export default Blockquote;
