import { BasePicker } from './components/base';
import { ColumnsTypePicker } from './components/columns-type';
import { CustomRangePicker } from './components/custom-range';
import { LabelFormatterPicker } from './components/label-formatter';

export function TimePicker() {
  return (
    <>
      <BasePicker />
      <ColumnsTypePicker />
      <CustomRangePicker />
      <LabelFormatterPicker />
    </>
  );
}
