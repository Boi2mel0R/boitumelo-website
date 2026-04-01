import { Server, Cloud, Code, Users } from "lucide-react"

const highlights = [
  {
    icon: Server,
    title: "Data Center Operations",
    description: "3+ years managing critical infrastructure with 99.9% uptime",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "Hands-on experience with AWS, Azure, and Google Cloud",
  },
  {
    icon: Code,
    title: "Programming",
    description: "Proficient in Python, SQL, Java, and C++",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Founder of Remarkable Future Leaders youth initiative",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
              <div className="h-px w-12 bg-primary mt-2" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              A motivated IT professional with a passion for innovation
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a detail-oriented Bachelor of Science in Information Technology graduate 
                with 3 years of practical experience as a Network Operations Center (NOC) Technician. 
                My work involves monitoring, troubleshooting, and maintaining critical data center 
                infrastructure to ensure high availability and performance.
              </p>
              <p>
                Beyond my technical work, I&apos;m deeply committed to youth empowerment. As the founder 
                and chairperson of &quot;Remarkable Future Leaders,&quot; I work to inspire and develop the 
                next generation of leaders. I also volunteer at Neo Youth Forum and have participated 
                in programs like Junior Achievers South Africa and Enke: Make Your Mark.
              </p>
              <p>
                I&apos;m currently seeking opportunities to leverage my academic knowledge and hands-on 
                experience in a challenging IT, DevOps, or Cloud Support role.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
