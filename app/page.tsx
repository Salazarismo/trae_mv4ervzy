import { Button, buttonVariants } from '@/components/ui/Button'
import Link from 'next/link'
import { Hero } from '@/components/Hero'

export default function Page() {
  return (
    <div className="py-16 animate-fade-in">
      <h1 className="text-3xl font-semibold">Portfólio Técnico</h1>
      <p className="mt-4 text-sm text-neutral-300">Next.js 14 • App Router • Tailwind • MDX</p>
      <div className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 p-6">
        <Hero />
        <p className="mt-4">Home mínima para validar deploy.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/projetos" className={buttonVariants({ variant: 'primary' })} aria-label="Ver projetos">Ver projetos</Link>
          <Link href="/contato" className={buttonVariants({ variant: 'secondary' })} aria-label="Entrar em contato">Entrar em contato</Link>
        </div>
      </div>
    </div>
  )
}
