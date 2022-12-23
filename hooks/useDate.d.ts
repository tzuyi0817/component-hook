import type { PickerProps } from '../types';
declare const _default: (isDate: boolean) => {
    selectYear?: undefined;
    selectMonth?: undefined;
    dateList?: undefined;
    updateDateSelect?: undefined;
    getDateAnchors?: undefined;
} | {
    selectYear: import("vue").Ref<number>;
    selectMonth: import("vue").Ref<number>;
    dateList: import("vue").ComputedRef<number[][]>;
    updateDateSelect: (pickerAnchors: Array<number>) => void;
    getDateAnchors: (anchor: PickerProps['anchor']) => number[];
};
export default _default;
