"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft, Target, Calendar, Tag } from "lucide-react"

const DefinirMeta = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    categoria: "",
    prazo: "",
    tipo: "desafios", // desafios, eventos, certificacao, projeto
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria feita a submissão da meta
    navigate("/dashboard/metas")
  }

  return (
    <div className="pb-4 mt-6">
      <div className="flex items-center mb-6">
        <Link to="/dashboard/metas" className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-medium text-primary">Definir Nova Meta</h1>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="titulo" className="block text-gray-dark mb-2">
              <Target size={16} className="inline mr-2" />
              Título da Meta
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              className="input"
              placeholder="Ex: Aprender React"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-gray-dark mb-2">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              className="textarea"
              placeholder="Descreva sua meta em detalhes..."
              value={formData.descricao}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="categoria" className="block text-gray-dark mb-2">
              <Tag size={16} className="inline mr-2" />
              Categoria
            </label>
            <select
              id="categoria"
              name="categoria"
              className="select"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Data Science">Data Science</option>
              <option value="IA">Inteligência Artificial</option>
              <option value="Cloud">Cloud Computing</option>
              <option value="Mobile">Mobile</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>

          <div>
            <label htmlFor="tipo" className="block text-gray-dark mb-2">
              Tipo de Meta
            </label>
            <select id="tipo" name="tipo" className="select" value={formData.tipo} onChange={handleChange} required>
              <option value="desafios">Completar Desafios</option>
              <option value="eventos">Participar de Eventos</option>
              <option value="certificacao">Obter Certificação</option>
              <option value="projeto">Desenvolver Projeto</option>
            </select>
          </div>

          <div>
            <label htmlFor="prazo" className="block text-gray-dark mb-2">
              <Calendar size={16} className="inline mr-2" />
              Prazo
            </label>
            <input
              type="date"
              id="prazo"
              name="prazo"
              className="input"
              value={formData.prazo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="bg-primary-light rounded-lg p-4">
            <h3 className="font-medium text-primary mb-2">Dicas para definir metas eficazes:</h3>
            <ul className="text-sm text-gray-dark space-y-1">
              <li>• Seja específico sobre o que deseja alcançar</li>
              <li>• Defina um prazo realista</li>
              <li>• Divida metas grandes em etapas menores</li>
              <li>• Acompanhe seu progresso regularmente</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button type="submit" className="btn-primary flex-1">
              Criar Meta
            </button>
            <Link to="/dashboard/metas" className="btn-secondary flex-1 text-center">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DefinirMeta
