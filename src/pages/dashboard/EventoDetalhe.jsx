"use client"

import { useParams, Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Calendar, MapPin, Clock, User } from "lucide-react"

const eventosData = {
  1: {
    nome: "Workshop de React",
    data: "10/06/2023",
    hora: "14:00",
    local: "Auditório Principal",
    palestrante: "João Silva",
    descricao:
      "Workshop prático sobre React e suas principais funcionalidades. Neste workshop, você aprenderá a criar componentes, gerenciar estado, utilizar hooks e implementar rotas em uma aplicação React. Traga seu notebook com Node.js instalado para acompanhar os exercícios práticos.",
    vagas: 30,
    duracao: "3 horas",
    nivel: "Intermediário",
    requisitos: ["Conhecimento básico de JavaScript", "HTML e CSS", "Notebook com Node.js instalado"],
  },
  2: {
    nome: "Palestra sobre Inteligência Artificial",
    data: "15/06/2023",
    hora: "16:00",
    local: "Sala 302",
    palestrante: "Maria Oliveira",
    descricao:
      "Palestra sobre os avanços recentes em Inteligência Artificial e suas aplicações. Serão abordados temas como Machine Learning, Deep Learning, Processamento de Linguagem Natural e Visão Computacional. A palestra é aberta a todos os interessados, independentemente do nível de conhecimento prévio.",
    vagas: 50,
    duracao: "2 horas",
    nivel: "Todos os níveis",
    requisitos: [],
  },
  3: {
    nome: "Hackathon TrilhaLab",
    data: "20/06/2023",
    hora: "09:00",
    local: "Laboratório de Informática",
    palestrante: "Equipe TrilhaLab",
    descricao:
      "Maratona de programação com duração de 24 horas. Os participantes serão desafiados a desenvolver soluções inovadoras para problemas reais. Haverá premiação para as melhores soluções. As equipes podem ter de 3 a 5 integrantes.",
    vagas: 100,
    duracao: "24 horas",
    nivel: "Todos os níveis",
    requisitos: ["Notebook", "Conhecimento básico de programação", "Disposição para trabalhar em equipe"],
  },
  4: {
    nome: "Meetup de Data Science",
    data: "25/06/2023",
    hora: "18:00",
    local: "Auditório Secundário",
    palestrante: "Carlos Santos",
    descricao:
      "Encontro para discutir técnicas e ferramentas de Data Science. Serão apresentados casos de uso reais e haverá espaço para networking entre os participantes. O evento é voltado para profissionais e estudantes da área.",
    vagas: 40,
    duracao: "2 horas",
    nivel: "Intermediário a Avançado",
    requisitos: ["Conhecimento básico de estatística", "Experiência com Python ou R"],
  },
  5: {
    nome: "Workshop de UX/UI Design",
    data: "30/06/2023",
    hora: "15:00",
    local: "Sala 201",
    palestrante: "Ana Souza",
    descricao:
      "Workshop prático sobre princípios de UX/UI Design. Serão abordados temas como pesquisa de usuário, prototipação, testes de usabilidade e design de interfaces. Os participantes terão a oportunidade de aplicar os conceitos em exercícios práticos.",
    vagas: 25,
    duracao: "4 horas",
    nivel: "Iniciante a Intermediário",
    requisitos: ["Notebook com Figma instalado", "Interesse em design de interfaces"],
  },
}

const EventoDetalhe = () => {
  const { eventoId } = useParams()
  const navigate = useNavigate()
  const evento = eventosData[eventoId]

  if (!evento) {
    return <div>Evento não encontrado</div>
  }

  const handleInscrever = () => {
    navigate("/dashboard/eventos/meus")
  }

  return (
    <div className="pb-4 mt-6">
      <div className="flex items-center mb-6">
        <Link to="/dashboard/eventos" className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-medium text-primary">{evento.nome}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-primary" />
            <span className="text-gray-dark">
              {evento.data} às {evento.hora}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-primary" />
            <span className="text-gray-dark">{evento.local}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={20} className="text-primary" />
            <span className="text-gray-dark">Palestrante: {evento.palestrante}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-primary" />
            <span className="text-gray-dark">Duração: {evento.duracao}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-primary mb-2">Descrição:</h3>
          <p className="text-gray-dark">{evento.descricao}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-primary mb-2">Informações adicionais:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-dark">
                <strong>Vagas:</strong> {evento.vagas}
              </p>
            </div>
            <div>
              <p className="text-gray-dark">
                <strong>Nível:</strong> {evento.nivel}
              </p>
            </div>
          </div>
        </div>

        {evento.requisitos.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium text-primary mb-2">Requisitos:</h3>
            <ul className="list-disc pl-5">
              {evento.requisitos.map((requisito, index) => (
                <li key={index} className="text-gray-dark">
                  {requisito}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={handleInscrever} className="btn-primary w-full">
          Inscrever-se
        </button>
      </div>
    </div>
  )
}

export default EventoDetalhe
