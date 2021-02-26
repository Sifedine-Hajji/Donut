import { Flex, Image, Text } from "@chakra-ui/react";

export default function InventoryItem({ name, image, count }) {
  return (
    <Flex
      m="2"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p="6"
      w="128px"
      h="128px"
      borderRadius="16px"
      bg="white"
      cursor="pointer"
    >
      <Image src={image} w="90px" h="90px" />
      <Text pt="4">
        {name} : {count}
      </Text>
    </Flex>
  );
}
