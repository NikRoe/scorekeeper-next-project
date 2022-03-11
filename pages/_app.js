import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
// import { nanoid } from "nanoid";
import { useState } from "react";

const initialState = [
  {
    gamesID: 5,
    nameOfGame: "Dodelido",
    players: [
      { name: "John Doe", score: 0 },
      { name: "Jane Doe", score: 0 },
    ],
  },
  {
    gamesID: 7,
    nameOfGame: "Dodelido",
    players: [
      { name: "John Doe", score: 0 },
      { name: "Jane Doe", score: 0 },
    ],
  },
];

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(initialState);
  const [id, setId] = useState("");
  const [nameOfGame, setNameOfGame] = useState("");
  const [players, setPlayers] = useState([]);

  function handleGameInput(inputValue) {
    setNameOfGame(inputValue);
  }

  function handleSubmitClick(event) {
    console.log("event: ", event);
    event.preventDefault();
    setData([
      ...data,
      {
        gamesID: id,
        nameOfGame: nameOfGame,
        players: players,
      },
    ]);
  }
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleGameInput={handleGameInput}
        onSubmitClick={handleSubmitClick}
        data={data}
      />
    </>
  );
}

export default MyApp;
