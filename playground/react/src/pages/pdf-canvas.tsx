import { DrawPdf } from '@/components/pdf-canvas/draw-pdf';
import { DropPdf } from '@/components/pdf-canvas/drop-pdf';
import { EncryptedPdf } from '@/components/pdf-canvas/encrypted-pdf';
import { ManualPdf } from '@/components/pdf-canvas/manual-pdf';
import { MultiplePdf } from '@/components/pdf-canvas/multiple-pdf';

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
