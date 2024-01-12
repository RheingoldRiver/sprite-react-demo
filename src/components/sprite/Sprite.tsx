import { useMeasure } from "react-use";
import { Ref } from "react";
import { SpriteCoordinates, SpriteImageProps, SpriteProps } from "./Sprite.types";

const Sprite = (props: SpriteProps) => {
  const [ref, { width, height }] = useMeasure();

  if (props.width === undefined && props.height === undefined) {
    return (
      <div ref={ref as Ref<HTMLDivElement>} style={{ width: "100%", height: "100%" }}>
        <SpriteImage {...props} width={width} height={height} />
      </div>
    );
  }
  return <SpriteImage {...props} width={props.width as number} height={props.height ?? (props.width as number)} />;
};

function SpriteImage({
  width,
  height,
  val,
  data,
  src,
  sheetWidth,
  sheetHeight,
  imageWidth,
  imageHeight,
  x,
  y,
}: SpriteImageProps) {
  const valData = data ? data.sprites[val as keyof typeof data.sprites] : ({ x, y } as SpriteCoordinates);

  if (valData === undefined) {
    return "Please provide a valid champion to display, thanks :)";
  }

  const origWidth = data ? data.imageWidth : (imageWidth as number);
  const origHeight = data ? data.imageHeight : (imageHeight as number);

  sheetWidth = data ? data.sheetWidth : (sheetWidth as number);
  sheetHeight = data ? data.sheetWidth : (sheetHeight as number);

  const scaleFactorW = width / origWidth;
  const scaleFactorH = height / origHeight;

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        width: scaleFactorW * origWidth,
        height: scaleFactorH * origHeight,
        overflow: "hidden",
        backgroundSize: `${scaleFactorW * sheetWidth}px ${scaleFactorH * sheetHeight}px`,
        backgroundPosition: `-${scaleFactorW * valData.x}px -${scaleFactorH * valData.y}px`,
      }}
    ></div>
  );
}

export default Sprite;
