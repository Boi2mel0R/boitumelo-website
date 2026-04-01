import { Monitor, Users, Award, ArrowUpRight } from "lucide-react"

const projects = [
  {
    icon: Monitor,
    title: "Cloud-Based Monitoring Dashboard",
    description: "Final year project developing a cloud-based monitoring dashboard for system metrics. Integrating real-time data visualization with cloud infrastructure monitoring capabilities.",
    status: "In Progress",
    tags: ["Cloud", "Monitoring", "Data Visualization"],
  },
]

const leadership = [
  {
    icon: Users,
    title: "Remarkable Future Leaders",
    role: "Founder & Chairperson",
    description: "Founded a youth initiative focused on empowering and developing the next generation of leaders through mentorship, workshops, and community engagement programs.",
  },
  {
    icon: Users,
    title: "Neo Youth Forum",
    role: "Volunteer",
    description: "Active volunteer contributing to youth development programs and community outreach initiatives.",
  },
]

const programs = [
  {
    title: "Junior Achievers South Africa",
    organization: "Investec",
    description: "Selected for junior leadership development program focused on entrepreneurship and financial literacy.",
  },
  {
    title: "Enke: Make Your Mark",
    organization: "Enke",
    description: "Participated in leadership program designed to equip young leaders with skills to drive positive change in their communities.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Projects & Leadership
          </span>
          <div className="h-px w-12 bg-primary mt-2 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Building & leading
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Projects */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Technical Projects</h3>
            {projects.map((project) => (
              <div
                key={project.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {project.status}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Leadership */}
            <h3 className="text-xl font-semibold text-foreground pt-6">Leadership Roles</h3>
            {leadership.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                    <p className="text-primary text-sm mb-2">{item.role}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Leadership Programs</h3>
            {programs.map((program) => (
              <div
                key={program.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h4>
                    <p className="text-primary text-sm mb-2">{program.organization}</p>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media / Connect */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect with me</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Follow my journey and connect with me on social media to see more of my work, 
                leadership initiatives, and professional updates.
              </p>
              <a
                href="https://www.facebook.com/share/1AaCosVTvw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <span>View Facebook Profile</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
