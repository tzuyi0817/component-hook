import { BasePicker } from '@/components/time-picker/base';
import { ColumnsTypePicker } from '@/components/time-picker/columns-type';
import { CustomRangePicker } from '@/components/time-picker/custom-range';
import { LabelFormatterPicker } from '@/components/time-picker/label-formatter';

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
