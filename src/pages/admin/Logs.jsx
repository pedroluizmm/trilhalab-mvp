"use client"

import { useState } from "react"
import { Search, Calendar, User, Activity, AlertCircle, CheckCircle, XCircle } from "lucide-react"

const logsData = [
  {
    id: 1,
    timestamp: "2023-06-01 14:30:25",
    usuario: "João Silva",
    acao: "Login realizado",
    tipo: "Autenticação",
    nivel: "Info",
    ip: "192.168.1.100",
    detalhes: "Login bem-sucedido via email",
  },
  {
    id: 2,
    timestamp: "2023-06-01 14:25:10",
    usuario: "Maria Oliveira",
    acao: "Desafio submetido",
    tipo: "Desafio",
    nivel: "Info",
    ip: "192.168.1.101",
    detalhes: "Submissão do desafio 'Criar API RESTful'",
  },
  {
    id: 3,
    timestamp: "2023-06-01 14:20:45",
    usuario: "Sistema",
    acao: "Falha na autenticação",
    tipo: "Segurança",
    nivel: "Warning",
    ip: "192.168.1.102",
    detalhes: "Tentativa de login com credenciais inválidas",
  },
  {
    id: 4,
    timestamp: "2023-06-01 14:15:30",
    usuario: "Carlos Santos",
    acao: "Evento criado",
    tipo: "Evento",
    nivel: "Info",
    ip: "192.168.1.103",
    detalhes: "Criação do evento 'Workshop React'",
  },
  {
    id: 5,
    timestamp: "2023-06-01 14:10:15",
    usuario: "Ana Souza",
    acao: "Grupo criado",
    tipo: "Grupo",
    nivel: "Info",
    ip: "192.168.1.104",
    detalhes: "Criação do grupo 'React Developers'",
  },
  {
    id: 6,
    timestamp: "2023-06-01 14:05:00",
    usuario: "Sistema",
    acao: "Erro no servidor",
    tipo: "Sistema",
    nivel: "Error",
    ip: "localhost",
    detalhes: "Erro 500 - Falha na conexão com banco de dados",
  },
]

const Logs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [tipoFilter, setTipoFilter] = useState("")
  const [nivelFilter, setNivelFilter] = useState("")
  const [dataFilter, setDataFilter] = useState("")

  const logsFiltrados = logsData.filter((log) => {
    const matchesSearch =
      log.usuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.acao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.detalhes.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTipo = tipoFilter === "" || log.tipo === tipoFilter
    const matchesNivel = nivelFilter === "" || log.nivel === nivelFilter
    const matchesData = dataFilter === "" || log.timestamp.includes(dataFilter)
    return matchesSearch && matchesTipo && matchesNivel && matchesData
  })

  const getIconByNivel = (nivel) => {
    switch (nivel) {
      case "Info":
        return <CheckCircle size={16} className="text-blue-500" />
      case "Warning":
        return <AlertCircle size={16} className="text-yellow-500" />
      case "Error":
        return <XCircle size={16} className="text-red-500" />
      default:
        return <Activity size={16} className="text-gray-500" />
    }
  }

  const getBadgeClass = (nivel) => {
    switch (nivel) {
      case "Info":
        return "badge-info"
      case "Warning":
        return "badge-warning"
      case "Error":
        return "badge-error"
      default:
        return "badge-info"
    }
  }

  return (
    <div className="pb-4">
      <h1 className="text-2xl font-medium text-primary mb-6">Logs do Sistema</h1>

      <div className="bg-white rounded-lg shadow-card p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-3 text-gray-medium" />
            <input
              type="text"
              placeholder="Buscar logs..."
              className="input pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="select" value={tipoFilter} onChange={(e) => setTipoFilter(e.target.value)}>
            <option value="">Todos os tipos</option>
            <option value="Autenticação">Autenticação</option>
            <option value="Desafio">Desafio</option>
            <option value="Evento">Evento</option>
            <option value="Grupo">Grupo</option>
            <option value="Sistema">Sistema</option>
            <option value="Segurança">Segurança</option>
          </select>
          <select className="select" value={nivelFilter} onChange={(e) => setNivelFilter(e.target.value)}>
            <option value="">Todos os níveis</option>
            <option value="Info">Info</option>
            <option value="Warning">Warning</option>
            <option value="Error">Error</option>
          </select>
          <input type="date" className="input" value={dataFilter} onChange={(e) => setDataFilter(e.target.value)} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Timestamp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Ação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">
                  Nível
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-dark uppercase tracking-wider">IP</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-light">
              {logsFiltrados.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span className="text-sm text-gray-dark">{log.timestamp}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-primary" />
                      <span className="text-sm text-gray-dark">{log.usuario}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-dark">{log.acao}</div>
                    <div className="text-xs text-gray-medium">{log.detalhes}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="badge-info">{log.tipo}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getIconByNivel(log.nivel)}
                      <span className={getBadgeClass(log.nivel)}>{log.nivel}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-dark">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {logsFiltrados.length === 0 && (
          <div className="text-center py-8">
            <Activity size={48} className="text-gray-medium mx-auto mb-4" />
            <p className="text-gray-medium">Nenhum log encontrado.</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-gray-dark">
          Mostrando {logsFiltrados.length} de {logsData.length} logs
        </p>
        <div className="flex gap-2">
          <button className="btn-secondary">Anterior</button>
          <button className="btn-secondary">Próximo</button>
        </div>
      </div>
    </div>
  )
}

export default Logs
