"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Filter } from "lucide-react"

const desafiosData = [
  {
    id: 1,
    titulo: "Criar uma API RESTful",
    descricao: "Desenvolva uma API RESTful utilizando Node.js e Express para gerenciar uma lista de tarefas.",
    categoria: "Backend",
    nivel: "Intermediário",
    prazo: "10/06/2023",
  },
  {
    id: 2,
    titulo: "Desenvolver uma interface de usuário responsiva",
    descricao: "Crie uma interface de usuário responsiva utilizando React e Tailwind CSS.",
    categoria: "Frontend",
    nivel: "Iniciante",
    prazo: "15/06/2023",
  },
  {
    id: 3,
    titulo: "Implementar autenticação JWT",
    descricao: "Implemente autenticação JWT em uma aplicação web utilizando Node.js e React.",
    categoria: "Fullstack",
    nivel: "Avançado",
    prazo: "20/06/2023",
  },
  {
    id: 4,
    titulo: "Análise de dados com Python",
    descricao: "Realize uma análise de dados utilizando Python, Pandas e Matplotlib.",
    categoria: "Data Science",
    nivel: "Intermediário",
    prazo: "25/06/2023",
  },
  {
    id: 5,
    titulo: "Desenvolver um chatbot",
    descricao: "Crie um chatbot utilizando tecnologias de processamento de linguagem natural.",
    categoria: "IA",
    nivel: "Avançado",
    prazo: "30/06/2023",
  },
]

const Desafios = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoria, setCategoria] = useState("")

  const filteredDesafios = desafiosData.filter((desafio) => {
    const matchesSearch =
      desafio.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desafio.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategoria = categoria === "" || desafio.categoria === categoria
    return matchesSearch && matchesCategoria
  })

  return (
    <div className="pb-4 mt-6">
      <h1 className="text-2xl font-medium text-primary mb-6">Desafios</h1>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar desafios..."
              className="input pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative md:w-1/3">
            <Filter size={20} className="absolute left-4 top-3 text-gray-medium" />
            <select className="select pl-12" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Todas as categorias</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Data Science">Data Science</option>
              <option value="IA">IA</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredDesafios.map((desafio) => (
          <div key={desafio.id} className="bg-white rounded-lg shadow-card p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-medium text-primary">{desafio.titulo}</h2>
              <span className="badge-info">{desafio.categoria}</span>
            </div>
            <p className="text-gray-dark mb-3">{desafio.descricao}</p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-dark">Nível: {desafio.nivel}</span>
                <span className="text-sm text-gray-dark ml-4">Prazo: {desafio.prazo}</span>
              </div>
              <Link to={`/dashboard/desafios/${desafio.id}`} className="btn-primary">
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Desafios
