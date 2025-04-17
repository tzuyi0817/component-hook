import { useMemo, useState } from 'react';
import { DEFAULT_TIME_COLUMNS, DEFAULT_TIME_TITLE } from '../../shared/constants';
import { formatTime, generateOptions, getDefaultTime, getValidTime } from '../../shared/utils/common';
import type { PickerFormatLabel, TimePickerColumnType } from '../../shared/types';
import { Picker } from './picker';

interface Props {
  show: boolean;
  values?: number[];
  title?: string;
  columnsType?: TimePickerColumnType[];
  minTime?: string;
  maxTime?: string;
  teleport?: Element | DocumentFragment;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formatHourLabel?: PickerFormatLabel;
  formatMinuteLabel?: PickerFormatLabel;
  formatSecondLabel?: PickerFormatLabel;
  onConfirm?: (values: number[]) => void;
  onClose: () => void;
  onCancel?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
}

export function TimePicker({
  show,
  values,
  title = DEFAULT_TIME_TITLE,
  columnsType = DEFAULT_TIME_COLUMNS,
  minTime,
  maxTime,
  teleport,
  confirmButtonText,
  cancelButtonText,
  formatHourLabel = formatTime,
  formatMinuteLabel = formatTime,
  formatSecondLabel = formatTime,
  onConfirm,
  onClose,
  onCancel,
  onOpen,
  onClosed,
}: Props) {
  const [internalValues, setInternalValues] = useState<number[]>([]);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);

  const formattedMinTime = useMemo(() => {
    return getValidTime(minTime ?? '') ?? { hour: 0, minute: 0, second: 0 };
  }, [minTime]);

  const formattedMaxTime = useMemo(() => {
    return getValidTime(maxTime ?? '') ?? { hour: 23, minute: 59, second: 59 };
  }, [maxTime]);

  const columns = useMemo(() => {
    const generateOptionsMap = {
      hour: generateHourOptions,
      minute: generateMinuteOptions,
      second: generateSecondOptions,
    };

    return columnsType.map(type => generateOptionsMap[type]());
  }, [
    columnsType,
    formattedMinTime,
    formattedMaxTime,
    selectedValues,
    formatHourLabel,
    formatMinuteLabel,
    formatSecondLabel,
  ]);

  function generateHourOptions() {
    return generateOptions(formattedMinTime.hour, formattedMaxTime.hour, formatHourLabel);
  }

  function generateMinuteOptions() {
    const selectedHour = getSelectedValue('hour');
    const { hour: minH, minute: minM } = formattedMinTime;
    const { hour: maxH, minute: maxM } = formattedMaxTime;
    const minMinute = selectedHour === minH ? minM : 0;
    const maxMinute = selectedHour === maxH ? maxM : 59;

    return generateOptions(minMinute, maxMinute, formatMinuteLabel);
  }

  function generateSecondOptions() {
    const selectedHour = getSelectedValue('hour');
    const selectedMinute = getSelectedValue('minute');
    const { hour: minH, minute: minM, second: minS } = formattedMinTime;
    const { hour: maxH, minute: maxM, second: maxS } = formattedMaxTime;
    const minSecond = selectedHour === minH && selectedMinute === minM ? minS : 0;
    const maxSecond = selectedHour === maxH && selectedMinute === maxM ? maxS : 59;

    return generateOptions(minSecond, maxSecond, formatSecondLabel);
  }

  function getSelectedValue(type: TimePickerColumnType) {
    const columnIndex = columnsType.indexOf(type);
    const value = selectedValues[columnIndex];

    if (value !== undefined) return Number(value);

    return getDefaultTime(formattedMinTime, formattedMaxTime, type);
  }

  function handleConfirm(confirmValues: number[]) {
    setInternalValues(confirmValues);
    onClose();
    onConfirm?.(confirmValues);
  }

  function handleCancel() {
    onClose();
    onCancel?.();
  }

  function setDefaultValues() {
    onOpen?.();

    if (values && values.length) {
      setSelectedValues([...values]);
    } else {
      setSelectedValues(columnsType.map(getSelectedValue));
    }
  }

  function handleClosed() {
    setSelectedValues(values ? [...values] : [...internalValues]);
    onClosed?.();
  }

  return (
    <Picker
      values={selectedValues}
      show={show}
      title={title}
      columns={columns}
      teleport={teleport}
      confirmButtonText={confirmButtonText}
      cancelButtonText={cancelButtonText}
      linkage
      onConfirm={handleConfirm}
      onClose={onClose}
      onChange={setSelectedValues}
      onCancel={handleCancel}
      onOpen={setDefaultValues}
      onClosed={handleClosed}
    />
  );
}
