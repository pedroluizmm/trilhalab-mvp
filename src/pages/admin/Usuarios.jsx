"use client"

import { useState } from "react"
import { Search, MoreHorizontal, User, Mail, Calendar, Edit, Trash2 } from "lucide-react"

const usuariosData = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@email.com",
    curso: "Ciência da Computação",
    semestre: "5º",
    dataRegistro: "15/03/2023",
    status: "Ativo",
    pontos: 1850,
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    curso: "Engenharia de Software",
    semestre: "3º",
    dataRegistro: "20/02/2023",
    status: "Ativo",
    pontos: 2380,
  },
  {
    id: 3,
    nome: "Carlos Santos",
    email: "carlos.santos@email.com",
    curso: "Sistemas de Informação",
    semestre: "7º",
    dataRegistro: "10/01/2023",
    status: "Inativo",
    pontos: 950,
  },
  {
    id: 4,
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    curso: "Ciência da Computação",
    semestre: "4º",
    dataRegistro: "05/04/2023",
    status: "Ativo",
    pontos: 2100,
  },
]

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [cursoFilter, setCursoFilter] = useState("")

  const usuariosFiltrados = usuariosData.filter((usuario) => {
    const matchesSearch =
      usuario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "" || usuario.status === statusFilter
    const matchesCurso = cursoFilter === "" || usuario.curso === cursoFilter
    return matchesSearch && matchesStatus && matchesCurso
  })

  return (
    <div className="pb-4">
      <h1 className="text-2xl font-medium text-primary mb-6">Gerenciar Usuários</h1>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar usuários..."
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
            <select className="select" value={cursoFilter} onChange={(e) => setCursoFilter(e.target.value)}>
              <option value="">Todos os cursos</option>
              <option value="Ciência da Computação">Ciência da Computação</option>
              <option value="Engenharia de Software">Engenharia de Software</option>
              <option value="Sistemas de Informação">Sistemas de Informação</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Curso
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Pontos
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Data Registro
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-light">
              {usuariosFiltrados.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium">
                        {usuario.nome
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-dark">{usuario.nome}</div>
                        <div className="text-sm text-gray-medium flex items-center gap-1">
                          <Mail size={12} />
                          {usuario.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-dark">{usuario.curso}</div>
                    <div className="text-sm text-gray-medium">{usuario.semestre} Semestre</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`badge-${usuario.status === "Ativo" ? "info" : "warning"}`}>{usuario.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-dark">{usuario.pontos} pts</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-dark flex items-center gap-1">
                      <Calendar size={12} />
                      {usuario.dataRegistro}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {usuariosFiltrados.length === 0 && (
          <div className="text-center py-8">
            <User size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium">Nenhum usuário encontrado.</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-dark">
          Mostrando {usuariosFiltrados.length} de {usuariosData.length} usuários
        </p>
        <div className="flex gap-2">
          <button className="btn-secondary">Anterior</button>
          <button className="btn-secondary">Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default Usuarios
