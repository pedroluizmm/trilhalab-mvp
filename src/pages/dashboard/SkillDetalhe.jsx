"use client"

import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Code, Database, Cloud, LineChart, Cpu } from "lucide-react"

const skillsData = {
  1: {
    name: "React",
    icon: <Code size={24} />,
    percentage: 85,
    description:
      "React é uma biblioteca JavaScript para construção de interfaces de usuário. É mantida pelo Facebook e uma comunidade de desenvolvedores individuais e empresas.",
    companies: ["Facebook", "Instagram", "Netflix", "Airbnb"],
    courses: ["React Fundamentals", "Advanced React Patterns", "React with TypeScript"],
  },
  2: {
    name: "Node.js",
    icon: <Database size={24} />,
    percentage: 78,
    description:
      "Node.js é um ambiente de execução JavaScript server-side que permite executar código JavaScript no servidor.",
    companies: ["PayPal", "LinkedIn", "Netflix", "Uber"],
    courses: ["Node.js Basics", "RESTful APIs with Node.js", "Node.js Microservices"],
  },
  3: {
    name: "AWS",
    icon: <Cloud size={24} />,
    percentage: 72,
    description:
      "Amazon Web Services (AWS) é uma plataforma de serviços de computação em nuvem que oferece poder computacional, armazenamento de banco de dados, entrega de conteúdo e outras funcionalidades.",
    companies: ["Netflix", "Airbnb", "Lyft", "Slack"],
    courses: ["AWS Fundamentals", "AWS Solutions Architect", "AWS DevOps"],
  },
  4: {
    name: "Data Science",
    icon: <LineChart size={24} />,
    percentage: 68,
    description:
      "Data Science é um campo interdisciplinar que usa métodos científicos, processos, algoritmos e sistemas para extrair conhecimento e insights de dados estruturados e não estruturados.",
    companies: ["Google", "Facebook", "Amazon", "Microsoft"],
    courses: ["Introduction to Data Science", "Machine Learning for Data Science", "Big Data Analytics"],
  },
  5: {
    name: "Machine Learning",
    icon: <Cpu size={24} />,
    percentage: 65,
    description:
      "Machine Learning é um subcampo da inteligência artificial que dá aos computadores a capacidade de aprender sem serem explicitamente programados.",
    companies: ["Google", "Microsoft", "Amazon", "Tesla"],
    courses: ["Machine Learning Basics", "Deep Learning", "Natural Language Processing"],
  },
}

const SkillDetalhe = () => {
  const { skillId } = useParams()
  const skill = skillsData[skillId]

  if (!skill) {
    return <div>Skill não encontrada</div>
  }

  return (
    <div className="pb-4 mt-6">
      <div className="flex items-center mb-6">
        <Link to="/dashboard/tendencias" className="text-primary mr-4">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-medium text-primary">{skill.name}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-card p-6 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary-light rounded-md flex items-center justify-center w-12 h-12">{skill.icon}</div>
          <div>
            <h2 className="font-medium text-primary">{skill.name}</h2>
            <div className="w-full bg-gray-light rounded-full h-2 mt-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
            </div>
            <p className="text-sm text-gray-dark mt-1">{skill.percentage}% em alta</p>
          </div>
        </div>

        <p className="text-gray-dark mb-4">{skill.description}</p>

        <div className="mb-4">
          <h3 className="font-medium text-primary mb-2">Empresas que utilizam:</h3>
          <div className="flex flex-wrap gap-2">
            {skill.companies.map((company, index) => (
              <span key={index} className="badge-info">
                {company}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-medium text-primary mb-2">Cursos recomendados:</h3>
          <ul className="list-disc pl-5">
            {skill.courses.map((course, index) => (
              <li key={index} className="text-gray-dark">
                {course}
              </li>
            ))}
          </ul>
        </div>

        <Link to="/dashboard/desafios" className="btn-primary w-full">
          Ver Desafios
        </Link>
      </div>
    </div>
  )
}

export default SkillDetalhe
