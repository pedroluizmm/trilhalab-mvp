"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Plus, Target, Calendar, TrendingUp } from "lucide-react"

const metasData = [
  {
    id: 1,
    titulo: "Aprender React",
    descricao: "Completar 5 desafios de React até o final do mês",
    prazo: "30/06/2023",
    progresso: 60,
    status: "Em andamento",
    categoria: "Frontend",
  },
  {
    id: 2,
    titulo: "Certificação AWS",
    descricao: "Obter certificação AWS Solutions Architect",
    prazo: "15/07/2023",
    progresso: 30,
    status: "Em andamento",
    categoria: "Cloud",
  },
  {
    id: 3,
    titulo: "Projeto Full Stack",
    descricao: "Desenvolver uma aplicação completa com React e Node.js",
    prazo: "20/06/2023",
    progresso: 100,
    status: "Concluída",
    categoria: "Fullstack",
  },
  {
    id: 4,
    titulo: "Estudar Data Science",
    descricao: "Completar curso de Python para Data Science",
    prazo: "10/08/2023",
    progresso: 15,
    status: "Em andamento",
    categoria: "Data Science",
  },
]

const Metas = () => {
  const [filtro, setFiltro] = useState("todas")

  const metasFiltradas = metasData.filter((meta) => {
    if (filtro === "todas") return true
    if (filtro === "andamento") return meta.status === "Em andamento"
    if (filtro === "concluidas") return meta.status === "Concluída"
    return true
  })

  return (
    <div className="pb-4 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-primary">Metas</h1>
        <Link to="/dashboard/metas/definir" className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          <span>Nova Meta</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFiltro("todas")}
            className={`px-4 py-2 rounded-md text-sm ${filtro === "todas" ? "bg-primary text-white" : "bg-gray-100 text-gray-dark"
              }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFiltro("andamento")}
            className={`px-4 py-2 rounded-md text-sm ${filtro === "andamento" ? "bg-primary text-white" : "bg-gray-100 text-gray-dark"
              }`}
          >
            Em Andamento
          </button>
          <button
            onClick={() => setFiltro("concluidas")}
            className={`px-4 py-2 rounded-md text-sm ${filtro === "concluidas" ? "bg-primary text-white" : "bg-gray-100 text-gray-dark"
              }`}
          >
            Concluídas
          </button>
        </div>
      </div>

      <div className="space-y-4 ">
        {metasFiltradas.map((meta) => (
          <div key={meta.id} className="bg-white rounded-lg shadow-card p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary-light rounded-md p-2">
                  <Target size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-primary">{meta.titulo}</h2>
                  <span className="badge-info">{meta.categoria}</span>
                </div>
              </div>
              <span className={`badge-${meta.status === "Concluída" ? "info" : "warning"}`}>{meta.status}</span>
            </div>

            <p className="text-gray-dark mb-4">{meta.descricao}</p>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-dark">Progresso</span>
                <span className="text-sm font-medium text-primary">{meta.progresso}%</span>
              </div>
              <div className="w-full bg-gray-light rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${meta.progresso}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">Prazo: {meta.prazo}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-primary" />
                <span className="text-sm text-gray-dark">
                  {meta.status === "Concluída" ? "Meta alcançada!" : "Continue assim!"}
                </span>
              </div>
            </div>
          </div>
        ))}

        {metasFiltradas.length === 0 && (
          <div className="bg-white rounded-lg shadow-card p-6 text-center">
            <Target size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium mb-4">Nenhuma meta encontrada para este filtro.</p>
            <Link to="/dashboard/metas/definir" className="btn-primary">
              Definir Nova Meta
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Metas
