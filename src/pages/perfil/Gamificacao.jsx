"use client"

import { Link } from "react-router-dom"
import { ArrowLeft, Trophy, Star, Award, Target, TrendingUp } from "lucide-react"

const conquistas = [
  {
    id: 1,
    nome: "Primeiro Desafio",
    descricao: "Complete seu primeiro desafio",
    icone: <Target size={24} />,
    conquistada: true,
    pontos: 50,
  },
  {
    id: 2,
    nome: "Participante Ativo",
    descricao: "Participe de 5 eventos",
    icone: <Star size={24} />,
    conquistada: true,
    pontos: 100,
  },
  {
    id: 3,
    nome: "Mestre React",
    descricao: "Complete 10 desafios de React",
    icone: <Award size={24} />,
    conquistada: false,
    pontos: 200,
    progresso: 7,
    total: 10,
  },
  {
    id: 4,
    nome: "Networking",
    descricao: "Participe de 3 grupos diferentes",
    icone: <TrendingUp size={24} />,
    conquistada: false,
    pontos: 150,
    progresso: 1,
    total: 3,
  },
]

const ranking = [
  { posicao: 1, nome: "João Silva", pontos: 2450, avatar: "JS", isUser: true },
  { posicao: 2, nome: "Maria Oliveira", pontos: 2380, avatar: "MO" },
  { posicao: 3, nome: "Carlos Santos", pontos: 2250, avatar: "CS" },
  { posicao: 4, nome: "Ana Souza", pontos: 2100, avatar: "AS" },
  { posicao: 5, nome: "Victor Caetano", pontos: 1850, avatar: "VC" },
]

const Gamificacao = () => {
  const userPoints = 1850
  const userLevel = Math.floor(userPoints / 500) + 1
  const pointsToNextLevel = userLevel * 500 - userPoints

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4">
        <Link to="/dashboard/tendencias" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-primary text-2xl font-medium">Gamificação</h1>
        <div className="w-6"></div>
      </header>

      <main className="pt-16 px-4 py-6">
        {/* Status do Usuário */}
        <div className="bg-white rounded-lg shadow-card p-6 mb-6">
          <div className="text-center mb-4">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-2">
              VC
            </div>
            <h2 className="text-lg font-medium text-primary">Seu Progresso</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userPoints}</div>
              <div className="text-sm text-gray-dark">Pontos Totais</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Nível {userLevel}</div>
              <div className="text-sm text-gray-dark">Nível Atual</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{pointsToNextLevel}</div>
              <div className="text-sm text-gray-dark">Para Próximo Nível</div>
            </div>
          </div>

          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-dark mb-1">
              <span>Progresso para Nível {userLevel + 1}</span>
              <span>{userPoints % 500}/500</span>
            </div>
            <div className="w-full bg-gray-light rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${(userPoints % 500) / 5}%` }}></div>
            </div>
          </div>
        </div>

        {/* Conquistas */}
        <div className="bg-white rounded-lg shadow-card p-6 mb-6">
          <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
            <Trophy size={20} />
            Conquistas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conquistas.map((conquista) => (
              <div
                key={conquista.id}
                className={`border rounded-lg p-4 ${conquista.conquistada ? "border-primary bg-primary-light" : "border-gray-light"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`rounded-md p-2 ${conquista.conquistada ? "bg-primary text-white" : "bg-gray-light text-gray-dark"
                      }`}
                  >
                    {conquista.icone}
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">{conquista.nome}</h4>
                    <p className="text-sm text-gray-dark">{conquista.descricao}</p>
                  </div>
                </div>

                {!conquista.conquistada && conquista.progresso !== undefined && (
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-dark mb-1">
                      <span>Progresso</span>
                      <span>
                        {conquista.progresso}/{conquista.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-light rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(conquista.progresso / conquista.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">{conquista.pontos} pontos</span>
                  {conquista.conquistada && <span className="text-sm text-primary font-medium">✓ Conquistada</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ranking */}
        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
            <Star size={20} />
            Ranking Geral
          </h3>

          <div className="space-y-3">
            {ranking.map((user) => (
              <div
                key={user.posicao}
                className={`flex items-center justify-between p-3 rounded-lg ${user.isUser ? "bg-primary-light" : "bg-gray-50"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${user.posicao <= 3 ? "bg-primary text-blue-500" : "bg-gray-light text-gray-dark"
                      }`}
                  >
                    {user.posicao}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${user.isUser ? "bg-primary text-white" : "bg-gray-light text-gray-dark"
                      }`}
                  >
                    {user.avatar}
                  </div>
                  <span className={`font-medium ${user.isUser ? "text-primary" : "text-gray-dark"}`}>{user.nome}</span>
                </div>
                <span className="font-medium text-primary">{user.pontos} pts</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Gamificacao
