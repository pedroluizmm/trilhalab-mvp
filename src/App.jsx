// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Apenas a página de Login
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota de Login */}
        <Route path="/login" element={<Login />} />

        {/* Redireciona qualquer outra rota para /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
