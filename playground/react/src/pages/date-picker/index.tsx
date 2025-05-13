import { BasePicker, ColumnsTypePicker, CustomRangePicker, LabelFormatterPicker } from './components';

export function DatePicker() {
  return (
    <>
      <BasePicker />
      <ColumnsTypePicker />
      <CustomRangePicker />
      <LabelFormatterPicker />
    </>
  );
}
