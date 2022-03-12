import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button/Button";
import styled from "styled-components";

export default function Game({ data }) {
  // using dynaming routing to create infinite amount of pages
  // const router = useRouter;
  // const { gamesID } = router.query;
  return (
    <>
      <Head>Scorekeeper</Head>
      <StyledH1>Scorekeeper</StyledH1>
      <p>Post: </p>
      <div>
        {/* <Player>{Game.Player.name}</Player> */}
        <Button name={"-"}></Button>
        {/* <span>{Game.Player.score}</span> */}
        <Button name={"+"}></Button>
      </div>
      <Button name={"Reset scores"}></Button>
      <Button name={"End game"}></Button>
    </>
  );
}

const StyledH1 = styled.h1`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
const StyledH2 = styled.h2`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
