"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, User, Mail, Phone, MapPin, GraduationCap, Edit, Save, X } from "lucide-react"

const DadosPessoais = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 99999-9999",
    matricula: "2023001234",
    curso: "Ciência da Computação",
    semestre: "5",
    endereco: "Rua das Flores, 123 - São Paulo, SP",
    bio: "Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e aprendizados.",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // Aqui seria feita a atualização dos dados
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Aqui seria feito o reset dos dados
  }

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-10 flex items-center justify-between px-4">
        <Link to="/dashboard/tendencias" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-primary text-2xl font-medium">Dados Pessoais</h1>
        <button onClick={() => setIsEditing(!isEditing)} className="text-primary">
          {isEditing ? <X size={24} /> : <Edit size={24} />}
        </button>
      </header>

      <main className="pt-16 px-4 py-6">
        <div className="bg-white rounded-lg shadow-card p-6 mb-6">
          <div className="text-center mb-6">
            <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              JS
            </div>
            <h2 className="text-xl font-medium text-primary">{formData.nome}</h2>
            <p className="text-gray-dark">
              {formData.curso} - {formData.semestre}º Semestre
            </p>
          </div>

          {isEditing && (
            <div className="flex justify-center gap-4 mb-6">
              <button onClick={handleSave} className="btn-primary flex items-center gap-2">
                <Save size={16} />
                Salvar
              </button>
              <button onClick={handleCancel} className="btn-secondary flex items-center gap-2">
                <X size={16} />
                Cancelar
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-card p-6 mb-6">
          <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
            <User size={20} />
            Informações Pessoais
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-dark mb-1">Nome Completo</label>
              {isEditing ? (
                <input type="text" name="nome" className="input" value={formData.nome} onChange={handleChange} />
              ) : (
                <p className="text-gray-dark">{formData.nome}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-dark mb-1 flex items-center gap-2">
                <Mail size={16} />
                E-mail
              </label>
              {isEditing ? (
                <input type="email" name="email" className="input" value={formData.email} onChange={handleChange} />
              ) : (
                <p className="text-gray-dark">{formData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-dark mb-1 flex items-center gap-2">
                <Phone size={16} />
                Telefone
              </label>
              {isEditing ? (
                <input type="tel" name="telefone" className="input" value={formData.telefone} onChange={handleChange} />
              ) : (
                <p className="text-gray-dark">{formData.telefone}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-dark mb-1 flex items-center gap-2">
                <MapPin size={16} />
                Endereço
              </label>
              {isEditing ? (
                <textarea name="endereco" className="textarea" value={formData.endereco} onChange={handleChange} />
              ) : (
                <p className="text-gray-dark">{formData.endereco}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-6 mb-6">
          <h3 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
            <GraduationCap size={20} />
            Informações Acadêmicas
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-dark mb-1">Matrícula</label>
              {isEditing ? (
                <input
                  type="text"
                  name="matricula"
                  className="input"
                  value={formData.matricula}
                  onChange={handleChange}
                />
              ) : (
                <p className="text-gray-dark">{formData.matricula}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-dark mb-1">Curso</label>
              {isEditing ? (
                <input type="text" name="curso" className="input" value={formData.curso} onChange={handleChange} />
              ) : (
                <p className="text-gray-dark">{formData.curso}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-dark mb-1">Semestre</label>
              {isEditing ? (
                <select name="semestre" className="select" value={formData.semestre} onChange={handleChange}>
                  <option value="1">1º Semestre</option>
                  <option value="2">2º Semestre</option>
                  <option value="3">3º Semestre</option>
                  <option value="4">4º Semestre</option>
                  <option value="5">5º Semestre</option>
                  <option value="6">6º Semestre</option>
                  <option value="7">7º Semestre</option>
                  <option value="8">8º Semestre</option>
                </select>
              ) : (
                <p className="text-gray-dark">{formData.semestre}º Semestre</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-6">
          <h3 className="text-lg font-medium text-primary mb-4">Biografia</h3>
          {isEditing ? (
            <textarea
              name="bio"
              className="textarea h-24"
              placeholder="Conte um pouco sobre você..."
              value={formData.bio}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-dark">{formData.bio}</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default DadosPessoais
