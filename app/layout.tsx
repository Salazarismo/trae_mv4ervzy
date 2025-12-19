import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Portfólio Técnico',
  description: 'Portfolio com Next.js 14',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="min-h-dvh bg-neutral-950 text-neutral-100 antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
