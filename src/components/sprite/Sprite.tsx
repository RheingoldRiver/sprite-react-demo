import data from "./data.json";

function Sprite({ width, height, val }: { width: number; height: number; val: string }) {
  const valData = data.sprites[val as keyof typeof data.sprites];

  if (valData === undefined) {
    return "Please provide a valid champion to display, thanks :)";
  }

  const origWidth = data.imageWidth;
  const origHeight = data.imageHeight;

  const scaleFactorW = width / origWidth;
  const scaleFactorH = height / origHeight;

  return (
    <div
      style={{
        backgroundImage: `url(/championSprite.png)`,
        width: scaleFactorW * origWidth,
        height: scaleFactorH * origHeight,
        overflow: "hidden",
        backgroundSize: `${scaleFactorW * data.sheetWidth}px ${scaleFactorH * data.sheetHeight}px`,
        backgroundPosition: `-${scaleFactorW * valData.x}px -${scaleFactorH * valData.y}px`,
      }}
    ></div>
  );
}

export default Sprite;
