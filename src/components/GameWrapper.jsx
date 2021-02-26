import { Flex } from "@chakra-ui/react";

export default function GameWrapper({ children, ...props }) {
  return (
    <Flex flexDir="column" alignItems="center" height="100%" {...props}>
      {children}
    </Flex>
  );
}
