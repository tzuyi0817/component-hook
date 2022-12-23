import type { LangType } from './types';
declare const _sfc_main: import("vue").DefineComponent<{}, {
    currentSelect: import("vue").Ref<{
        langType?: number | undefined;
        code?: string | undefined;
        original?: string | undefined;
        version?: number | undefined;
    }[]>;
    anchor: import("vue").Ref<number[]>;
    currentSingle: import("vue").Ref<{
        langType?: number | undefined;
        code?: string | undefined;
        original?: string | undefined;
        version?: number | undefined;
    }>;
    anchorSingle: import("vue").Ref<number>;
    currentDate: import("vue").Ref<number[]>;
    currentTime: import("vue").Ref<number[]>;
    isShowPicker: import("vue").Ref<boolean>;
    isShowSingle: import("vue").Ref<boolean>;
    isShowDate: import("vue").Ref<boolean>;
    isShowTime: import("vue").Ref<boolean>;
    dataList: import("vue").Ref<{
        langType: number;
        code: string;
        original: string;
    }[][]>;
    singleData: {
        langType: number;
        code: string;
        original: string;
    }[];
    options: {
        confirmColor: string;
        cancelClass: string;
        titleText: string;
    };
    confirm: (value: Array<LangType>) => void;
    confirmSingle: (value: LangType) => void;
    confirmDate: (value: Array<number>) => void;
    confirmTime: (value: Array<number>) => void;
    cancel: () => void;
    toggle: () => void;
    openSingle: () => void;
    openDate: () => void;
    openTime: () => void;
    Picker: import("vue").DefineComponent<{
        data: {
            type: null;
            required: false;
            default: () => never[];
        };
        isShowPicker: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        options: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        anchor: {
            type: (NumberConstructor | ArrayConstructor)[];
            required: true;
        };
        showKey: {
            type: (ArrayConstructor | StringConstructor)[];
            required: false;
        };
        swipeTime: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        type: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }, {
        props: {
            data: import('./types').PickData;
            isShowPicker: boolean;
            options: Partial<import('./types').PickerOptions>;
            anchor: number | number[];
            showKey?: string | string[] | undefined;
            swipeTime: number;
            type: string;
        };
        emit: (event: "update:isShowPicker" | "update:anchor" | "cancel" | "confirm", ...args: any[]) => void;
        options: import("vue").ComputedRef<{
            cancelClass: string;
            confirmClass: string;
            titleClass: string;
            cancelColor: string;
            confirmColor: string;
            titleColor: string;
            cancelText: string;
            confirmText: string;
            titleText: string;
        }>;
        cancelColor: import("vue").ComputedRef<string>;
        confirmColor: import("vue").ComputedRef<string>;
        titleColor: import("vue").ComputedRef<string>;
        showKeys: import("vue").ComputedRef<(string | undefined)[]>;
        pickerData: import("vue").Ref<import('./types').NormalData[][]>;
        wheelWrapper: import("vue").Ref<any>;
        cancel: () => void;
        confirm: () => void;
        closePicker: () => void;
        isObject: (value: unknown) => value is Record<any, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:isShowPicker" | "update:anchor" | "cancel" | "confirm")[], "update:isShowPicker" | "update:anchor" | "cancel" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: null;
            required: false;
            default: () => never[];
        };
        isShowPicker: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        options: {
            type: ObjectConstructor;
            required: false;
            default: () => {};
        };
        anchor: {
            type: (NumberConstructor | ArrayConstructor)[];
            required: true;
        };
        showKey: {
            type: (ArrayConstructor | StringConstructor)[];
            required: false;
        };
        swipeTime: {
            type: NumberConstructor;
            required: false;
            default: number;
        };
        type: {
            type: StringConstructor;
            required: false;
            default: string;
        };
    }>> & {
        "onUpdate:isShowPicker"?: ((...args: any[]) => any) | undefined;
        "onUpdate:anchor"?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
        onConfirm?: ((...args: any[]) => any) | undefined;
    }, {
        data: any;
        options: Record<string, any>;
        swipeTime: number;
        type: string;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _sfc_main;
