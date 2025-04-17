import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { DatePicker } from './pages/date-picker';
import { PdfCanvas } from './pages/pdf-canvas';
import { Picker } from './pages/picker';
import { TimePicker } from './pages/time-picker';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Navigate
              to="/picker"
              replace
            />
          }
        />
        <Route
          path="picker"
          element={<Picker />}
        />
        <Route
          path="date-picker"
          element={<DatePicker />}
        />
        <Route
          path="time-picker"
          element={<TimePicker />}
        />
        <Route
          path="pdf-canvas"
          element={<PdfCanvas />}
        />
      </Routes>
    </BrowserRouter>
  );
}
