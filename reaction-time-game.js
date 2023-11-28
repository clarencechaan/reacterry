import { useState } from "react";

let gameTimer;
let startTime;

function ReactionTest() {
  const [game, setGame] = useState(0);
  const [message, setMessage] = useState("");
  // 0: "Start Game"
  // 1: Red
  // 2: Green

  const startGameBtn = (
    <button
      style={{
        backgroundColor: "black",
        color: "white",
        border: "none",
        borderRadius: "5px",
        height: "40px",
        width: "120px",
        cursor: "pointer",
      }}
      onClick={() => {
        setMessage("");
        setGame(1);
        gameTimer = setTimeout(() => {
          setGame(2);
          startTime = Date.now();
        }, 1000 + Math.floor(Math.random() * 5000));
      }}
    >
      Start Game
    </button>
  );

  const redBtn = (
    <button
      style={{
        backgroundColor: "red",
        border: "none",
        borderRadius: "5px",
        height: "120px",
        width: "120px",
        cursor: "pointer",
      }}
      onClick={() => {
        clearTimeout(gameTimer);
        setMessage("You clicked too early!");
        setGame(0);
      }}
    />
  );

  const greenBtn = (
    <button
      style={{
        backgroundColor: "lightgreen",
        border: "none",
        borderRadius: "5px",
        height: "120px",
        width: "120px",
        cursor: "pointer",
      }}
      onClick={() => {
        setMessage("You took " + (Date.now() - startTime) + "ms!");
        setGame(0);
      }}
    />
  );

  let button;

  switch (game) {
    case 0:
      button = startGameBtn;
      break;
    case 1:
      button = redBtn;
      break;
    case 2:
      button = greenBtn;
      break;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {button}
      <h1> {message}</h1>
    </div>
  );
}

export default ReactionTest;
