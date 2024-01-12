import { useState } from "react";
import "./App.css";
import { toNumber } from "lodash";

function App() {
  const [size, setSize] = useState(30);
  const [curSize, setCurSize] = useState(size);

  return (
    <>
      <label htmlFor="size"></label>{" "}
      <input
        id="size"
        type="text"
        value={curSize}
        onBlur={() => {
          setSize(curSize);
        }}
        onChange={(e) => {
          setCurSize(toNumber(e.target.value));
        }}
      ></input>
    </>
  );
}

export default App;
