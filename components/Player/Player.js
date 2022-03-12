import { useState } from "react";
import Button from "../Button/Button";

export default function Player({ player }) {
  const [count, setcount] = useState(0);
  return (
    <>
      <p>{player.name}</p>
      <Button
        name={"-"}
        onClick={() => {
          setcount(count - 1);
        }}
      ></Button>
      {count}
      <Button
        name={"+"}
        onClick={() => {
          setcount(count + 1);
        }}
      ></Button>
    </>
  );
}
