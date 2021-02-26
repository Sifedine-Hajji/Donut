import { Flex } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import CookieScore from "../components/CookieScore";
import CookieStore from "../components/CookieStore";
import CookieInventory from "../components/CookieInventory";
import Title from "../components/Title";
import { backgroundImage } from "../constants";
import { items } from "../constants/items";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function Home() {
  const [user, setUser] = useState({
    currentScore: 0,
    gameTime: 0,
    inventory: {
      homer: 0,
      marge: 0,
      bart: 0,
      liza: 0,
    },
  });

  useInterval(() => {
    setUser({ ...user, currentScore: user.currentScore + getTotalScore() });
  }, 1000);

  const getItemMultiplicator = (itemName) => {
    let multiplicator = 0;
    items.forEach((item) => {
      if (item.name.toLowerCase() === itemName)
        multiplicator = item.multiplicator;
    });
    return multiplicator;
  };

  const getTotalScore = () => {
    const totalScore = Object.keys(user.inventory)
      .map((key) => user.inventory[key] * getItemMultiplicator(key))
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    console.log("TOTAL SCORE : " + totalScore);

    if (totalScore === 0) return 1;

    return totalScore;
  };

  const onScoreIncrement = () => {
    setUser({ ...user, currentScore: user.currentScore + getTotalScore() });
  };

  const onItemPay = (name, price) => {
    setUser({
      ...user,
      currentScore: user.currentScore - price,
      inventory: { ...user.inventory, [name]: user.inventory[name] + 1 },
    });
  };

  console.log("INDEX SCORE : " + user.currentScore);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      height="100vh"
      w="100%"
      bg="#91D4F7"
      backgroundImage={`url("${backgroundImage}")`}
      backgroundAttachment="fixed"
    >
      <Title />

      <Flex alignItems="strech" w="100%">
        <Flex w="100%" h="100%" alignSelf="flex-start">
          <CookieInventory user={user} getTotalScore={getTotalScore} />

          <CookieScore user={user} onScoreIncrement={onScoreIncrement} />

          <CookieStore score={user.currentScore} onItemPay={onItemPay} />
        </Flex>
      </Flex>
    </Flex>
  );
}
