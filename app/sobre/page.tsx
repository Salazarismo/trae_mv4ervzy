export default function SobrePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Sobre</h1>
      <p className="mt-4 text-sm text-neutral-300">
        Desenvolvedor focado em Next.js e boas práticas: acessibilidade, performance e DX.
      </p>
      <ul className="mt-6 list-disc pl-6 text-sm text-neutral-300">
        <li>App Router e Server Actions</li>
        <li>SSR, SSG e ISR</li>
        <li>Tailwind e design system</li>
      </ul>
    </main>
  )
}
