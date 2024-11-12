import { useMemo } from 'react';
import { usePicker } from '../hooks/use-picker';
import { isObject, isArray, isString, isNumber } from '../../shared/utils/check-type';
import '../../shared/index.scss';
import type { PickerComponentProps } from '../../shared/types/picker';
import type { PickerEmit } from '../../shared/types/react-picker';

function Picker({
  data = [],
  isShowPicker,
  options = {},
  anchor,
  showKey = '',
  swipeTime = 500,
  type = '',
  setShowPicker,
  setAnchor,
  onCancel,
  onConfirm,
}: PickerComponentProps & PickerEmit) {
  const { pickerData, wheelWrapper, cancel, confirm, closePicker } = usePicker({
    data,
    isShowPicker,
    options,
    anchor,
    showKey,
    swipeTime,
    type,
    setShowPicker,
    setAnchor,
    onCancel,
    onConfirm,
  });

  const mergedOptions = useMemo(
    () => ({
      cancelClass: '',
      confirmClass: '',
      titleClass: '',
      cancelColor: '#999',
      confirmColor: '#42b983',
      titleColor: '',
      cancelText: 'Cancel',
      confirmText: 'Confirm',
      titleText: '',
      ...options,
    }),
    [options],
  );

  const cancelColor = mergedOptions.cancelColor;
  const confirmColor = mergedOptions.confirmColor;
  const titleColor = mergedOptions.titleColor;
  const showKeys = useMemo(() => (isArray(showKey) ? showKey : [showKey]), [showKey]);

  return (
    <div>
      {isShowPicker && (
        <div
          className="mask"
          onClick={closePicker}
        />
      )}
      {isShowPicker && (
        <div className="picker">
          <div className="picker_title">
            <button
              className={`picker_cancel ${mergedOptions.cancelClass}`}
              style={{ color: cancelColor }}
              onClick={cancel}
            >
              {mergedOptions.cancelText}
            </button>
            <button
              className={`picker_confirm ${mergedOptions.confirmClass}`}
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
          <div className="picker_panel">
            <div className="picker_mask_top" />
            <div className="picker_mask_bottom" />
            <div
              ref={wheelWrapper}
              className="picker_wheel_wrapper"
            >
              {pickerData.map((wheel, wheelIndex) => (
                <div
                  key={wheelIndex}
                  className="picker_wheel"
                >
                  <ul className="picker_wheel_scroll">
                    {wheel.map((item, index) => {
                      const value = showKeys[wheelIndex] && isObject(item) ? item[showKeys[wheelIndex]] : item;

                      if (!isString(value) && !isNumber(value)) return null;

                      return (
                        <li
                          key={index}
                          className="picker_wheel_item"
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
      )}
    </div>
  );
}

export default Picker;
