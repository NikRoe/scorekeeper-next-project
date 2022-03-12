import Head from "next/head";
import Form from "../components/Form/Form";
import styled from "styled-components";

export default function Home({ onSubmitClick }) {
  return (
    <>
      <Head>Scorekeeper</Head>
      <StyledH1>Scorekeeper</StyledH1>
      <Form onSubmitClick={onSubmitClick}></Form>
    </>
  );
}

const StyledH1 = styled.h1`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
const StyledH2 = styled.h2`
  text-shadow: -2px 3px 6px rgba(0, 0, 0, 0.6);
`;
