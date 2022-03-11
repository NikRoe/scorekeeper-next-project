import Link from "next/link";
import styled from "styled-components";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({ onSubmitClick }) {
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
      ></form>
      <StyledFieldset>
        <Input
          name={"Name of game"}
          placeholder={"e.g. Dodeligo"}
          labelText={"Name of game"}
        ></Input>
        <Input
          name={"Player names, separated by comma"}
          placeholder={"e.g. John Doe, Jane Doe"}
          labelText={"Player names, separated by comma"}
        ></Input>
        <Button
          onClick={onSubmitClick}
          name={"create Game"}
          type="submit"
        ></Button>
      </StyledFieldset>
      <StyledDiv>
        <Button name={"Play"}></Button>
        <Link href="/testGame">
          {/* needs to be replaced with the history page */}
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
`;

const StyledDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
