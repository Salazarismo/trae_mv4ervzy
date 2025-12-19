export default function BotDiscordRPGPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Sistema de Automação de Campanhas em Tempo Real (Discord · Python)</h1>

      <section className="mt-4">
        <h2 className="text-lg font-medium">Resumo</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Sistema assíncrono projetado para organizar campanhas de RPG em Discord, com controle de estado, persistência transacional e interfaces interativas para decisões complexas em tempo real.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Problema → Solução</h2>
        <p className="mt-2 text-sm text-neutral-300">Ambientes de RPG em Discord rapidamente se tornam caóticos: estado distribuído, perda de histórico e comandos frágeis.</p>
        <p className="mt-2 text-sm text-neutral-300">Este projeto resolve isso através de modelagem de domínio, workflows determinísticos e persistência confiável, garantindo consistência mesmo sob uso concorrente.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Destaques técnicos</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-neutral-300">
          <li>Modelagem de domínio com schemas e versionamento</li>
          <li>PostgreSQL + pool asyncpg com transações explícitas</li>
          <li>Arquitetura modular com Cogs e responsabilidades claras</li>
          <li>Workflow state-machine para comandos críticos</li>
          <li>Rate limit formalizado (janela, deque, bloqueio calculado)</li>
          <li>UI interativa com Select menus e Views</li>
          <li>Algoritmo de seleção ótima para rolagens de dados</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Competências demonstradas</h2>
        <p className="mt-2 text-sm text-neutral-300">Este projeto demonstra capacidade de projetar sistemas orientados a domínio, manter consistência de estado em ambientes assíncronos e construir fluxos determinísticos sobre plataformas não determinísticas (Discord).</p>
      </section>

      <p className="mt-10 text-xs text-neutral-400">Tempo de leitura: 2 minutos • Complexidade: média–alta</p>
    </main>
  )
}
