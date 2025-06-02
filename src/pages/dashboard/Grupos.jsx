"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Users, Search, Plus, Crown, User } from "lucide-react"

const gruposData = [
  {
    id: 1,
    nome: "React Developers",
    descricao: "Grupo para desenvolvedores React compartilharem conhecimento e projetos",
    membros: 45,
    categoria: "Frontend",
    admin: "João Silva",
    ativo: true,
  },
  {
    id: 2,
    nome: "Data Science Brasil",
    descricao: "Comunidade brasileira de Data Science e Machine Learning",
    membros: 78,
    categoria: "Data Science",
    admin: "Maria Oliveira",
    ativo: true,
  },
  {
    id: 3,
    nome: "Cloud Computing",
    descricao: "Discussões sobre AWS, Azure, Google Cloud e outras plataformas",
    membros: 32,
    categoria: "Cloud",
    admin: "Carlos Santos",
    ativo: true,
  },
  {
    id: 4,
    nome: "Mobile Development",
    descricao: "Desenvolvimento mobile com React Native, Flutter e nativo",
    membros: 28,
    categoria: "Mobile",
    admin: "Ana Souza",
    ativo: false,
  },
  {
    id: 5,
    nome: "DevOps & Infrastructure",
    descricao: "Automação, CI/CD, containers e infraestrutura como código",
    membros: 41,
    categoria: "DevOps",
    admin: "Pedro Costa",
    ativo: true,
  },
]

const Grupos = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoria, setCategoria] = useState("")

  const gruposFiltrados = gruposData.filter((grupo) => {
    const matchesSearch =
      grupo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grupo.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategoria = categoria === "" || grupo.categoria === categoria
    return matchesSearch && matchesCategoria && grupo.ativo
  })

  return (
    <div className="pb-4 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-primary">Grupos</h1>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Criar Grupo</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar grupos..."
              className="input pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="md:w-1/3">
            <select className="select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Todas as categorias</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Data Science">Data Science</option>
              <option value="Cloud">Cloud</option>
              <option value="Mobile">Mobile</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gruposFiltrados.map((grupo) => (
          <div key={grupo.id} className="bg-white rounded-lg shadow-card p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary-light rounded-md p-2">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="font-medium text-primary">{grupo.nome}</h2>
                  <span className="badge-info">{grupo.categoria}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-dark text-sm mb-4 line-clamp-2">{grupo.descricao}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">{grupo.membros} membros</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">{grupo.admin}</span>
              </div>
            </div>

            <Link to={`/dashboard/grupos/${grupo.id}`} className="btn-primary w-full text-center">
              Ver Grupo
            </Link>
          </div>
        ))}

        {gruposFiltrados.length === 0 && (
          <div className="col-span-full bg-white rounded-lg shadow-card p-6 text-center">
            <Users size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium mb-4">Nenhum grupo encontrado.</p>
            <button className="btn-primary">Criar Novo Grupo</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Grupos
