import { Button } from '@/components/ui/button'
import { Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Boi2mel0R
        </Link>
        
        <div className="flex items-center gap-4">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          
          <a
            href="https://www.linkedin.com/in/boitumelo-rammego-0883591b3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-[#0A66C2] text-white rounded-md hover:bg-[#0A66C2]/80 transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}