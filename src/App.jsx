import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Auth pages
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"

// Layouts
import DashboardLayout from "./components/DashboardLayout"
import AdminLayout from "./components/AdminLayout"

// Dashboard pages
import Tendencias from "./pages/dashboard/Tendencias"
import SkillDetalhe from "./pages/dashboard/SkillDetalhe"
import Desafios from "./pages/dashboard/Desafios"
import DesafioDetalhe from "./pages/dashboard/DesafioDetalhe"
import DesafioSubmissao from "./pages/dashboard/DesafioSubmissao"
import Eventos from "./pages/dashboard/Eventos"
import EventoDetalhe from "./pages/dashboard/EventoDetalhe"
import EventosMeus from "./pages/dashboard/EventosMeus"
import EventoCheckin from "./pages/dashboard/EventoCheckin"
import Metas from "./pages/dashboard/Metas"
import DefinirMeta from "./pages/dashboard/DefinirMeta"
import Grupos from "./pages/dashboard/Grupos"
import GrupoDetalhe from "./pages/dashboard/GrupoDetalhe"


// Profile pages
import DadosPessoais from "./pages/perfil/DadosPessoais"
import Certificados from "./pages/perfil/Certificados"
import Integracoes from "./pages/perfil/Integracoes"
import Gamificacao from "./pages/perfil/Gamificacao"

// Admin pages
import Usuarios from "./pages/admin/Usuarios"
import GruposAdmin from "./pages/admin/GruposAdmin"
import EventosAdmin from "./pages/admin/EventosAdmin"
import DesafiosAdmin from "./pages/admin/DesafiosAdmin"
import Logs from "./pages/admin/Logs"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="tendencias" element={<Tendencias />} />
          <Route path="tendencias/:skillId" element={<SkillDetalhe />} />
          <Route path="desafios" element={<Desafios />} />
          <Route path="desafios/:desafioId" element={<DesafioDetalhe />} />
          <Route path="desafios/:desafioId/submissao" element={<DesafioSubmissao />} />
          <Route path="eventos" element={<Eventos />} />
          <Route path="eventos/:eventoId" element={<EventoDetalhe />} />
          <Route path="eventos/meus" element={<EventosMeus />} />
          <Route path="eventos/meus/:eventoId/checkin" element={<EventoCheckin />} />
          <Route path="metas" element={<Metas />} />
          <Route path="metas/definir" element={<DefinirMeta />} />
          <Route path="grupos" element={<Grupos />} />
          <Route path="grupos/:grupoId" element={<GrupoDetalhe />} />
        </Route>

        {/* Profile Routes */}
        <Route path="/perfil">
          <Route path="dados-pessoais" element={<DadosPessoais />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="integracoes" element={<Integracoes />} />
        </Route>

        {/* Gamification Route */}
        <Route path="/gamificacao" element={<Gamificacao />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="grupos" element={<GruposAdmin />} />
          <Route path="eventos" element={<EventosAdmin />} />
          <Route path="desafios" element={<DesafiosAdmin />} />
          <Route path="logs" element={<Logs />} />
        </Route>

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
