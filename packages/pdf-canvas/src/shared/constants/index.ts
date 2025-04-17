import closeSvg from '../assets/close.svg';

export const DEFAULT_IMAGE_OPTIONS = {
  top: 100,
  left: 50,
  scaleX: 0.5,
  scaleY: 0.5,
  borderColor: 'black',
  cornerStrokeColor: 'black',
  cornerSize: 6,
  selectionBackgroundColor: 'rgba(245, 245, 245, 0.8)',
};

export const DEFAULT_TEXT_OPTIONS = {
  top: 100,
  left: 50,
  fontFamily: 'helvetica',
  borderColor: 'black',
  cornerStrokeColor: 'black',
  scaleX: 0.7,
  scaleY: 0.7,
  cornerSize: 6,
  selectionBackgroundColor: 'rgba(245, 245, 245, 0.8)',
};

export const DEFAULT_SELECTION_OPTIONS = {
  borderColor: 'black',
  cornerStrokeColor: 'black',
  cornerSize: 8,
  selectionBackgroundColor: 'rgba(245, 245, 245, 0.8)',
};

export const DEFAULT_CLOSE_OPTIONS = {
  stroke: '#000',
  hoverStroke: '#B7EC5D',
  src: closeSvg,
};

export const CLONE_PROPERTIES = [
  'borderColor',
  'cornerStrokeColor',
  'cornerSize',
  '_cornerSize',
  'selectionBackgroundColor',
];
