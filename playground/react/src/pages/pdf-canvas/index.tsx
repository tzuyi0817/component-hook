import { DrawPdf } from './components/draw-pdf';
import { DropPdf } from './components/drop-pdf';
import { EncryptedPdf } from './components/encrypted-pdf';
import { ManualPdf } from './components/manual-pdf';
import { MultiplePdf } from './components/multiple-pdf';

export function PdfCanvas() {
  return (
    <>
      <DrawPdf />
      <DropPdf />
      <EncryptedPdf />
      <ManualPdf />
      <MultiplePdf />
    </>
  );
}
