import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navigation from '@/components/navigation'
import ThemeProvider from '@/components/theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Boitumelo Rammego - Portfolio',
  description: 'NOC Technician & IT Educator Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}