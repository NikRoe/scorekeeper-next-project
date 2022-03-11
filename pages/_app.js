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

  function handleSubmitClick(event) {
    event.preventDefault();
    setData([
      ...data,
      {
        gamesID: 6,
        nameOfGame: "Dodelido",
        players: [
          { name: "John Doe", score: 0 },
          { name: "Jane Doe", score: 0 },
        ],
      },
    ]);
  }
  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} onSubmitClick={handleSubmitClick} data={data} />
    </>
  );
}

export default MyApp;
