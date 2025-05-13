import { createBrowserRouter, Navigate } from 'react-router';
import { DatePicker } from '@/pages/date-picker';
import { PdfCanvas } from '@/pages/pdf-canvas';
import { Picker } from '@/pages/picker';
import { TimePicker } from '@/pages/time-picker';

export const router = createBrowserRouter([
  {
    path: '*',
    element: (
      <Navigate
        to="/picker"
        replace
      />
    ),
  },
  {
    path: 'picker',
    element: <Picker />,
  },
  {
    path: 'date-picker',
    element: <DatePicker />,
  },
  {
    path: 'time-picker',
    element: <TimePicker />,
  },
  {
    path: 'pdf-canvas',
    element: <PdfCanvas />,
  },
]);
