<<<<<<< HEAD
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Server,
  Cloud,
  Code,
  Users,
  GraduationCap,
  Award,
  Network,
  Database,
  Monitor,
  Wrench,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Boitumelo.
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</Link>
            <Link href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</Link>
            <Link href="#education" className="text-foreground hover:text-primary transition-colors">Education</Link>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo on the left */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Boitumelo Rammego"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Hero content */}
            <div className="text-center md:text-left space-y-6 flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Johannesburg, South Africa</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-primary">Hi, I&apos;m </span>
                <span className="text-foreground">Boitumelo</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                NOC Technician &amp; IT Professional
              </p>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Passionate about building and maintaining critical data center infrastructure. I love cloud computing, networking, and empowering the next generation of tech leaders.
              </p>

              {/* LinkedIn Button */}
              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="#contact">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Link href="#about" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  Learn more about me
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </div>

              {/* LinkedIn Social */}
              <div className="flex items-center justify-center md:justify-start pt-4">
                <a
                  href="https://www.linkedin.com/in/boitumelo-rammego-0883591b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                A motivated IT professional with a passion for innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m a detail-oriented Bachelor of Science in Information Technology graduate with 3 years of practical experience as a Network Operations Center (NOC) Technician. My work involves monitoring, troubleshooting, and maintaining critical data center infrastructure to ensure high availability and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond my technical work, I&apos;m deeply committed to youth empowerment. As the founder and chairperson of &quot;Remarkable Future Leaders,&quot; I work to inspire and develop the next generation of leaders. I also volunteer at Neo Youth Forum and have participated in programs like Junior Achievers South Africa and Enke: Make Your Mark.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently seeking opportunities to leverage my academic knowledge and hands-on experience in a challenging IT, DevOps, or Cloud Support role.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <Server className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-primary text-lg">Data Center Operations</h3>
                  <p className="text-muted-foreground text-sm mt-2">3+ years managing critical infrastructure with 99.9% uptime</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <Cloud className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-primary text-lg">Cloud Platforms</h3>
                  <p className="text-muted-foreground text-sm mt-2">Hands-on experience with AWS, Azure, and Google Cloud</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <Code className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-primary text-lg">Programming</h3>
                  <p className="text-muted-foreground text-sm mt-2">Proficient in Python, SQL, Java, and C++</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-primary text-lg">Leadership</h3>
                  <p className="text-muted-foreground text-sm mt-2">Founder of Remarkable Future Leaders youth initiative</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Experience</span>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Where I&apos;ve worked</h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-muted-foreground md:w-48 flex-shrink-0">
                2022 - Present
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  NOC Technician (Data Centers) <span className="text-primary">· RT Systems</span>
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">Network Monitoring</span>
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">Incident Management</span>
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">Documentation</span>
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">Data Center Operations</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-muted-foreground md:w-48 flex-shrink-0">
                Nov 2021 - Mar 2022
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  IT Teaching Assistant <span className="text-primary">· Tumelo Full Service School</span>
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">Computer Literacy</span>
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">Technical Support</span>
                  <span className="px-3 py-1 bg-card rounded-full text-sm text-muted-foreground">IT Equipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills</span>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Technical expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Network className="h-8 w-8 text-primary" />
                  <h3 className="font-bold text-primary">Networking &amp; Monitoring</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">NOC Operations</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Data Center Support</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Network Diagnostics</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Ticketing Systems</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Incident Management</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="h-8 w-8 text-primary" />
                  <h3 className="font-bold text-primary">Cloud Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Amazon Web Services (AWS)</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Microsoft Azure</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Google Cloud Platform</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="h-8 w-8 text-primary" />
                  <h3 className="font-bold text-primary">Programming &amp; Databases</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Python</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">SQL</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Java</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">C++</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">MySQL</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-8 w-8 text-primary" />
                  <h3 className="font-bold text-primary">Data Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Power BI</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Tableau</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Excel</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Monitor className="h-8 w-8 text-primary" />
                  <h3 className="font-bold text-primary">Systems &amp; Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Git Version Control</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Linux/Unix CLI</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                  <h3 className="font-bold text-primary">Monitoring Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">AKCP</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">TMs</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Netbotz</span>
                  <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Hardware Troubleshooting</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Education</span>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Academic background</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-10 w-10 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-muted-foreground text-sm mb-2">2023 - 2025</div>
                    <h3 className="font-bold text-foreground text-xl">Bachelor of Science in Information Technology</h3>
                    <p className="text-primary mt-1">Richfield Graduate Institute of Technology (Pty) Ltd</p>
                    
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary">70.09%</div>
                        <div className="text-xs text-muted-foreground">Final Year Average</div>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-foreground">395</div>
                        <div className="text-xs text-muted-foreground">Credits</div>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-primary">NQF 7</div>
                        <div className="text-xs text-muted-foreground">Level</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-foreground mb-3">Relevant Coursework</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between"><span>Programming</span><span className="text-primary font-semibold">83%</span></div>
                        <div className="flex justify-between"><span>Work Integrated Learning</span><span className="text-primary font-semibold">79%</span></div>
                        <div className="flex justify-between"><span>Big Data &amp; IoT</span><span className="text-primary font-semibold">74%</span></div>
                        <div className="flex justify-between"><span>Machine Learning</span><span className="text-primary font-semibold">73%</span></div>
                        <div className="flex justify-between"><span>Statistics for Data Science</span><span className="text-primary font-semibold">73%</span></div>
                        <div className="flex justify-between"><span>Autonomous Systems</span><span className="text-primary font-semibold">72%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-muted-foreground text-sm mb-2">2021</div>
                      <h3 className="font-bold text-foreground text-xl">Introductory Certificate in Python Programming</h3>
                      <p className="text-primary mt-1">WeThinkCode_</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-4">Key Achievements</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Achieved 83% in Programming - highest course grade
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Strong performance in Machine Learning (73%) and AI (70%)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Completed Work Integrated Learning with 79%
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Solid foundation in Cloud Computing and Big Data technologies
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Projects &amp; Leadership</span>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Building &amp; leading</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Technical Projects</h3>
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Monitor className="h-8 w-8 text-primary" />
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">In Progress</span>
                  </div>
                  <h4 className="font-bold text-foreground text-xl">Cloud-Based Monitoring Dashboard</h4>
                  <p className="text-muted-foreground mt-2">
                    Final year project developing a cloud-based monitoring dashboard for system metrics. Integrating real-time data visualization with cloud infrastructure monitoring capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Cloud</span>
                    <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Monitoring</span>
                    <span className="px-3 py-1 bg-background rounded-lg text-sm text-foreground">Data Visualization</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Leadership Programs</h3>
              <div className="space-y-4">
                <Card className="bg-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground">Junior Achievers South Africa</h4>
                        <p className="text-primary text-sm">Investec</p>
                        <p className="text-muted-foreground text-sm mt-2">Selected for junior leadership program focusing on entrepreneurship and financial literacy.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Award className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground">Enke: Make Your Mark</h4>
                        <p className="text-primary text-sm">Enke</p>
                        <p className="text-muted-foreground text-sm mt-2">Participated in leadership program empowering young leaders with skills to drive change.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-primary mb-6">Leadership Roles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground">Founder &amp; Chairperson</h4>
                  <p className="text-primary">Remarkable Future Leaders</p>
                  <p className="text-muted-foreground text-sm mt-2">Youth initiative focused on inspiring and developing the next generation of leaders.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground">Volunteer</h4>
                  <p className="text-primary">Neo Youth Forum</p>
                  <p className="text-muted-foreground text-sm mt-2">Active volunteer supporting youth development programs and community initiatives.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="mb-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
            <div className="w-16 h-1 bg-primary mt-2"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Let&apos;s connect</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            I&apos;m currently looking for new opportunities in IT, DevOps, or Cloud Support roles. Feel free to reach out if you&apos;d like to discuss a project or just say hello!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-primary text-lg">Email</h3>
                <a href="mailto:boitumelor5@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  boitumelor5@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-primary text-lg">Phone</h3>
                <a href="tel:+27826198299" className="text-muted-foreground hover:text-foreground transition-colors">
                  +27 82 619 8299
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg group hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-primary text-lg">Location</h3>
                <p className="text-muted-foreground">Johannesburg, South Africa</p>
              </CardContent>
            </Card>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-primary mb-2">Find me online</h3>
                <p className="text-muted-foreground text-sm">Connect with me on LinkedIn</p>
              </div>
              <Button asChild variant="outline" size="lg" className="gap-2 border-foreground text-foreground hover:bg-accent">
                <a
                  href="https://www.linkedin.com/in/boitumelo-rammego-0883591b3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            &copy; 2026 Boitumelo Rammego. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            References available upon request
          </p>
        </div>
      </footer>
    </div>
=======
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
>>>>>>> 7547c8dc35e7397ffcecb9acee4741169b47521d
  )
}
