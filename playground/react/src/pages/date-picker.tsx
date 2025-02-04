import { BasePicker } from '@/components/date-picker/base';
import { ColumnsTypePicker } from '@/components/date-picker/columns-type';
import { CustomRangePicker } from '@/components/date-picker/custom-range';
import { LabelFormatterPicker } from '@/components/date-picker/label-formatter';

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
