import { SinglePicker } from '@/components/picker/single-picker';
import { CascadePicker } from '@/components/picker/cascade-picker';
import { DatePicker } from '@/components/picker/date-picker';
import { TimePicker } from '@/components/picker/time-picker';

import { DrawPdf } from '@/components/pdf-canvas/draw-pdf';
import { DropPdf } from '@/components/pdf-canvas/drop-pdf';
import { EncryptedPdf } from '@/components/pdf-canvas/encrypted-pdf';
import { ManualPdf } from '@/components/pdf-canvas/manual-pdf';
import { MultiplePdf } from '@/components/pdf-canvas/multiple-pdf';

export function App() {
  return (
    <>
      <SinglePicker />
      <CascadePicker />
      <DatePicker />
      <TimePicker />

      <DrawPdf />
      <DropPdf />
      <EncryptedPdf />
      <ManualPdf />
      <MultiplePdf />
    </>
  );
}
