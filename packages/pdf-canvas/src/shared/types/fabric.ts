import type {
  Point,
  Canvas,
  TEvent,
  FabricObject,
  FabricObjectProps,
  SerializedObjectProps,
  ObjectEvents,
  TPointerEventInfo,
  TPointerEvent,
  FabricImage,
  FabricText,
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
  target: FabricObject;
  stroke?: string;
  uuid?: number;
}

export type SelectedEvent = Partial<TEvent> & {
  target: FabricObject<Partial<FabricObjectProps>, SerializedObjectProps, ObjectEvents>;
};

export type SupportFileType = 'application/pdf' | 'image/png' | 'image/jpeg';

export interface CloseSvgOptions {
  stroke?: string;
  hoverStroke?: string;
  src?: string;
}

export type FabricPointerEvent = TPointerEventInfo<TPointerEvent>;
export type FabricSelectionCreatedEvent = Partial<TEvent<TPointerEvent>> & { selected: FabricObject[] };
export type FabricSelectionClearedEvent = Partial<TEvent<TPointerEvent>> & { deselected: FabricObject[] };

export interface FabricHookParams {
  id: string;
  pointerDown?: (event: FabricPointerEvent) => void;
  pointerMove?: (event: FabricPointerEvent) => void;
  pointerUp?: (event: FabricPointerEvent) => void;
  selectionCreated?: (event: FabricSelectionCreatedEvent) => void;
  selectionCleared?: (event: FabricSelectionClearedEvent) => void;
}

export type DropOffset = Record<'x' | 'y', number>;

interface CacheProperties {
  _cornerSize?: number;
}

export type CacheFabricImage = FabricImage & CacheProperties;
export type CacheFabricText = FabricText & CacheProperties;
export type CacheFabricObject = FabricObject & CacheProperties;
