"use client"

import { useState } from "react"
import { Search, Plus, Calendar, MapPin, Users, Edit, Trash2, MoreHorizontal, Clock } from "lucide-react"

const eventosAdminData = [
  {
    id: 1,
    nome: "Workshop de React",
    data: "10/06/2023",
    hora: "14:00",
    local: "Auditório Principal",
    palestrante: "João Silva",
    vagas: 30,
    inscritos: 25,
    status: "Ativo",
    categoria: "Workshop",
  },
  {
    id: 2,
    nome: "Palestra sobre IA",
    data: "15/06/2023",
    hora: "16:00",
    local: "Sala 302",
    palestrante: "Maria Oliveira",
    vagas: 50,
    inscritos: 42,
    status: "Ativo",
    categoria: "Palestra",
  },
  {
    id: 3,
    nome: "Hackathon TrilhaLab",
    data: "20/06/2023",
    hora: "09:00",
    local: "Laboratório de Informática",
    palestrante: "Equipe TrilhaLab",
    vagas: 100,
    inscritos: 78,
    status: "Ativo",
    categoria: "Hackathon",
  },
  {
    id: 4,
    nome: "Meetup de Data Science",
    data: "25/06/2023",
    hora: "18:00",
    local: "Auditório Secundário",
    palestrante: "Carlos Santos",
    vagas: 40,
    inscritos: 15,
    status: "Cancelado",
    categoria: "Meetup",
  },
]

const EventosAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [categoriaFilter, setCategoriaFilter] = useState("")

  const eventosFiltrados = eventosAdminData.filter((evento) => {
    const matchesSearch =
      evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.palestrante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.local.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "" || evento.status === statusFilter
    const matchesCategoria = categoriaFilter === "" || evento.categoria === categoriaFilter
    return matchesSearch && matchesStatus && matchesCategoria
  })

  return (
    <div className="pb-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-primary">Gerenciar Eventos</h1>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Novo Evento</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="input pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="lg:w-1/4">
            <select className="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">Todos os status</option>
              <option value="Ativo">Ativo</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Finalizado">Finalizado</option>
            </select>
          </div>
          <div className="lg:w-1/4">
            <select className="select" value={categoriaFilter} onChange={(e) => setCategoriaFilter(e.target.value)}>
              <option value="">Todas as categorias</option>
              <option value="Workshop">Workshop</option>
              <option value="Palestra">Palestra</option>
              <option value="Hackathon">Hackathon</option>
              <option value="Meetup">Meetup</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {eventosFiltrados.map((evento) => (
          <div key={evento.id} className="bg-white rounded-lg shadow-card p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">{evento.nome}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="badge-info">{evento.categoria}</span>
                  <span
                    className={`badge-${evento.status === "Ativo" ? "info" : evento.status === "Cancelado" ? "error" : "warning"}`}
                  >
                    {evento.status}
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
                <Calendar size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">{evento.data}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">{evento.hora}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">{evento.local}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Palestrante: {evento.palestrante}</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{evento.inscritos}</div>
                  <div className="text-xs text-gray-dark">Inscritos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{evento.vagas}</div>
                  <div className="text-xs text-gray-dark">Vagas</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">
                    {Math.round((evento.inscritos / evento.vagas) * 100)}%
                  </div>
                  <div className="text-xs text-gray-dark">Ocupação</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn-secondary">Ver Inscritos</button>
                <button className="btn-primary">Editar</button>
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full bg-gray-light rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(evento.inscritos / evento.vagas) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}

        {eventosFiltrados.length === 0 && (
          <div className="bg-white rounded-lg shadow-card p-8 text-center">
            <Calendar size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium mb-4">Nenhum evento encontrado.</p>
            <button className="btn-primary">Criar Novo Evento</button>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-dark">
          Mostrando {eventosFiltrados.length} de {eventosAdminData.length} eventos
        </p>
        <div className="flex gap-2">
          <button className="btn-secondary">Anterior</button>
          <button className="btn-secondary">Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default EventosAdmin
