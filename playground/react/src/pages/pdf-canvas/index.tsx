import { DrawPdf, DropPdf, EncryptedPdf, ManualPdf, MultiplePdf } from './components';

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
