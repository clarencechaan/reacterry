import { useState } from "react";

const App = () => {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function handleButtonClick() {
    setList((prev) => [...prev, value]);
    setValue("");
  }

  return (
    <div>
      <input
        data-testid="input-id"
        onChange={handleInputChange}
        value={value}
      />
      <button data-testid="button-id" onClick={handleButtonClick}>
        Add a todo
      </button>
      <ul data-testid="ul-id">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
