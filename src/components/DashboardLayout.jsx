import { Outlet, Link, useLocation } from "react-router-dom"
import { TrendingUp, Calendar, Users, Target, User } from "lucide-react"

const DashboardLayout = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-center">
        <h1 className="text-primary text-2xl font-medium">TrilhaLab</h1>
      </header>

      {/* Navigation */}
      <nav className="fixed top-16 left-0 right-0 h-16 bg-white shadow-sm z-10">
        <div className="grid grid-cols-5 h-full">
          <Link
            to="/dashboard/tendencias"
            className={`flex flex-col items-center justify-center ${path.includes("/dashboard/tendencias") ? "bg-primary-light" : ""}`}
          >
            <TrendingUp size={24} className="text-primary" />
            <span className="text-xs mt-1">Tendências</span>
          </Link>
          <Link
            to="/dashboard/eventos"
            className={`flex flex-col items-center justify-center ${path.includes("/dashboard/eventos") ? "bg-primary-light" : ""}`}
          >
            <Calendar size={24} className="text-primary" />
            <span className="text-xs mt-1">Eventos</span>
          </Link>
          <Link
            to="/dashboard/grupos"
            className={`flex flex-col items-center justify-center ${path.includes("/dashboard/grupos") ? "bg-primary-light" : ""}`}
          >
            <Users size={24} className="text-primary" />
            <span className="text-xs mt-1">Grupos</span>
          </Link>
          <Link
            to="/dashboard/metas"
            className={`flex flex-col items-center justify-center ${path.includes("/dashboard/metas") ? "bg-primary-light" : ""}`}
          >
            <Target size={24} className="text-primary" />
            <span className="text-xs mt-1">Metas</span>
          </Link>
          <Link
            to="/perfil/dados-pessoais"
            className={`flex flex-col items-center justify-center ${path.includes("/perfil") ? "bg-primary-light" : ""}`}
          >
            <User size={24} className="text-primary" />
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
