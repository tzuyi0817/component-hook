import { useEffect, useImperativeHandle, useMemo, useState, type ForwardedRef } from 'react';
import { DEFAULT_DATE_COLUMNS } from '../../shared/constants';
import {
  formatLabel,
  generateOptions,
  getDefaultDate,
  getLastDay,
  isMaxMonth,
  isMaxYear,
  isMinMonth,
  isMinYear,
} from '../../shared/utils/common';
import { fixedForwardRef } from '../hooks/fixed-forward-ref';
import type { DatePickerColumnType, PickerFormatLabel } from '../../shared/types';
import { Picker } from './picker';

interface Props {
  values?: number[];
  columnsType?: DatePickerColumnType[];
  minDate?: Date;
  maxDate?: Date;
  formatYearLabel?: PickerFormatLabel;
  formatMonthLabel?: PickerFormatLabel;
  formatDayLabel?: PickerFormatLabel;
  onChange?: (values: number[]) => void;
}

export type DatePickerRef = {
  setCurrentDate: () => void;
};

function DatePickerComponent(
  {
    values,
    columnsType = DEFAULT_DATE_COLUMNS,
    minDate = new Date(new Date().getFullYear() - 10, 0, 1),
    maxDate = new Date(new Date().getFullYear() + 10, 11, 31),
    formatYearLabel = formatLabel,
    formatMonthLabel = formatLabel,
    formatDayLabel = formatLabel,
    onChange,
  }: Props,
  ref: ForwardedRef<DatePickerRef>,
) {
  const [internalValues, setInternalValues] = useState<number[]>([]);

  const selectedValues = useMemo(() => {
    return values ?? internalValues;
  }, [values, internalValues]);

  const columns = useMemo(() => {
    const generateOptionsMap = {
      year: generateYearOptions,
      month: generateMonthOptions,
      day: generateDayOptions,
    };

    return columnsType.map(type => generateOptionsMap[type]());
  }, [columnsType, minDate, maxDate, selectedValues, formatYearLabel, formatMonthLabel, formatDayLabel]);

  function generateYearOptions() {
    const minYear = minDate.getFullYear();
    const maxYear = maxDate.getFullYear();

    return generateOptions(minYear, maxYear, formatYearLabel);
  }

  function generateMonthOptions() {
    const selectedYear = getSelectedValue('year');
    const minMonth = isMinYear(selectedYear, minDate) ? minDate.getMonth() + 1 : 1;
    const maxMonth = isMaxYear(selectedYear, maxDate) ? maxDate.getMonth() + 1 : 12;

    return generateOptions(minMonth, maxMonth, formatMonthLabel);
  }

  function generateDayOptions() {
    const selectedYear = getSelectedValue('year');
    const selectedMonth = getSelectedValue('month');
    const isMinYearAndMinMonth = isMinYear(selectedYear, minDate) && isMinMonth(selectedMonth, minDate);
    const isMaxYearAndMaxMonth = isMaxYear(selectedYear, maxDate) && isMaxMonth(selectedMonth, maxDate);
    const minDay = isMinYearAndMinMonth ? minDate.getDate() : 1;
    const maxDay = isMaxYearAndMaxMonth ? maxDate.getDate() : getLastDay(selectedYear, selectedMonth);

    return generateOptions(minDay, maxDay, formatDayLabel);
  }

  function getSelectedValue(type: DatePickerColumnType) {
    const columnIndex = columnsType.indexOf(type);
    const value = selectedValues?.[columnIndex];

    if (value) return Number(value);

    return getDefaultDate(minDate, maxDate, type);
  }

  function handleChange(newValues: number[]) {
    if (!values) {
      setInternalValues(newValues);
    }

    onChange?.(newValues);
  }

  function setDefaultValues() {
    const defaultValues = columnsType.map(type => getDefaultDate(minDate, maxDate, type));

    handleChange(defaultValues);
  }

  useEffect(() => {
    if (!values || !values.length) {
      setDefaultValues();
    }
  }, []);

  useImperativeHandle(ref, () => ({
    setCurrentDate: setDefaultValues,
  }));

  return (
    <Picker
      values={selectedValues}
      columns={columns}
      onChange={handleChange}
    />
  );
}

export const DatePicker = fixedForwardRef(DatePickerComponent);

DatePicker.displayName = 'DatePicker';
