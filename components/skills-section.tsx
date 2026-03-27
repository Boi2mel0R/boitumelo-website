import { 
  Server, 
  Cloud, 
  Code, 
  Database, 
  BarChart3, 
  Terminal,
  Network,
  Shield
} from "lucide-react"

const skillCategories = [
  {
    title: "Networking & Monitoring",
    icon: Network,
    skills: ["NOC Operations", "Data Center Support", "Network Diagnostics", "Ticketing Systems", "Incident Management"],
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform"],
  },
  {
    title: "Programming & Databases",
    icon: Code,
    skills: ["Python", "SQL", "Java", "C++", "MySQL"],
  },
  {
    title: "Data Tools",
    icon: BarChart3,
    skills: ["Power BI", "Tableau", "Microsoft Excel", "Data Visualization"],
  },
  {
    title: "Systems & Tools",
    icon: Terminal,
    skills: ["Git Version Control", "Linux/Unix CLI", "Hardware Troubleshooting"],
  },
  {
    title: "Monitoring Tools",
    icon: Server,
    skills: ["AKCP", "TMs", "Netbotz", "SNMP"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
          <div className="h-px w-12 bg-primary mt-2 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Technical expertise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-full bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
