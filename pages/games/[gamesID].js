import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../../components/Button/Button";

export default function Game({ data }) {
  // using dynaming routing to create infinite amount of pages
  console.log("data:", data);
  // const query = useRouter().query;
  const router = useRouter();
  const { gamesID } = router.query;

  // console.log("gamesID", gamesID);

  console.log("query", gamesID);
  console.log("data", data[0].gamesID);

  // const currentGame = data.filter((entry) => entry.gamesID == 5);

  // console.log(currentGame[0].gamesID == gamesID);

  // console.log(currentGame);

  return (
    <>
      <Head>Scorekeeper</Head>
      <h1>Scorekeeper</h1>

      <Button name={"Reset scores"}></Button>
      <Button name={"End game"}></Button>
    </>
  );
}

// we need to create ids we can reference to
// we need data (our array of games)
