import type { Metadata } from 'next'
<<<<<<< HEAD
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
=======
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* Inline fallback Navigation component to avoid missing-module error */
function Navigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  )
}

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'Boitumelo Rammego | NOC Technician & IT Professional',
  description: 'A motivated IT professional with 3 years of experience as a Network Operations Center (NOC) Technician. Strong foundation in networking, cloud computing, data analysis, and programming.',
>>>>>>> 7547c8dc35e7397ffcecb9acee4741169b47521d
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
<<<<<<< HEAD
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
=======
    apple: '/apple-icon.png',  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>

        <main id="main-content">
          {children}
        </main>

        <footer>
          {/* optional footer */}
        </footer>
      </body>
    </html>
  )
}
>>>>>>> 7547c8dc35e7397ffcecb9acee4741169b47521d
