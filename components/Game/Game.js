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
            <StyledGameInfos key={player.name}>{player.name}</StyledGameInfos>
            <StyledGameInfos key={player.score}>
              {" "}
              {player.score}
            </StyledGameInfos>
          </>
        ))}
    </>
  );
}

const StyledGameName = styled.h2`
  color: #294d77;
`;

const StyledGameInfos = styled.p`
  color: #294d77;
`;
