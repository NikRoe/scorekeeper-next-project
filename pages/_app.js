import { GlobalStyle } from "../components/GlobalStyle/GlobalStyle";
import { nanoid } from "nanoid";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);

  function handleSubmitClick() {
    setData([...data], {
      id: nanoid(20),
      nameOfGame: "Dodelido",
      player: [
        { name: "John Doe", score: 0 },
        { name: "Jane Doe", score: 0 },
      ],
    });
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

console.log(nanoid(5));
