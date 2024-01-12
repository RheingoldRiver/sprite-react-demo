export type SpriteCoordinates = {
   x: number;
   y: number;
};

export type SpriteData = {
   imageWidth: number;
   imageHeight: number;
   sheetWidth: number;
   sheetHeight: number;
   sprites: Record<string, SpriteCoordinates>;
};

export interface SpriteProps {
   file: string;
   width?: number;
   height?: number;
   val?: string;
   data?: SpriteData;
   sheetWidth?: number;
   sheetHeight?: number;
   imageWidth?: number;
   imageHeight?: number;
   x?: number;
   y?: number;
}

export interface SpriteImageProps extends SpriteProps {
   width: number;
   height: number;
}
