import { useState } from "react";

const App = () => {
  const [wordCount, setWordCount] = useState(0);

  function handleTextAreaChange(e) {
    let text = e.target.value;
    text = text.replaceAll("\n", " ");
    text = text.split(" ").filter((word) => word);
    setWordCount(text.length);
  }

  return (
    <>
      <textarea data-testid="textarea-id" onChange={handleTextAreaChange} />
      <h1 data-testid="output-id">
        Your article has {wordCount} word{wordCount === 1 ? "" : "s"}
      </h1>
    </>
  );
};

export default App;
