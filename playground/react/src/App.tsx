import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { Picker } from './pages/picker';
import { PdfCanvas } from './pages/pdf-canvas';

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
          path="pdf-canvas"
          element={<PdfCanvas />}
        />
      </Routes>
    </BrowserRouter>
  );
}
