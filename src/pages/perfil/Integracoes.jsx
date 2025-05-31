"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, Linkedin, Globe, LinkIcon, Plus, Settings } from "lucide-react"

const integracoesData = [
  {
    id: 1,
    nome: "GitHub",
    icone: <Github size={20} />,
    conectado: true,
    usuario: "joaosilva",
    url: "https://github.com/joaosilva",
    descricao: "Conecte seu GitHub para mostrar seus projetos",
  },
  {
    id: 2,
    nome: "LinkedIn",
    icone: <Linkedin size={20} />,
    conectado: true,
    usuario: "João Silva",
    url: "https://linkedin.com/in/joaosilva",
    descricao: "Conecte seu LinkedIn para networking profissional",
  },
  {
    id: 3,
    nome: "Portfolio",
    icone: <Globe size={20} />,
    conectado: false,
    usuario: "",
    url: "",
    descricao: "Adicione o link do seu portfolio pessoal",
  },
  {
    id: 4,
    nome: "Website Pessoal",
    icone: <LinkIcon size={20} />,
    conectado: false,
    usuario: "",
    url: "",
    descricao: "Adicione o link do seu website ou blog",
  },
]

const Integracoes = () => {
  const [integracoes, setIntegracoes] = useState(integracoesData)
  const [editando, setEditando] = useState(null)
  const [novoLink, setNovoLink] = useState("")

  const handleConectar = (id) => {
    setEditando(id)
  }

  const handleDesconectar = (id) => {
    setIntegracoes((prev) =>
      prev.map((int) => (int.id === id ? { ...int, conectado: false, usuario: "", url: "" } : int)),
    )
  }

  const handleSalvar = (id) => {
    setIntegracoes((prev) =>
      prev.map((int) =>
        int.id === id ? { ...int, conectado: true, url: novoLink, usuario: novoLink.split("/").pop() } : int,
      ),
    )
    setEditando(null)
    setNovoLink("")
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4">
        <Link to="/dashboard/tendencias" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-primary text-2xl font-medium">Integrações</h1>
        <button className="text-primary">
          <Plus size={24} />
        </button>
      </header>

      <main className="pt-16 px-4 py-6">
        <div className="bg-white rounded-lg shadow-card p-6 mb-6">
          <h2 className="text-lg font-medium text-primary mb-2">Conecte suas contas</h2>
          <p className="text-gray-dark">
            Conecte suas contas para mostrar seus projetos e facilitar o networking com outros desenvolvedores.
          </p>
        </div>

        <div className="space-y-4">
          {integracoes.map((integracao) => (
            <div key={integracao.id} className="bg-white rounded-lg shadow-card p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-light rounded-md p-2">{integracao.icone}</div>
                  <div>
                    <h3 className="font-medium text-primary">{integracao.nome}</h3>
                    <p className="text-sm text-gray-dark">{integracao.descricao}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {integracao.conectado && (
                    <button onClick={() => handleDesconectar(integracao.id)} className="text-gray-medium">
                      <Settings size={16} />
                    </button>
                  )}
                  <span className={`badge-${integracao.conectado ? "info" : "warning"}`}>
                    {integracao.conectado ? "Conectado" : "Desconectado"}
                  </span>
                </div>
              </div>

              {integracao.conectado && editando !== integracao.id && (
                <div className="mb-3">
                  <p className="text-sm text-gray-dark mb-1">
                    <strong>Usuário:</strong> {integracao.usuario}
                  </p>
                  <a
                    href={integracao.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    {integracao.url}
                  </a>
                </div>
              )}

              {editando === integracao.id && (
                <div className="mb-3">
                  <label className="block text-gray-dark mb-1">URL do perfil:</label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      className="input flex-1"
                      placeholder={`https://${integracao.nome.toLowerCase()}.com/seu-usuario`}
                      value={novoLink}
                      onChange={(e) => setNovoLink(e.target.value)}
                    />
                    <button onClick={() => handleSalvar(integracao.id)} className="btn-primary">
                      Salvar
                    </button>
                    <button onClick={() => setEditando(null)} className="btn-secondary">
                      Cancelar
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-end">
                {!integracao.conectado && editando !== integracao.id && (
                  <button onClick={() => handleConectar(integracao.id)} className="btn-primary">
                    Conectar
                  </button>
                )}
                {integracao.conectado && editando !== integracao.id && (
                  <button onClick={() => setEditando(integracao.id)} className="btn-secondary">
                    Editar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-card p-6 mt-6">
          <h3 className="text-lg font-medium text-primary mb-4">Privacidade</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-gray-dark">Mostrar perfil GitHub no meu perfil público</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-gray-dark">Mostrar perfil LinkedIn no meu perfil público</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-dark">Permitir que outros vejam meus projetos</span>
            </label>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Integracoes