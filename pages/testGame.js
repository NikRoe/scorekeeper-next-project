import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Player from "../components/Player/Player";

const testGame = {
  gamesID: 5,
  nameOfGame: "Dodelido",
  players: [
    { name: "John Doe", score: 0, id: 20 },
    { name: "Jane Doe", score: 2, id: 1 },
  ],
};

export default function Game({}) {
  return (
    <>
      <Head>{testGame.nameOfGame}</Head>
      <StyledH1>Scorekeeper</StyledH1>
      <StyledDiv>
        {testGame.players.map((player) => (
          <Player player={player} key={player.id}></Player>
        ))}
      </StyledDiv>
      <Button name={"Reset scores"}></Button>
      <Button name={"End game"}></Button>
      <Link href="/">
        <a>
          <Button name="Play"></Button>
        </a>
      </Link>
    </>
  );
}

const StyledH1 = styled.h1`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
const StyledH2 = styled.h2`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
const StyledDiv = styled.div`
  background-color: white;
  border-radius: 14px;
  padding: 2rem;
  border: white solid 2px;
  margin: 2rem;
  color: #294d77;
  box-shadow: -5px 13px 12px -1px rgba(0, 0, 0, 0.75);
`;
