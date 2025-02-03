import { BasePicker } from '@/components/picker/base';
import { MultiColumnPicker } from '@/components/picker/multi-column';
import { CascadePicker } from '@/components/picker/cascade';
import { CustomizeColumnPicker } from '@/components/picker/customize-column';

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
