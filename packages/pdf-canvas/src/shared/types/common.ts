import type { ImageProps, TextProps, TOptions, FabricObjectProps } from 'fabric';
import type { PDF } from './pdf';
import type { CloseSvgOptions } from './fabric';

export interface ComponentProps {
  file: PDF;
  page?: number;
  canvasId?: string;
  fileZoom?: number;
  fileScale?: number;
  canvasScale?: number;
  canvasClass?: string;
  isDrop?: boolean;
  password?: string;
  dropTextOptions?: TOptions<TextProps>;
  dropImageOptions?: TOptions<ImageProps>;
  selectionOptions?: TOptions<FabricObjectProps>;
  closeSvgOptions?: CloseSvgOptions;
  manualReload?: boolean;
  onDestroy?: (callback: () => void) => void;
}
