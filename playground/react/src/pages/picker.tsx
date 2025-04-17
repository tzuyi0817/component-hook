import { BasePicker } from '@/components/picker/base';
import { CascadePicker } from '@/components/picker/cascade';
import { CustomizeColumnPicker } from '@/components/picker/customize-column';
import { MultiColumnPicker } from '@/components/picker/multi-column';

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
