import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Portfólio Técnico',
  description: 'Portfolio com Next.js 14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`min-h-dvh bg-neutral-950 text-neutral-100 antialiased ${inter.className}`}>
        <a href="#content" className="skip-to-content">Ir para o conteúdo</a>
        <Header />
        <main id="content" className="container mx-auto max-w-3xl px-6">
          {children}
        </main>
      </body>
    </html>
  )
}
