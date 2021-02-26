import { Image } from "@chakra-ui/react";
import GameHeader from "./GameHeader";
import GameWrapper from "./GameWrapper";

export default function CookieScore({ user, onScoreIncrement }) {
  const onCookieClick = () => onScoreIncrement();

  return (
    <GameWrapper width="40%">
      <GameHeader title="Donuts: " image="https://urlz.fr/eZ5S">
        {user.currentScore}
      </GameHeader>

      <Image
        onClick={onCookieClick}
        w="400px"
        h="400px"
        mt="150px"
        src="https://urlz.fr/eZ5S"
        cursor="pointer"
      />
    </GameWrapper>
  );
}
