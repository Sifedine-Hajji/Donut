import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Gameheader from "./GameHeader";
import GameWrapper from "./GameWrapper";
import Item from "./Item";
import { items } from "../constants/items";

export default function CookieStore({ score, onItemPay }) {
  console.log("SCORE " + score);

  useEffect(() => {}, [score]);

  return (
    <GameWrapper w="30%">
      <Gameheader title="Store" image="https://urlz.fr/eZ7W" />
      <Flex w="100%" py="4" px="6" spacing={4} flexWrap="wrap">
        {items.map((item, index) => (
          <Item
            {...item}
            key={index}
            currentScore={score}
            onItemPay={(name, price) => onItemPay(name, price)}
          />
        ))}
      </Flex>
    </GameWrapper>
  );
}
