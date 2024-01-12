export type SpriteCoordinates = {
   x: number;
   y: number;
};

export type SpriteData = {
   tileWidth: number;
   tileHeight: number;
   totalWidth: number;
   totalHeight: number;
   sprites: Record<string, SpriteCoordinates>;
};

export interface SpriteProps {
   src: string;
   width?: number;
   height?: number;
   val?: string;
   data?: SpriteData;
   totalWidth?: number;
   totalHeight?: number;
   tileWidth?: number;
   tileHeight?: number;
   x?: number;
   y?: number;
}

export interface SpriteImageProps extends SpriteProps {
   width: number;
   height: number;
}
