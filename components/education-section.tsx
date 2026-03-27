import { GraduationCap, Award } from "lucide-react"

const courses = [
  { name: "Programming", grade: "83%" },
  { name: "Work Integrated Learning", grade: "79%" },
  { name: "Big Data & IoT", grade: "74%" },
  { name: "Machine Learning", grade: "73%" },
  { name: "Statistics for Data Science", grade: "73%" },
  { name: "Autonomous Systems & Robotics", grade: "72%" },
  { name: "Data Manipulation & Visualization", grade: "71%" },
  { name: "Artificial Intelligence", grade: "70%" },
  { name: "Cloud Computing", grade: "70%" },
  { name: "Database Systems", grade: "68%" },
  { name: "Cyber Security", grade: "67%" },
  { name: "Networks", grade: "63%" },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Education
          </span>
          <div className="h-px w-12 bg-primary mt-2 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Academic background
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Degree */}
          <div className="p-8 rounded-xl bg-card border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-1">2023 — 2025</p>
                <h3 className="text-xl font-bold text-foreground">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-primary">Richfield Graduate Institute of Technology (Pty) Ltd</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-2xl font-bold text-primary">70.09%</p>
                <p className="text-xs text-muted-foreground">Final Year Average</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-2xl font-bold text-foreground">395</p>
                <p className="text-xs text-muted-foreground">Credits</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary">
                <p className="text-2xl font-bold text-foreground">NQF 7</p>
                <p className="text-xs text-muted-foreground">Level</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-2 gap-2">
                {courses.map((course) => (
                  <div
                    key={course.name}
                    className="flex justify-between items-center p-2 rounded bg-secondary/50 text-sm"
                  >
                    <span className="text-muted-foreground truncate mr-2">{course.name}</span>
                    <span className="text-primary font-medium shrink-0">{course.grade}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">2021</p>
                  <h3 className="text-lg font-bold text-foreground">
                    Introductory Certificate in Python Programming
                  </h3>
                  <p className="text-primary">WeThinkCode_</p>
                </div>
              </div>
            </div>

            {/* Key achievements */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h4 className="text-sm font-semibold text-foreground mb-4">Key Achievements</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Achieved 83% in Programming - highest course grade</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Strong performance in Machine Learning (73%) and AI (70%)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Completed Work Integrated Learning with 79%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Solid foundation in Cloud Computing and Big Data technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
