import Head from "next/head";
// import { useRouter } from "next/router";
import Button from "../components/Button/Button";

export default function Game() {
  // using dynaming routing to create infinite amount of pages
  //   const router = useRouter;
  //   const { gamesID } = router.query;
  return (
    <>
      <Head>Scorekeeper</Head>
      <h1>Scorekeeper</h1>
      <p>Dodelido</p>
      <div>
        {/* <Player>{Game.Player.name}</Player> */}
        <Button name={"-"}></Button>
        {/* <span>{Game.Player.score}</span> */}
        <Button name={"+"}></Button>
      </div>
      <Button name={"Reset scores"}></Button>
      <Button name={"End game"}></Button>
    </>
  );
}
