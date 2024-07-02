import type {
  Point,
  Canvas,
  FabricImage,
  FabricText,
  TEvent,
  FabricObject,
  FabricObjectProps,
  SerializedObjectProps,
  ObjectEvents,
} from 'fabric';

export interface TCornerPoint {
  tl: Point;
  tr: Point;
  bl: Point;
  br: Point;
}

export interface SpecifyPageArgs {
  page: number;
  PDFBase64: string;
  scale: number;
  password?: string;
}

export interface RenderImageArgs {
  url: string;
  scale?: number;
}

export interface CreateCloseFabricArgs {
  canvas: Canvas;
  event: SelectedEvent;
  fabric: FabricImage | FabricText;
  stroke?: string;
  uuid?: number;
}

export type SelectedEvent = Partial<TEvent> & {
  target: FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>;
};

export type SupportFileType = 'application/pdf' | 'image/png' | 'image/jpeg';
