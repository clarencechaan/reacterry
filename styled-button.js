import React from "react";
import styled from "styled-components";

const App = () => {
  const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: lightblue;
      color: black;
    }
  `;

  return <Button>Click me!</Button>;
};

export default App;
