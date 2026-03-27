import { Mail, Phone, MapPin, ArrowUpRight, Facebook, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <div className="h-px w-12 bg-primary mt-2 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Let&apos;s connect
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            I&apos;m currently looking for new opportunities in IT, DevOps, or Cloud Support roles. 
            Feel free to reach out if you&apos;d like to discuss a project or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <a
            href="mailto:boitumelor5@gmail.com"
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">boitumelor5@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+27826198299"
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">+27 82 619 8299</p>
          </a>

          {/* Location */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="p-3 rounded-xl bg-primary/10 w-fit">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-1">Location</h3>
            <p className="text-muted-foreground text-sm">Johannesburg, South Africa</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Find me online</h3>
              <p className="text-muted-foreground text-sm">
                Connect with me on social media
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/other_boitumelo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@other_boitumelo_2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
              <a
                href="https://www.facebook.com/share/1AaCosVTvw/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Boitumelo Rammego. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            References available upon request
          </p>
        </footer>
      </div>
    </section>
  )
}
