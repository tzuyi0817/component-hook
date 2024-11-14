import { SinglePicker } from '@/components/picker/single-picker';
import { CascadePicker } from '@/components/picker/cascade-picker';
import { DatePicker } from '@/components/picker/date-picker';
import { TimePicker } from '@/components/picker/time-picker';

export function App() {
  return (
    <>
      <SinglePicker />
      <CascadePicker />
      <DatePicker />
      <TimePicker />
    </>
  );
}
