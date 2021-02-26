import { Flex, Image, Text } from "@chakra-ui/react";

export default function Item({
  name,
  price,
  multiplicator,
  image,
  currentScore,
  onItemPay,
}) {
  const canPay = () => currentScore >= price;

  const onClick = () => {
    if (canPay()) {
      onItemPay(name.toLowerCase(), price);
    }
  };

  return (
    <Flex
      m="2"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      p="3"
      w="150px"
      h="150px"
      borderRadius="16px"
      bg={canPay() ? "white" : "red.100"}
      cursor="pointer"
      onClick={onClick}
    >
      X {multiplicator}
      <Image src={image} w="80px" h="80px" />
      <Text pt="4">
        {name} : {price}
      </Text>
    </Flex>
  );
}
