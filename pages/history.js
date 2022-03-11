import Link from "next/link";
// import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Game from "../components/Game/Game";

export default function History({ data }) {
  return (
    <>
      <h1>Scorekeeper</h1>
      <h2>Previous Games</h2>
      <section>
        {data.map((game) => (
          <StyledDiv key={game.gamesID}>
            <Game game={game}></Game>
          </StyledDiv>
        ))}
      </section>

      <Link href="/">
        <a>
          <Button name={"Back to home page"}></Button>
        </a>
      </Link>
    </>
  );
}

const StyledDiv = styled.div`
  border-radius: 14px;
  padding: 2rem;
  border: black solid 2px;
  margin: 2rem;
`;
