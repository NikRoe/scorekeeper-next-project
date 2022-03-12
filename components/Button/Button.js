import styled from "styled-components";

export default function Button({ name, onClick }) {
  return <ButtonStyle onClick={onClick}>{name}</ButtonStyle>;
}

const ButtonStyle = styled.button`
  background-color: #faa92c;
  color: white;
  border: 2px solid #e6931c;
  border-radius: 10px;
  height: 40px;
  padding-left: 1em;
  padding-right: 1em;
  transition: 0.6s;
  margin-left: 0.5em;
  margin-right: 0.5em;

  &:hover {
    background-color: #f9c8a4;
    border: 2px solid #faa92c;
    color: #6062ce;
  }
`;
