import { Outlet, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4">
        <Link to="/dashboard/tendencias" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-primary text-2xl font-medium">Admin Dashboard</h1>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-4">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
