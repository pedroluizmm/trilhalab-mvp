"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, QrCode, CheckCircle } from "lucide-react"

const eventosData = {
  1: {
    nome: "Workshop de React",
    data: "10/06/2023",
    hora: "14:00",
    local: "Auditório Principal",
  },
  3: {
    nome: "Hackathon TrilhaLab",
    data: "20/06/2023",
    hora: "09:00",
    local: "Laboratório de Informática",
  },
  5: {
    nome: "Workshop de UX/UI Design",
    data: "30/06/2023",
    hora: "15:00",
    local: "Sala 201",
  },
}

const EventoCheckin = () => {
  const { eventoId } = useParams()
  const evento = eventosData[eventoId]

  if (!evento) {
    return <div>Evento não encontrado</div>
  }

  return (
    <div className="pb-4 mt-6">
      <div className="flex items-center mb-6">
        <Link to="/dashboard/eventos/meus" className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-2xl font-medium text-primary">Check-in</h1>
          <p className="text-gray-dark">{evento.nome}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 text-center">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-primary mb-2">QR Code para Check-in</h2>
          <p className="text-gray-dark mb-4">Apresente este QR Code na entrada do evento para fazer seu check-in</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mb-6 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <QrCode size={120} className="text-primary" />
          </div>
        </div>

        <div className="bg-primary-light rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle size={20} className="text-primary" />
            <span className="font-medium text-primary">Informações do Evento</span>
          </div>
          <p className="text-gray-dark">
            <strong>Data:</strong> {evento.data} às {evento.hora}
          </p>
          <p className="text-gray-dark">
            <strong>Local:</strong> {evento.local}
          </p>
          <p className="text-gray-dark">
            <strong>Check-in:</strong> 30 minutos antes do início
          </p>
        </div>

        <div className="text-sm text-gray-medium mb-6">
          <p>Código do evento: EVT-{eventoId.padStart(3, "0")}</p>
          <p>Válido até: {evento.data}</p>
        </div>

        <Link to="/dashboard/eventos/meus" className="btn-primary w-full">
          Voltar aos Meus Eventos
        </Link>
      </div>
    </div>
  )
}

export default EventoCheckin
