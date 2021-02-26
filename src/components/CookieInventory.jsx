import { Flex } from "@chakra-ui/react";
import InventoryItem from "./InventoryItem";
import GameWrapper from "./GameWrapper";
import GameHeader from "./GameHeader";
import { items } from "../constants/items";

const getItemMage = (itemName) => {
  let image = null;
  items.forEach((item) => {
    if (item.name.toLowerCase() === itemName) image = item.image;
  });
  return image;
};

export default function CookieInventory({ user, getTotalScore }) {
  return (
    <GameWrapper w="30%">
      <GameHeader title="Donut per click : " image="https://urlz.fr/f0lr">
        {getTotalScore()}
      </GameHeader>

      <Flex w="100%" py="4" px="6" spacing={4} flexWrap="wrap">
        {Object.keys(user.inventory).map((key) => (
          <InventoryItem
            key={key}
            name={key}
            image={getItemMage(key)}
            count={user.inventory[key]}
            user={user}
          />
        ))}
      </Flex>
    </GameWrapper>
  );
}
