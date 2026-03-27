

const experiences = [
  {
    period: "2022 — Present",
    title: "NOC Technician (Data Centers)",
    company: "RT Systems",
    description: "Monitoring network and server infrastructure across multiple data centers, ensuring 99.9% uptime through proactive incident response and collaboration with engineering teams.",
    skills: ["Network Monitoring", "Incident Management", "Documentation", "Data Center Operations"],
  },
  {
    period: "Nov 2021 — Mar 2022",
    title: "IT Teaching Assistant",
    company: "Tumelo Full Service School",
    description: "Taught computer literacy to students while providing technical support for the school&apos;s IT equipment and network infrastructure.",
    skills: ["Teaching", "Technical Support", "IT Equipment"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Experience
          </span>
          <div className="h-px w-12 bg-primary mt-2 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Where I&apos;ve worked
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative grid md:grid-cols-[200px_1fr] gap-6 p-6 rounded-xl hover:bg-card transition-colors border border-transparent hover:border-border"
            >
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {exp.title}
                    <span className="text-muted-foreground">·</span>
                    <span className="text-primary">{exp.company}</span>
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
