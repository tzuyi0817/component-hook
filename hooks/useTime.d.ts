import type { PickerProps } from '../types';
declare const _default: (isTime: boolean) => {
    timeList?: undefined;
    updateDefaultTime?: undefined;
    getTimeAnchors?: undefined;
} | {
    timeList: string[][];
    updateDefaultTime: () => void;
    getTimeAnchors: (anchor: PickerProps['anchor']) => number[];
};
export default _default;
