"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Calendar, MapPin, Clock, Search } from "lucide-react"

const eventosData = [
  {
    id: 1,
    nome: "Workshop de React",
    data: "10/06/2023",
    hora: "14:00",
    local: "Auditório Principal",
    palestrante: "João Silva",
    descricao: "Workshop prático sobre React e suas principais funcionalidades.",
  },
  {
    id: 2,
    nome: "Palestra sobre Inteligência Artificial",
    data: "15/06/2023",
    hora: "16:00",
    local: "Sala 302",
    palestrante: "Maria Oliveira",
    descricao: "Palestra sobre os avanços recentes em Inteligência Artificial e suas aplicações.",
  },
  {
    id: 3,
    nome: "Hackathon TrilhaLab",
    data: "20/06/2023",
    hora: "09:00",
    local: "Laboratório de Informática",
    palestrante: "Equipe TrilhaLab",
    descricao: "Maratona de programação com duração de 24 horas.",
  },
  {
    id: 4,
    nome: "Meetup de Data Science",
    data: "25/06/2023",
    hora: "18:00",
    local: "Auditório Secundário",
    palestrante: "Carlos Santos",
    descricao: "Encontro para discutir técnicas e ferramentas de Data Science.",
  },
  {
    id: 5,
    nome: "Workshop de UX/UI Design",
    data: "30/06/2023",
    hora: "15:00",
    local: "Sala 201",
    palestrante: "Ana Souza",
    descricao: "Workshop prático sobre princípios de UX/UI Design.",
  },
]

const Eventos = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEventos = eventosData.filter(
    (evento) =>
      evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.palestrante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.local.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="pb-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-primary">Eventos</h1>
        <Link to="/dashboard/eventos/meus" className="btn-secondary">
          Meus Eventos
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
          <input
            type="text"
            placeholder="Buscar eventos..."
            className="input pl-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredEventos.map((evento) => (
          <div key={evento.id} className="bg-white rounded-lg shadow-card p-4">
            <h2 className="text-lg font-medium text-primary mb-2">{evento.nome}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">
                  {evento.data} às {evento.hora}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">{evento.local}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Palestrante: {evento.palestrante}</span>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to={`/dashboard/eventos/${evento.id}`} className="btn-primary">
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Eventos
