import { useEffect, useImperativeHandle, useMemo, useState, type ForwardedRef } from 'react';
import { DEFAULT_TIME_COLUMNS } from '../../shared/constants';
import { formatTime, generateOptions, getDefaultTime, getValidTime } from '../../shared/utils/common';
import { fixedForwardRef } from '../hooks/fixed-forward-ref';
import { Picker } from './picker';
import type { PickerFormatLabel, TimePickerColumnType } from '../../shared/types';

interface Props {
  values?: number[];
  columnsType?: TimePickerColumnType[];
  minTime?: string;
  maxTime?: string;
  formatHourLabel?: PickerFormatLabel;
  formatMinuteLabel?: PickerFormatLabel;
  formatSecondLabel?: PickerFormatLabel;
  onChange?: (values: number[]) => void;
}

export type TimePickerRef = {
  setCurrentTime: () => void;
};

function TimePickerComponent(
  {
    values,
    columnsType = DEFAULT_TIME_COLUMNS,
    minTime,
    maxTime,
    formatHourLabel = formatTime,
    formatMinuteLabel = formatTime,
    formatSecondLabel = formatTime,
    onChange,
  }: Props,
  ref: ForwardedRef<TimePickerRef>,
) {
  const [internalValues, setInternalValues] = useState<number[]>([]);

  const selectedValues = useMemo(() => {
    return values ?? internalValues;
  }, [values, internalValues]);

  const formattedMinTime = useMemo(() => {
    return getValidTime(minTime ?? '') ?? { hour: 0, minute: 0, second: 0 };
  }, [minTime]);

  const formattedMaxTime = useMemo(() => {
    return getValidTime(maxTime ?? '') ?? { hour: 23, minute: 59, second: 59 };
  }, [maxTime]);

  const generateOptionsMap = {
    hour: generateHourOptions,
    minute: generateMinuteOptions,
    second: generateSecondOptions,
  };

  const columns = columnsType.map(type => generateOptionsMap[type]());

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
    const value = selectedValues?.[columnIndex];

    if (value !== undefined) return Number(value);

    return getDefaultTime(formattedMinTime, formattedMaxTime, type);
  }

  function handleChange(newValues: number[]) {
    if (!values) {
      setInternalValues(newValues);
    }

    onChange?.(newValues);
  }

  function setDefaultValues() {
    const defaultValues = columnsType.map(type => getDefaultTime(formattedMinTime, formattedMaxTime, type));

    handleChange(defaultValues);
  }

  useEffect(() => {
    if (!values || !values.length) {
      setDefaultValues();
    }
  }, []);

  useImperativeHandle(ref, () => ({
    setCurrentTime: setDefaultValues,
  }));

  return (
    <Picker
      values={selectedValues}
      columns={columns}
      onChange={handleChange}
    />
  );
}

export const TimePicker = fixedForwardRef(TimePickerComponent);

TimePicker.displayName = 'TimePicker';
