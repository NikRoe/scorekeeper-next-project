import styled from "styled-components";

export default function Input({ name, placeholder, labelText }) {
  return (
    <StyledDiv>
      <label htmlFor={name}>{labelText}</label>
      <input required id={name} name={name} placeholder={placeholder}></input>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  max-width: 40vw;
  gap: 0.5rem;
`;
