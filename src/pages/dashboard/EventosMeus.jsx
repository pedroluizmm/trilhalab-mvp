import { Link } from "react-router-dom"
import { Calendar, MapPin, Clock, QrCode } from "lucide-react"

const meusEventosData = [
  {
    id: 1,
    nome: "Workshop de React",
    data: "10/06/2023",
    hora: "14:00",
    local: "Auditório Principal",
    status: "Confirmado",
  },
  {
    id: 3,
    nome: "Hackathon TrilhaLab",
    data: "20/06/2023",
    hora: "09:00",
    local: "Laboratório de Informática",
    status: "Pendente",
  },
  {
    id: 5,
    nome: "Workshop de UX/UI Design",
    data: "30/06/2023",
    hora: "15:00",
    local: "Sala 201",
    status: "Confirmado",
  },
]

const EventosMeus = () => {
  return (
    <div className="pb-4 mt-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium text-primary">Meus Eventos</h1>
        <Link to="/dashboard/eventos" className="btn-secondary">
          Ver Todos os Eventos
        </Link>
      </div>

      <div className="space-y-4">
        {meusEventosData.map((evento) => (
          <div key={evento.id} className="bg-white rounded-lg shadow-card p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-medium text-primary">{evento.nome}</h2>
              <span className={`badge-${evento.status === "Confirmado" ? "info" : "warning"}`}>{evento.status}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
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
                <span className="text-sm text-gray-dark">Check-in: 30 min antes</span>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to={`/dashboard/eventos/meus/${evento.id}/checkin`} className="btn-primary flex items-center gap-2">
                <QrCode size={16} />
                <span>Gerar QR Code</span>
              </Link>
            </div>
          </div>
        ))}

        {meusEventosData.length === 0 && (
          <div className="bg-white rounded-lg shadow-card p-6 text-center">
            <p className="text-gray-medium">Você ainda não se inscreveu em nenhum evento.</p>
            <Link to="/dashboard/eventos" className="btn-primary mt-4 inline-block">
              Ver Eventos Disponíveis
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventosMeus
