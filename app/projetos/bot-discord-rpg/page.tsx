export default function BotDiscordRPGPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Bot de Discord para RPG (Python)</h1>

      <section className="mt-4">
        <h2 className="text-lg font-medium">Resumo</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Bot de Discord para gerenciamento de campanhas de RPG com arquitetura modular, persistência em PostgreSQL e UI interativa.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Problema → Solução</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Campanhas de RPG em Discord sofrem com desorganização, perda de dados e excesso de comandos manuais.
        </p>
        <p className="mt-2 text-sm text-neutral-300">
          Desenvolvi um bot que estrutura campanhas, personagens, logs e rolagens complexas com interface interativa e persistência confiável.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Destaques técnicos</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-neutral-300">
          <li>Arquitetura modular com Cogs (discord.py) e responsabilidades claras</li>
          <li>PostgreSQL + pool asyncpg com transações explícitas</li>
          <li>Rate limit formalizado (janela, deque, bloqueio calculado)</li>
          <li>Workflow state-machine para comandos críticos</li>
          <li>UI interativa com Select menus e Views</li>
          <li>Algoritmo de seleção ótima para rolagens de dados</li>
          <li>Modelagem de domínio com schemas e versionamento</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Competências demonstradas</h2>
        <p className="mt-2 text-sm text-neutral-300">
          Este projeto demonstra minha capacidade de projetar sistemas orientados a domínio, lidar com concorrência assíncrona, manter persistência consistente e construir fluxos de interação complexos em ambientes em tempo real.
        </p>
      </section>

      <p className="mt-10 text-xs text-neutral-400">Tempo de leitura: 2 minutos • Sinal técnico: alto</p>
    </main>
  )
}
