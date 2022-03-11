import { useState } from "react";
import Button from "../Button/Button";

export default function Game({ game }) {
  const [showScore, setShowScore] = useState(false);

  function handleClick() {
    setShowScore(!showScore);
  }
  return (
    <>
      <h2>{game.nameOfGame}</h2>
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
