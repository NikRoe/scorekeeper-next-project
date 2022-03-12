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
          <StyledPlayerDiv key={player.id}>
            <StyledGameInfos>{player.name}</StyledGameInfos>
            <StyledGameInfos key={player.score}>
              {" "}
              {player.score}
            </StyledGameInfos>
          </StyledPlayerDiv>
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

const StyledPlayerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
