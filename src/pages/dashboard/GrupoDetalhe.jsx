"use client"

import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Users, Crown, MessageCircle, Calendar, Send } from "lucide-react"

const gruposData = {
  1: {
    nome: "React Developers",
    descricao: "Grupo para desenvolvedores React compartilharem conhecimento e projetos",
    membros: 45,
    categoria: "Frontend",
    admin: "João Silva",
    criado: "15/03/2023",
    regras: [
      "Seja respeitoso com todos os membros",
      "Compartilhe conhecimento de qualidade",
      "Evite spam e conteúdo irrelevante",
      "Use as tags apropriadas nas postagens",
    ],
  },
  2: {
    nome: "Data Science Brasil",
    descricao: "Comunidade brasileira de Data Science e Machine Learning",
    membros: 78,
    categoria: "Data Science",
    admin: "Maria Oliveira",
    criado: "10/02/2023",
    regras: [
      "Compartilhe datasets e projetos interessantes",
      "Faça perguntas técnicas detalhadas",
      "Ajude outros membros com dúvidas",
      "Mantenha discussões construtivas",
    ],
  },
  3: {
    nome: "Cloud Computing",
    descricao: "Discussões sobre AWS, Azure, Google Cloud e outras plataformas",
    membros: 32,
    categoria: "Cloud",
    admin: "Carlos Santos",
    criado: "20/01/2023",
    regras: [
      "Compartilhe experiências com diferentes clouds",
      "Discuta melhores práticas de segurança",
      "Ajude com certificações",
      "Mantenha conteúdo atualizado",
    ],
  },
}

const discussoesData = [
  {
    id: 1,
    autor: "Pedro Silva",
    titulo: "Como otimizar performance em React?",
    conteudo: "Estou trabalhando em uma aplicação React e notei que está ficando lenta...",
    data: "2 horas atrás",
    respostas: 5,
  },
  {
    id: 2,
    autor: "Ana Costa",
    titulo: "Dúvida sobre useEffect",
    conteudo: "Alguém pode me explicar quando usar useEffect com array de dependências vazio?",
    data: "5 horas atrás",
    respostas: 12,
  },
  {
    id: 3,
    autor: "Lucas Oliveira",
    titulo: "Projeto open source em React",
    conteudo: "Criei uma biblioteca de componentes React, gostaria de feedback da comunidade!",
    data: "1 dia atrás",
    respostas: 8,
  },
]

const GrupoDetalhe = () => {
  const { grupoId } = useParams()
  const grupo = gruposData[grupoId]
  const [novaDiscussao, setNovaDiscussao] = useState("")
  const [activeTab, setActiveTab] = useState("discussoes")

  if (!grupo) {
    return <div>Grupo não encontrado</div>
  }

  return (
    <div className="pb-4 mt-6">
      <div className="flex items-center mb-6">
        <Link to="/dashboard/grupos" className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-medium text-primary">{grupo.nome}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary-light rounded-md p-3">
            <Users size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-medium text-primary">{grupo.nome}</h2>
            <span className="badge-info">{grupo.categoria}</span>
          </div>
        </div>

        <p className="text-gray-dark mb-4">{grupo.descricao}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-primary" />
            <span className="text-gray-dark">{grupo.membros} membros</span>
          </div>
          <div className="flex items-center gap-2">
            <Crown size={16} className="text-primary" />
            <span className="text-gray-dark">Admin: {grupo.admin}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-primary" />
            <span className="text-gray-dark">Criado em: {grupo.criado}</span>
          </div>
        </div>

        <button className="btn-primary w-full">Participar do Grupo</button>
      </div>

      <div className="bg-white rounded-lg shadow-card">
        <div className="border-b border-gray-light">
          <div className="flex">
            <button
              onClick={() => setActiveTab("discussoes")}
              className={`px-6 py-3 font-medium ${activeTab === "discussoes" ? "text-primary border-b-2 border-primary" : "text-gray-dark"
                }`}
            >
              Discussões
            </button>
            <button
              onClick={() => setActiveTab("regras")}
              className={`px-6 py-3 font-medium ${activeTab === "regras" ? "text-primary border-b-2 border-primary" : "text-gray-dark"
                }`}
            >
              Regras
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "discussoes" && (
            <div>
              <div className="mb-6">
                <h3 className="font-medium text-primary mb-3">Nova Discussão</h3>
                <div className="flex gap-3">
                  <textarea
                    className="textarea flex-1"
                    placeholder="Compartilhe uma dúvida, projeto ou conhecimento..."
                    value={novaDiscussao}
                    onChange={(e) => setNovaDiscussao(e.target.value)}
                  ></textarea>
                  <button className="btn-primary h-fit">
                    <Send size={20} />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {discussoesData.map((discussao) => (
                  <div key={discussao.id} className="border border-gray-light rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-primary">{discussao.titulo}</h4>
                      <span className="text-sm text-gray-medium">{discussao.data}</span>
                    </div>
                    <p className="text-gray-dark mb-3">{discussao.conteudo}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-dark">Por: {discussao.autor}</span>
                      <div className="flex items-center gap-2">
                        <MessageCircle size={16} className="text-primary" />
                        <span className="text-sm text-gray-dark">{discussao.respostas} respostas</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "regras" && (
            <div>
              <h3 className="font-medium text-primary mb-4">Regras do Grupo</h3>
              <ul className="space-y-3">
                {grupo.regras.map((regra, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-dark">{regra}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GrupoDetalhe
