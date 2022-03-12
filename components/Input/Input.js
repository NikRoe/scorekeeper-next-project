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

      <StyledInput

        required
        id={name}
        name={name}
        placeholder={placeholder}

        value={value}
        onChange={onChange}
      ></StyledInput>


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

const StyledInput = styled.input`
  color: #91aac9;
  border-radius: 5px;
  border: 2px solid #91aac9;
`;
