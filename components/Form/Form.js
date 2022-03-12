import Link from "next/link";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({ onSubmitClick, handleGameInput }) {
  console.log(StyledFieldset);
  return (
    <section>
      <h2 id="form-heading">Create a new game</h2>
      <p id="form-description">
        Here you may enter all the details you need to create a fancy and great
        game
      </p>
      <form
        aria-labelledby="form-heading"
        aria-describedby="form-description"
        onSubmit={(event) => onSubmitClick(event)}
      >
        <StyledFieldset>
          <div>
            <Input
              name="Name of game"
              placeholder="e.g. Dodeligo"
              labelText="Name of game"
              onChange={(event) => handleGameInput(event.target.value)}
            ></Input>
            <Input
              name="Player names, separated by comma"
              placeholder="e.g. John Doe, Jane Doe"
              labelText="Player names, separated by comma"
            ></Input>
          </div>
          <Button name="create Game" type="submit"></Button>
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
