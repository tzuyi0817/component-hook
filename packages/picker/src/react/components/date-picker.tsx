import { useMemo, useState } from 'react';
import { DEFAULT_DATE_COLUMNS, DEFAULT_DATE_TITLE } from '../../shared/constants';
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
import type { DatePickerColumnType, PickerFormatLabel } from '../../shared/types';
import { Picker } from './picker';

interface Props {
  show: boolean;
  values?: number[];
  title?: string;
  columnsType?: DatePickerColumnType[];
  minDate?: Date;
  maxDate?: Date;
  teleport?: Element | DocumentFragment;
  confirmButtonText?: string;
  cancelButtonText?: string;
  formatYearLabel?: PickerFormatLabel;
  formatMonthLabel?: PickerFormatLabel;
  formatDayLabel?: PickerFormatLabel;
  onConfirm?: (values: number[]) => void;
  onClose: () => void;
  onCancel?: () => void;
  onOpen?: () => void;
  onClosed?: () => void;
}

export function DatePicker({
  show,
  values,
  title = DEFAULT_DATE_TITLE,
  columnsType = DEFAULT_DATE_COLUMNS,
  minDate = new Date(new Date().getFullYear() - 10, 0, 1),
  maxDate = new Date(new Date().getFullYear() + 10, 11, 31),
  teleport,
  confirmButtonText,
  cancelButtonText,
  formatYearLabel = formatLabel,
  formatMonthLabel = formatLabel,
  formatDayLabel = formatLabel,
  onConfirm,
  onClose,
  onCancel,
  onOpen,
  onClosed,
}: Props) {
  const [internalValues, setInternalValues] = useState<number[]>([]);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);

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
    const value = selectedValues[columnIndex];

    if (value) return Number(value);

    return getDefaultDate(minDate, maxDate, type);
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
