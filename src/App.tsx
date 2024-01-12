import { useState } from "react";
import { toNumber } from "lodash";
import Sprite from "./components/sprite/Sprite";

function App() {
  const [width, setWidth] = useState(30);
  const [curWidth, setCurWidth] = useState(width);
  const [height, setHeight] = useState(30);
  const [curHeight, setCurHeight] = useState(height);
  const [champ, setChamp] = useState("Seraphine");
  const [curChamp, setCurChamp] = useState(champ);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2">
        <label htmlFor="w">Width of sprite:</label>{" "}
        <input
          id="w"
          type="text"
          value={curWidth}
          onBlur={() => {
            setWidth(curWidth);
          }}
          onChange={(e) => {
            setCurWidth(toNumber(e.target.value));
          }}
        ></input>
      </div>
      <div className="flex flex-row gap-2">
        <label htmlFor="h">Height of sprite:</label>{" "}
        <input
          id="h"
          type="text"
          value={curHeight}
          onBlur={() => {
            setHeight(curHeight);
          }}
          onChange={(e) => {
            setCurHeight(toNumber(e.target.value));
          }}
        ></input>
      </div>
      <div className="flex flex-row gap-2">
        <label htmlFor="champ">Champion to show:</label>
        <input
          id="champ"
          type="text"
          value={curChamp}
          onBlur={() => {
            setChamp(curChamp);
          }}
          onChange={(e) => {
            setCurChamp(e.target.value);
          }}
        ></input>
      </div>
      <Sprite width={width} height={height} val={champ} />
    </div>
  );
}

export default App;
