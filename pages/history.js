import Link from "next/link";
// import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Game from "../components/Game/Game";

export default function History({ data }) {
  return (
    <>
      <StyledH1>Scorekeeper</StyledH1>
      <StyledH2>Previous Games</StyledH2>
      <section>
        {data.map((game) => (
          <StyledDiv key={game.gamesID}>
            <Game game={game}></Game>
          </StyledDiv>
        ))}
      </section>

      <Link href="/">
        <a>
          <Button name={"Play"}></Button>
        </a>
      </Link>
    </>
  );
}

const StyledDiv = styled.div`
  background-color: white;
  border-radius: 14px;
  padding: 2rem;
  border: white solid 2px;
  margin: 2rem;
  box-shadow: -5px 13px 12px -1px rgba(0, 0, 0, 0.75);
`;

const StyledH1 = styled.h1`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
const StyledH2 = styled.h2`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
