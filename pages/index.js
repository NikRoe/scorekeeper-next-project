import Head from "next/head";
import Form from "../components/Form/Form";

export default function Home({ onSubmitClick, handleGameInput }) {
  return (
    <>
      <Head>Scorekeeper</Head>
      <h1>Scorekeeper</h1>
      <Form
        onSubmitClick={onSubmitClick}
        handleGameInput={handleGameInput}
      ></Form>
    </>
  );
}

{
  /* <Form></Form>
<Button></Button> */
}
