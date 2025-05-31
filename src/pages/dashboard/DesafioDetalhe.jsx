"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Award, User } from "lucide-react"

const desafiosData = {
  1: {
    titulo: "Criar uma API RESTful",
    descricao:
      "Desenvolva uma API RESTful utilizando Node.js e Express para gerenciar uma lista de tarefas. A API deve permitir criar, listar, atualizar e excluir tarefas, além de marcar tarefas como concluídas.",
    categoria: "Backend",
    nivel: "Intermediário",
    prazo: "10/06/2023",
    requisitos: [
      "Implementar endpoints para CRUD de tarefas",
      "Utilizar banco de dados MongoDB",
      "Implementar validação de dados",
      "Documentar a API com Swagger",
      "Implementar testes unitários",
    ],
    mentor: "João Silva",
    pontos: 100,
  },
  2: {
    titulo: "Desenvolver uma interface de usuário responsiva",
    descricao:
      "Crie uma interface de usuário responsiva utilizando React e Tailwind CSS para uma aplicação de e-commerce. A interface deve ser adaptável a diferentes tamanhos de tela e seguir as melhores práticas de UX/UI.",
    categoria: "Frontend",
    nivel: "Iniciante",
    prazo: "15/06/2023",
    requisitos: [
      "Implementar layout responsivo",
      "Criar componentes reutilizáveis",
      "Implementar tema claro/escuro",
      "Garantir acessibilidade",
      "Otimizar performance",
    ],
    mentor: "Maria Oliveira",
    pontos: 75,
  },
  3: {
    titulo: "Implementar autenticação JWT",
    descricao:
      "Implemente autenticação JWT em uma aplicação web utilizando Node.js e React. A autenticação deve permitir registro, login, recuperação de senha e proteção de rotas.",
    categoria: "Fullstack",
    nivel: "Avançado",
    prazo: "20/06/2023",
    requisitos: [
      "Implementar registro e login de usuários",
      "Utilizar JWT para autenticação",
      "Implementar refresh token",
      "Proteger rotas no frontend e backend",
      "Implementar recuperação de senha",
    ],
    mentor: "Carlos Santos",
    pontos: 150,
  },
  4: {
    titulo: "Análise de dados com Python",
    descricao:
      "Realize uma análise de dados utilizando Python, Pandas e Matplotlib. O objetivo é extrair insights de um conjunto de dados de vendas e apresentar os resultados em gráficos e tabelas.",
    categoria: "Data Science",
    nivel: "Intermediário",
    prazo: "25/06/2023",
    requisitos: [
      "Limpar e preparar os dados",
      "Realizar análise exploratória",
      "Criar visualizações com Matplotlib",
      "Identificar tendências e padrões",
      "Apresentar conclusões em um notebook Jupyter",
    ],
    mentor: "Ana Souza",
    pontos: 120,
  },
  5: {
    titulo: "Desenvolver um chatbot",
    descricao:
      "Crie um chatbot utilizando tecnologias de processamento de linguagem natural. O chatbot deve ser capaz de responder perguntas frequentes sobre um determinado tema.",
    categoria: "IA",
    nivel: "Avançado",
    prazo: "30/06/2023",
    requisitos: [
      "Utilizar uma biblioteca de NLP",
      "Treinar o modelo com dados relevantes",
      "Implementar interface de chat",
      "Lidar com perguntas fora do escopo",
      "Documentar o processo de treinamento",
    ],
    mentor: "Pedro Costa",
    pontos: 200,
  },
}

const DesafioDetalhe = () => {
  const { desafioId } = useParams()
  const desafio = desafiosData[desafioId]

  if (!desafio) {
    return <div>Desafio não encontrado</div>
  }

  return (
    <div className="pb-4">
      <div className="flex items-center mb-6">
        <Link to="/dashboard/desafios" className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-medium text-primary">{desafio.titulo}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge-info">{desafio.categoria}</span>
          <span className="badge-warning">{desafio.nivel}</span>
        </div>

        <p className="text-gray-dark mb-6">{desafio.descricao}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-primary" />
            <span className="text-gray-dark">Prazo: {desafio.prazo}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={20} className="text-primary" />
            <span className="text-gray-dark">Pontos: {desafio.pontos}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={20} className="text-primary" />
            <span className="text-gray-dark">Mentor: {desafio.mentor}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-primary mb-2">Requisitos:</h3>
          <ul className="list-disc pl-5">
            {desafio.requisitos.map((requisito, index) => (
              <li key={index} className="text-gray-dark">
                {requisito}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={`/dashboard/desafios/${desafioId}/submissao`} className="btn-primary flex-1 text-center">
            Enviar Solução
          </Link>
          <Link to="/dashboard/desafios" className="btn-secondary flex-1 text-center">
            Voltar aos Desafios
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DesafioDetalhe
