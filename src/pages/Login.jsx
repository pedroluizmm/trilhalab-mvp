"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-center text-primary text-2xl font-medium mb-8">TrilhaLab</h1>

        <div className="bg-white rounded-lg shadow-card p-6">
          <h2 className="text-primary text-xl font-medium mb-6">Login</h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-dark mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-dark mb-1">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-right">
              <Link to="/login" className="text-primary text-sm">
                Esqueci minha senha?
              </Link>
            </div>

            <Link to="/dashboard/tendencias" className="btn-primary w-full">
              Entrar
            </Link>

            <div className="text-center mt-4">
              <span className="text-gray-dark">Não tem uma conta? </span>
              <Link to="/cadastro" className="text-primary">
                Cadastrar-se
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
