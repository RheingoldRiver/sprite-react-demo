import { useState } from "react";
import { toNumber } from "lodash";
import Sprite from "./components/Sprite/Sprite";
import data from "./components/Sprite/data.json";

function App() {
  const [width, setWidth] = useState(30);
  const [curWidth, setCurWidth] = useState(width);
  const [height, setHeight] = useState(30);
  const [curHeight, setCurHeight] = useState(height);
  const [champ, setChamp] = useState("Seraphine");
  const [curChamp, setCurChamp] = useState(champ);

  const curChampData = data.sprites[curChamp as keyof typeof data.sprites] ?? data.sprites["-1"];

  return (
    <div className="flex flex-col ml-4 mt-4 gap-2">
      <div className="flex flex-row gap-2">
        <label htmlFor="w">Width of sprite:</label>{" "}
        <input
          className="border border-px border-solid border-black rounded"
          id="w"
          size={2}
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
          className="border border-px border-solid border-black rounded"
          id="h"
          size={2}
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
          className="border border-px border-solid border-black rounded"
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
      <Sprite width={width} height={height} val={champ} data={data} src="/championSprite.png" />
      <Sprite
        width={width}
        height={height}
        val={champ}
        src="/championSprite.png"
        totalWidth={data.totalWidth}
        totalHeight={data.totalHeight}
        tileWidth={data.tileWidth}
        tileHeight={data.tileHeight}
        x={curChampData.x}
        y={curChampData.y}
      />
      <div className="w-20 h-20">
        <Sprite val={champ} data={data} src="/championSprite.png" />
      </div>
      <div className="w-20 h-20">
        <Sprite
          val={champ}
          src="/championSprite.png"
          totalWidth={data.totalWidth}
          totalHeight={data.totalHeight}
          tileWidth={data.tileWidth}
          tileHeight={data.tileHeight}
          x={curChampData.x}
          y={curChampData.y}
        />
      </div>
    </div>
  );
}

export default App;
