import { Divider, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

const Hr: FC = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};
export default Hr;
