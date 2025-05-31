"use client"

import { useState } from "react"
import { Search, Plus, Users, Crown, Calendar, Edit, Trash2, MoreHorizontal } from "lucide-react"

const gruposAdminData = [
  {
    id: 1,
    nome: "React Developers",
    descricao: "Grupo para desenvolvedores React compartilharem conhecimento",
    categoria: "Frontend",
    admin: "João Silva",
    membros: 45,
    dataCriacao: "15/03/2023",
    status: "Ativo",
    discussoes: 23,
  },
  {
    id: 2,
    nome: "Data Science Brasil",
    descricao: "Comunidade brasileira de Data Science e Machine Learning",
    categoria: "Data Science",
    admin: "Maria Oliveira",
    membros: 78,
    dataCriacao: "10/02/2023",
    status: "Ativo",
    discussoes: 45,
  },
  {
    id: 3,
    nome: "Cloud Computing",
    descricao: "Discussões sobre AWS, Azure, Google Cloud",
    categoria: "Cloud",
    admin: "Carlos Santos",
    membros: 32,
    dataCriacao: "20/01/2023",
    status: "Inativo",
    discussoes: 12,
  },
  {
    id: 4,
    nome: "Mobile Development",
    descricao: "Desenvolvimento mobile com React Native e Flutter",
    categoria: "Mobile",
    admin: "Ana Souza",
    membros: 28,
    dataCriacao: "05/04/2023",
    status: "Ativo",
    discussoes: 18,
  },
]

const GruposAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [categoriaFilter, setCategoriaFilter] = useState("")

  const gruposFiltrados = gruposAdminData.filter((grupo) => {
    const matchesSearch =
      grupo.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grupo.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "" || grupo.status === statusFilter
    const matchesCategoria = categoriaFilter === "" || grupo.categoria === categoriaFilter
    return matchesSearch && matchesStatus && matchesCategoria
  })

  return (
    <div className="pb-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-primary">Gerenciar Grupos</h1>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Novo Grupo</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
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
          <div className="lg:w-1/4">
            <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">Todos os status</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
          <div className="lg:w-1/4">
            <select className="select" value={categoriaFilter} onChange={(e) => setCategoriaFilter(e.target.value)}>
              <option value="">Todas as categorias</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Data Science">Data Science</option>
              <option value="Cloud">Cloud</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {gruposFiltrados.map((grupo) => (
          <div key={grupo.id} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-light rounded-md p-2">
                  <Users size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-primary">{grupo.nome}</h3>
                  <span className="badge-info">{grupo.categoria}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="text-primary hover:text-primary/80">
                  <Edit size={16} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 size={16} />
                </button>
                <button className="text-gray-medium hover:text-gray-dark">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            <p className="text-gray-dark text-sm mb-4 line-clamp-2">{grupo.descricao}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{grupo.membros}</div>
                <div className="text-xs text-gray-dark">Membros</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{grupo.discussoes}</div>
                <div className="text-xs text-gray-dark">Discussões</div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-dark flex items-center gap-1">
                  <Crown size={12} />
                  Admin:
                </span>
                <span className="text-gray-dark">{grupo.admin}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-dark flex items-center gap-1">
                  <Calendar size={12} />
                  Criado:
                </span>
                <span className="text-gray-dark">{grupo.dataCriacao}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className={`badge-${grupo.status === "Ativo" ? "info" : "warning"}`}>{grupo.status}</span>
              <button className="btn-primary text-sm">Ver Detalhes</button>
            </div>
          </div>
        ))}

        {gruposFiltrados.length === 0 && (
          <div className="col-span-full bg-white rounded-lg shadow-card p-8 text-center">
            <Users size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium mb-4">Nenhum grupo encontrado.</p>
            <button className="btn-primary">Criar Novo Grupo</button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-dark">
          Mostrando {gruposFiltrados.length} de {gruposAdminData.length} grupos
        </p>
        <div className="flex gap-2">
          <button className="btn-secondary">Anterior</button>
          <button className="btn-secondary">Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default GruposAdmin
