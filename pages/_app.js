import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { nanoid } from "nanoid";
import { useState } from "react";

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
  const [currentGame, setCurrentGame] = useState();

  function handleSubmitClick(nameInput, playerInput) {
    setData([
      {
        gamesID: nanoid(),
        nameOfGame: nameInput,
        players: playerInput,
      },
      ...data,
    ]);
    setCurrentGame({
      gamesID: nanoid(),
      nameOfGame: nameInput,
      players: playerInput,
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        onSubmitClick={handleSubmitClick}
        data={data}
        currentGame={currentGame}
      />
    </>
  );
}

export default MyApp;
