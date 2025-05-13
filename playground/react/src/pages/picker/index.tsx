import { BasePicker, CascadePicker, CustomizeColumnPicker, MultiColumnPicker } from './components';

export function Picker() {
  return (
    <>
      <BasePicker />
      <MultiColumnPicker />
      <CascadePicker />
      <CustomizeColumnPicker />
    </>
  );
}
