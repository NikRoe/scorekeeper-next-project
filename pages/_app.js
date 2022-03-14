import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useRouter } from "next/router";

const initialState = [
  {
    gamesID: 5,
    nameOfGame: "Dodelido",
    players: [
      { name: "John Doe", score: 0, id: 20 },
      { name: "Jane Doe", score: 2, id: 1 },
    ],
  },
  {
    gamesID: 7,
    nameOfGame: "Dodelido",
    players: [
      { name: "John Doe", score: 3, id: 3 },
      { name: "Jane Doe", score: 0, id: 7 },
    ],
  },
];

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(initialState);
  const router = useRouter();

  console.log("data mainpage:", data);

  function handleSubmitClick(nameInput, playerInput) {
    const newID = nanoid();
    setData([
      {
        gamesID: newID,
        nameOfGame: nameInput,
        players: playerInput,
      },
      ...data,
    ]);
    router.push(`/games/${newID}`);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} onSubmitClick={handleSubmitClick} data={data} />
    </>
  );
}

export default MyApp;
