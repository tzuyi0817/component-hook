export interface PDF {
  PDFId: string;
  name: string;
  updateDate: number;
  data?: File | null;
  pages: number;
}
