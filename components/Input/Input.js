import styled from "styled-components";

export default function Input({
  name,
  placeholder,
  labelText,
  value,
  onChange,
}) {
  return (
    <StyledDiv>
      <label htmlFor={name}>{labelText}</label>
      <input
        required
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
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
