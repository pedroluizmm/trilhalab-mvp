"use client"

import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Header = ({ title, showBackButton = false, backTo = "" }) => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (backTo) {
      navigate(backTo)
    } else {
      navigate(-1)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4">
      {showBackButton && (
        <button onClick={handleBack} className="text-primary">
          <ArrowLeft size={24} />
        </button>
      )}
      {!showBackButton && <div className="w-6"></div>}
      <h1 className="text-primary text-2xl font-medium">{title}</h1>
      <div className="w-6"></div> {/* Empty div for spacing */}
    </header>
  )
}

export default Header
