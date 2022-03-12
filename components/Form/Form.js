import { nanoid } from "nanoid";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

const initialFormData = {
  nameOfGame: "",
  playerNames: "",
};

export default function Form({ onSubmitClick }) {
  const [formData, setFormdata] = useState(initialFormData);

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onSubmitClick(
      formData.nameOfGame,
      formData.playerNames.split(",").map((player) => {
        return { name: player.trim(), score: 0, id: nanoid() };
      })
    );
  };

  return (
    <section>
      <form
        aria-labelledby="form-heading"
        aria-describedby="form-description"
        onSubmit={handleSubmit}
      >
        <StyledH2 id="form-heading">Create a new game</StyledH2>
        <StyledFieldset>
          <div>
            <Input
              name="nameOfGame"
              placeholder="e.g. Dodeligo"
              labelText="Name of game"
              value={formData.nameOfGame}
              onChange={handleChange}
            ></Input>
            <Input
              name="playerNames"
              placeholder="e.g. John Doe, Jane Doe"
              labelText="Player names, separated by comma"
              value={formData.playerNames}
              onChange={handleChange}
            ></Input>
          </div>
          <Button name="create Game"></Button>
        </StyledFieldset>
      </form>
      <StyledDiv>
        <Button name={"Play"}></Button>
        <Link href="/history">
          <a>
            <Button name={"History"}></Button>
          </a>
        </Link>
      </StyledDiv>
    </section>
  );
}

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  color: #294d77;
  margin: 1em;
  box-shadow: -5px 13px 12px -1px rgba(0, 0, 0, 0.75);
`;

const StyledDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledH1 = styled.h1`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
const StyledH2 = styled.h2`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
