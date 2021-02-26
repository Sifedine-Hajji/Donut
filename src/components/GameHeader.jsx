import { HStack, Image, Heading } from "@chakra-ui/react";

export default function GameHeader({ title, image, children }) {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      bg="#EE5BA1"
      width="100%"
      color="white"
    >
      <Image src={image} w="64px" h="64px" />
      <Heading variant="h2">
        {title} {children}
      </Heading>
    </HStack>
  );
}
