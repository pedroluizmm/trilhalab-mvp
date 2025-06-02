import { Link } from "react-router-dom"
import { Code, Database, Cloud, LineChart, Cpu } from "lucide-react"

const skillsData = [
  { id: 1, name: "React", icon: <Code size={24} />, percentage: 85 },
  { id: 2, name: "Node.js", icon: <Database size={24} />, percentage: 78 },
  { id: 3, name: "AWS", icon: <Cloud size={24} />, percentage: 72 },
  { id: 4, name: "Data Science", icon: <LineChart size={24} />, percentage: 68 },
  { id: 5, name: "Machine Learning", icon: <Cpu size={24} />, percentage: 65 },
]

const Tendencias = () => {
  return (
    <div className="pb-4">
      <h1 className="text-2xl font-medium text-primary mt-6 mb-6">Tendências</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map((skill) => (
          <Link
            key={skill.id}
            to={`/dashboard/tendencias/${skill.id}`}
            className="bg-white rounded-lg shadow-card p-4 flex items-center gap-4 hover:shadow-lg transition-shadow"
          >
            <div className="bg-primary-light rounded-md flex items-center justify-center w-12 h-12">{skill.icon}</div>
            <div>
              <h3 className="font-medium text-primary">{skill.name}</h3>
              <div className="w-full bg-gray-light rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
              </div>
              <p className="text-sm text-gray-dark mt-1">{skill.percentage}% em alta</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tendencias
