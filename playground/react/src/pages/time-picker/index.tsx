import { BasePicker, ColumnsTypePicker, CustomRangePicker, LabelFormatterPicker } from './components';

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
