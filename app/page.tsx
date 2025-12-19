import { ImageWithFallback } from '@/components/ui/ImageWithFallback'
import { Button } from '@/components/ui/Button'

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Portfólio Técnico</h1>
      <p className="mt-4 text-sm text-neutral-300">
        Next.js 14 • App Router • Tailwind • MDX
      </p>
      <div className="mt-8 rounded-lg border border-neutral-800 bg-neutral-900 p-6">
        <ImageWithFallback src="/images/hero.svg" alt="Hero" width={1200} height={600} className="h-48 w-full rounded-lg object-cover" />
        <p className="mt-4">Home mínima para validar deploy.</p>
        <div className="mt-4">
          <Button>Chamada para ação</Button>
        </div>
      </div>
    </main>
  )
}
