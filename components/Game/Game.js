import { useState } from "react";
import Button from "../Button/Button";
import styled from "styled-components";

export default function Game({ game }) {
  const [showScore, setShowScore] = useState(false);

  function handleClick() {
    setShowScore(!showScore);
  }
  return (
    <>
      <StyledGameName>{game.nameOfGame}</StyledGameName>
      <Button name={"Continue Game"}></Button>
      <Button onClick={handleClick} name={"Show scores"}></Button>

      {showScore &&
        game.players.map((player) => (
          <>
            <p key={player.name}>{player.name}</p>
            <p key={player.score}> {player.score}</p>
          </>
        ))}
    </>
  );
}

const StyledGameName = styled.h2`
  color: #294d77;
`;
