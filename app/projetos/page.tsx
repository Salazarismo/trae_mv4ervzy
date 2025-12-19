export default function ProjetosPage() {
  const items = [
    { title: 'Relatorium (Desktop – Windows)', stack: 'Flutter • Drift • AES‑GCM', link: '/projetos/relatorium' },
    { title: 'Sistema de Automação de Campanhas em Tempo Real (Discord · Python)', stack: 'Python • discord.py • PostgreSQL', link: '/projetos/bot-discord-rpg' },
    { title: 'Landing institucional', stack: 'Next.js • Tailwind', link: '#' },
    { title: 'Dashboard analítico', stack: 'Next.js • Charts', link: '#' },
  ]
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Projetos</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((p) => (
          <a key={p.title} href={p.link} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
            <div className="font-medium">{p.title}</div>
            <div className="mt-1 text-xs text-neutral-400">{p.stack}</div>
          </a>
        ))}
      </div>
    </main>
  )
}
