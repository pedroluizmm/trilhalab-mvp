"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Upload, Send } from "lucide-react"

const desafiosData = {
  1: {
    titulo: "Criar uma API RESTful",
    categoria: "Backend",
  },
  2: {
    titulo: "Desenvolver uma interface de usuário responsiva",
    categoria: "Frontend",
  },
  3: {
    titulo: "Implementar autenticação JWT",
    categoria: "Fullstack",
  },
  4: {
    titulo: "Análise de dados com Python",
    categoria: "Data Science",
  },
  5: {
    titulo: "Desenvolver um chatbot",
    categoria: "IA",
  },
}

const DesafioSubmissao = () => {
  const { desafioId } = useParams()
  const desafio = desafiosData[desafioId]
  const [solucao, setSolucao] = useState("")
  const [arquivo, setArquivo] = useState(null)

  if (!desafio) {
    return <div>Desafio não encontrado</div>
  }

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setArquivo(e.target.files[0])
    }
  }

  return (
    <div className="pb-4">
      <div className="flex items-center mb-6">
        <Link to={`/dashboard/desafios/${desafioId}`} className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-2xl font-medium text-primary">{desafio.titulo}</h1>
          <p className="text-gray-dark">Submissão de solução</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-4">
        <div className="mb-6">
          <label htmlFor="solucao" className="block text-gray-dark mb-2">
            Sua solução:
          </label>
          <textarea
            id="solucao"
            className="textarea h-40"
            placeholder="Descreva sua solução ou cole seu código aqui..."
            value={solucao}
            onChange={(e) => setSolucao(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-dark mb-2">Ou envie um arquivo:</label>
          <div className="flex items-center">
            <label className="flex items-center gap-2 btn-secondary cursor-pointer">
              <Upload size={20} />
              <span>Selecionar arquivo</span>
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>
            {arquivo && <span className="ml-4 text-gray-dark">{arquivo.name}</span>}
          </div>
        </div>

        <button className="btn-primary w-full flex items-center justify-center gap-2 mb-6">
          <Send size={20} />
          <span>Enviar Solução</span>
        </button>

        <div>
          <h3 className="font-medium text-primary mb-4">Feedback</h3>
          <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center text-gray-medium">
            O feedback aparecerá aqui após a avaliação da sua solução.
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link to="/dashboard/desafios" className="btn-secondary">
          Voltar aos Desafios
        </Link>
      </div>
    </div>
  )
}

export default DesafioSubmissao
