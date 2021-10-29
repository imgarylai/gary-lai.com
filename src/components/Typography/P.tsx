import { Text } from "@chakra-ui/react";
import { FC } from "react";

const P: FC = (props) => <Text as={"p"} lineHeight="tall" my={4} {...props} />;
export default P;
