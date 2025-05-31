"use client"

import { useState } from "react"
import { Search, Plus, Target, Calendar, Award, Edit, Trash2, MoreHorizontal, User } from "lucide-react"

const desafiosAdminData = [
  {
    id: 1,
    titulo: "Criar uma API RESTful",
    categoria: "Backend",
    nivel: "Intermediário",
    mentor: "João Silva",
    prazo: "10/06/2023",
    submissoes: 15,
    pontos: 100,
    status: "Ativo",
    dataCriacao: "01/05/2023",
  },
  {
    id: 2,
    titulo: "Interface responsiva",
    categoria: "Frontend",
    nivel: "Iniciante",
    mentor: "Maria Oliveira",
    prazo: "15/06/2023",
    submissoes: 23,
    pontos: 75,
    status: "Ativo",
    dataCriacao: "05/05/2023",
  },
  {
    id: 3,
    titulo: "Autenticação JWT",
    categoria: "Fullstack",
    nivel: "Avançado",
    mentor: "Carlos Santos",
    prazo: "20/06/2023",
    submissoes: 8,
    pontos: 150,
    status: "Ativo",
    dataCriacao: "10/05/2023",
  },
  {
    id: 4,
    titulo: "Análise de dados",
    categoria: "Data Science",
    nivel: "Intermediário",
    mentor: "Ana Souza",
    prazo: "25/06/2023",
    submissoes: 12,
    pontos: 120,
    status: "Finalizado",
    dataCriacao: "15/04/2023",
  },
]

const DesafiosAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [categoriaFilter, setCategoriaFilter] = useState("")
  const [nivelFilter, setNivelFilter] = useState("")

  const desafiosFiltrados = desafiosAdminData.filter((desafio) => {
    const matchesSearch =
      desafio.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desafio.mentor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "" || desafio.status === statusFilter
    const matchesCategoria = categoriaFilter === "" || desafio.categoria === categoriaFilter
    const matchesNivel = nivelFilter === "" || desafio.nivel === nivelFilter
    return matchesSearch && matchesStatus && matchesCategoria && matchesNivel
  })

  return (
    <div className="pb-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-primary">Gerenciar Desafios</h1>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Novo Desafio</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar desafios..."
              className="input pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Todos os status</option>
            <option value="Ativo">Ativo</option>
            <option value="Finalizado">Finalizado</option>
            <option value="Rascunho">Rascunho</option>
          </select>
          <select className="select" value={categoriaFilter} onChange={(e) => setCategoriaFilter(e.target.value)}>
            <option value="">Todas as categorias</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Data Science">Data Science</option>
            <option value="IA">IA</option>
          </select>
          <select className="select" value={nivelFilter} onChange={(e) => setNivelFilter(e.target.value)}>
            <option value="">Todos os níveis</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {desafiosFiltrados.map((desafio) => (
          <div key={desafio.id} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">{desafio.titulo}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="badge-info">{desafio.categoria}</span>
                  <span className="badge-warning">{desafio.nivel}</span>
                  <span
                    className={`badge-${desafio.status === "Ativo" ? "info" : desafio.status === "Finalizado" ? "warning" : "error"}`}
                  >
                    {desafio.status}
                  </span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Mentor: {desafio.mentor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Prazo: {desafio.prazo}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Pontos: {desafio.pontos}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Criado: {desafio.dataCriacao}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{desafio.submissoes}</div>
                  <div className="text-xs text-gray-dark">Submissões</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{desafio.pontos}</div>
                  <div className="text-xs text-gray-dark">Pontos</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary">Ver Submissões</button>
                <button className="btn-primary">Editar</button>
              </div>
            </div>
          </div>
        ))}

        {desafiosFiltrados.length === 0 && (
          <div className="bg-white rounded-lg shadow-card p-8 text-center">
            <Target size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium mb-4">Nenhum desafio encontrado.</p>
            <button className="btn-primary">Criar Novo Desafio</button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-dark">
          Mostrando {desafiosFiltrados.length} de {desafiosAdminData.length} desafios
        </p>
        <div className="flex gap-2">
          <button className="btn-secondary">Anterior</button>
          <button className="btn-secondary">Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default DesafiosAdmin
