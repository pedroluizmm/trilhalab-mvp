"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Award, Download, Eye, Calendar, Plus } from "lucide-react"

const certificadosData = [
  {
    id: 1,
    nome: "Certificado React Fundamentals",
    descricao: "Conclusão do curso de fundamentos do React",
    dataEmissao: "15/05/2023",
    instituicao: "TrilhaLab",
    categoria: "Frontend",
    status: "Válido",
    arquivo: "certificado-react-fundamentals.pdf",
  },
  {
    id: 2,
    nome: "Certificado Node.js Básico",
    descricao: "Conclusão do curso básico de Node.js",
    dataEmissao: "20/04/2023",
    instituicao: "TrilhaLab",
    categoria: "Backend",
    status: "Válido",
    arquivo: "certificado-nodejs-basico.pdf",
  },
  {
    id: 3,
    nome: "Participação Hackathon 2023",
    descricao: "Participação no Hackathon TrilhaLab 2023",
    dataEmissao: "10/03/2023",
    instituicao: "TrilhaLab",
    categoria: "Evento",
    status: "Válido",
    arquivo: "certificado-hackathon-2023.pdf",
  },
  {
    id: 4,
    nome: "AWS Cloud Practitioner",
    descricao: "Certificação AWS Cloud Practitioner",
    dataEmissao: "05/02/2023",
    instituicao: "Amazon Web Services",
    categoria: "Cloud",
    status: "Válido",
    arquivo: "aws-cloud-practitioner.pdf",
  },
]

const Certificados = () => {
  const [categoria, setCategoria] = useState("")

  const certificadosFiltrados = certificadosData.filter((cert) => {
    return categoria === "" || cert.categoria === categoria
  })

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4">
        <Link to="/dashboard/tendencias" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-primary text-2xl font-medium">Certificados</h1>
        <button className="text-primary">
          <Plus size={24} />
        </button>
      </header>

      <main className="pt-16 px-4 py-6">
        <div className="bg-white rounded-lg shadow-card p-4 mb-6">
          <div className="flex items-center gap-4">
            <Award size={20} className="text-primary" />
            <div className="flex-1">
              <select className="select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Todas as categorias</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Cloud">Cloud</option>
                <option value="Evento">Eventos</option>
                <option value="Certificação">Certificações</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {certificadosFiltrados.map((certificado) => (
            <div key={certificado.id} className="bg-white rounded-lg shadow-card p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-light rounded-md p-2">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">{certificado.nome}</h3>
                    <p className="text-sm text-gray-dark">{certificado.descricao}</p>
                  </div>
                </div>
                <span className="badge-info">{certificado.categoria}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm text-gray-dark">Emitido em: {certificado.dataEmissao}</span>
                </div>
                <div className="text-sm text-gray-dark">
                  <strong>Instituição:</strong> {certificado.instituicao}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className={`badge-${certificado.status === "Válido" ? "info" : "warning"}`}>
                  {certificado.status}
                </span>
                <div className="flex gap-2">
                  <button className="btn-secondary flex items-center gap-2">
                    <Eye size={16} />
                    <span>Visualizar</span>
                  </button>
                  <button className="btn-primary flex items-center gap-2">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {certificadosFiltrados.length === 0 && (
            <div className="bg-white rounded-lg shadow-card p-6 text-center">
              <Award size={48} className="text-gray-medium mx-auto mb-4" />
              <p className="text-gray-medium mb-4">
                {categoria ? "Nenhum certificado encontrado nesta categoria." : "Você ainda não possui certificados."}
              </p>
              <Link to="/dashboard/desafios" className="btn-primary">
                Participar de Desafios
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Certificados
