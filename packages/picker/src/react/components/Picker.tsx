import { useMemo, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { usePicker } from '../hooks/use-picker';
import { isObject, isArray, isString, isNumber } from '../../shared/utils/check-type';
import { BASE_OPTIONS } from '../../shared/configs/options';
import '../../shared/index.scss';
import '../transition.scss';
import type { PickerComponentProps, NormalData, PickerAnchor } from '../../shared/types/picker';
import type { PickerEmit } from '../../shared/types/react-picker';

const defaultData: NormalData[] = [];
const defaultOptions = {};

export function Picker<T = NormalData, D = PickerAnchor>({
  data = defaultData,
  isShowPicker,
  options = defaultOptions,
  anchor,
  showKey = '',
  swipeTime = 500,
  type = '',
  onChangeAnchor,
  onClose,
  onCancel,
  onConfirm,
}: PickerComponentProps<D> & PickerEmit<T, D>) {
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const { pickerData, wheelWrapper, cancel, confirm, closePicker } = usePicker<T, D>({
    data,
    isShowPicker,
    options,
    anchor,
    showKey,
    swipeTime,
    type,
    onClose,
    onChangeAnchor,
    onCancel,
    onConfirm,
  });

  const mergedOptions = useMemo(() => ({ ...BASE_OPTIONS, ...options }), [options]);

  const cancelColor = mergedOptions.cancelColor;
  const confirmColor = mergedOptions.confirmColor;
  const titleColor = mergedOptions.titleColor;
  const showKeys = useMemo(() => (isArray(showKey) ? showKey : [showKey]), [showKey]);

  function setPickerRefDisplay(value: string) {
    if (!pickerRef.current) return;

    pickerRef.current.style.setProperty('display', value);
  }

  return (
    <div>
      <CSSTransition
        in={isShowPicker}
        classNames="component-hook-picker-fade"
        timeout={300}
        nodeRef={maskRef}
        unmountOnExit
      >
        <div
          ref={maskRef}
          role="presentation"
          className="component-hook-picker-mask"
          onClick={closePicker}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              closePicker();
            }
          }}
        />
      </CSSTransition>

      <CSSTransition
        in={isShowPicker}
        classNames="component-hook-picker-slide"
        timeout={300}
        nodeRef={pickerRef}
        onEnter={() => setPickerRefDisplay('')}
        onExited={() => setPickerRefDisplay('none')}
      >
        <div
          ref={pickerRef}
          className="component-hook-picker"
          style={{ display: 'none' }}
        >
          <div className="component-hook-picker_title">
            <button
              className={`component-hook-picker_cancel ${mergedOptions.cancelClass}`}
              style={{ color: cancelColor }}
              onClick={cancel}
            >
              {mergedOptions.cancelText}
            </button>
            <button
              className={`component-hook-picker_confirm ${mergedOptions.confirmClass}`}
              style={{ color: confirmColor }}
              onClick={confirm}
            >
              {mergedOptions.confirmText}
            </button>
            <h4
              className={mergedOptions.titleClass}
              style={{ color: titleColor }}
            >
              {mergedOptions.titleText}
            </h4>
          </div>
          <div className="component-hook-picker_panel">
            <div className="component-hook-picker_mask_top" />
            <div className="component-hook-picker_mask_bottom" />
            <div
              ref={wheelWrapper}
              className="component-hook-picker_wheel_wrapper"
            >
              {pickerData.map((wheel, wheelIndex) => (
                <div
                  key={wheelIndex}
                  className="component-hook-picker_wheel"
                >
                  <ul className="component-hook-picker_wheel_scroll">
                    {wheel.map((item, index) => {
                      const value = showKeys[wheelIndex] && isObject(item) ? item[showKeys[wheelIndex]] : item;

                      if (!isString(value) && !isNumber(value)) return null;

                      return (
                        <li
                          key={index}
                          className="component-hook-picker_wheel_item"
                        >
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
