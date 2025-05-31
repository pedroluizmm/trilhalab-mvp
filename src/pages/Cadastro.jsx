"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    matricula: "",
    curso: "",
    semestre: "",
    endereco: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4">
        <Link to="/login" className="text-primary">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-primary text-2xl font-medium">Cadastro</h1>
        <div className="w-6"></div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-card p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-gray-dark mb-1">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="input"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-dark mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="senha" className="block text-gray-dark mb-1">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="input"
                placeholder="********"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-gray-dark mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="input"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="matricula" className="block text-gray-dark mb-1">
                Matrícula
              </label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                className="input"
                placeholder="Sua matrícula"
                value={formData.matricula}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="curso" className="block text-gray-dark mb-1">
                Curso
              </label>
              <input
                type="text"
                id="curso"
                name="curso"
                className="input"
                placeholder="Seu curso"
                value={formData.curso}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="semestre" className="block text-gray-dark mb-1">
                Semestre
              </label>
              <select
                id="semestre"
                name="semestre"
                className="select"
                value={formData.semestre}
                onChange={handleChange}
              >
                <option value="">Selecione o semestre</option>
                <option value="1">1º Semestre</option>
                <option value="2">2º Semestre</option>
                <option value="3">3º Semestre</option>
                <option value="4">4º Semestre</option>
                <option value="5">5º Semestre</option>
                <option value="6">6º Semestre</option>
                <option value="7">7º Semestre</option>
                <option value="8">8º Semestre</option>
              </select>
            </div>

            <div>
              <label htmlFor="endereco" className="block text-gray-dark mb-1">
                Endereço
              </label>
              <textarea
                id="endereco"
                name="endereco"
                className="textarea"
                placeholder="Seu endereço completo"
                value={formData.endereco}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-dark mb-1">Foto de perfil</label>
              <input
                type="file"
                className="block w-full text-sm text-gray-dark
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-primary file:text-white
                  hover:file:bg-primary/90"
              />
            </div>

            <div>
              <label className="block text-gray-dark mb-1">Currículo</label>
              <input
                type="file"
                className="block w-full text-sm text-gray-dark
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-primary file:text-white
                  hover:file:bg-primary/90"
              />
            </div>

            <Link to="/login" className="btn-primary w-full">
              Cadastrar
            </Link>

            <div className="text-center mt-4">
              <span className="text-gray-dark">Já tem uma conta? </span>
              <Link to="/login" className="text-primary">
                Fazer login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
