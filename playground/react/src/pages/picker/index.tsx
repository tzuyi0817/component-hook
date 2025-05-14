import { BasePicker } from './components/base';
import { CascadePicker } from './components/cascade';
import { CustomizeColumnPicker } from './components/customize-column';
import { MultiColumnPicker } from './components/multi-column';

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
