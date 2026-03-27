import { ArrowDown, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>Johannesburg, South Africa</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
            Hi, I&apos;m <span className="text-primary">Boitumelo</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            NOC Technician & IT Professional
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about building and maintaining critical data center infrastructure.
            I love cloud computing, networking, and empowering the next generation of tech leaders.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://www.instagram.com/other_boitumelo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@other_boitumelo_2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1AaCosVTvw/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn more about me
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
