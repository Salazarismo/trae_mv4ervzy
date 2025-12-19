export default function RelatoriumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Relatorium (Desktop – Windows)</h1>
      <p className="mt-4 text-sm text-neutral-300">
        Aplicação Flutter Desktop com arquitetura modular explícita, isolamento de subsistemas, persistência local segura e protocolos formais de execução. Tecnologias: Flutter Desktop (Win32), Drift + SQLite, AES‑GCM, Riverpod + GoRouter e plugins nativos.
      </p>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Diagrama simplificado</h2>
        <div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm text-neutral-300">
          <pre>
{`UI (Flutter)
  ↓
Core Services
  ├── Config (AES-GCM)
  ├── Database (Drift / SQLite)
  └── File IO
  ↓
Subsystems
  ├── Soil
  ├── Finance
  ├── Stock
  └── Auth`}
          </pre>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Arquitetura & Decisões</h2>
        <ul className="mt-3 list-disc pl-6 text-sm text-neutral-300">
          <li>Arquitetura layered com domínios isolados</li>
          <li>Dependências proibidas entre subsystems</li>
          <li>Efeitos colaterais explícitos</li>
          <li>Invariantes arquiteturais validadas automaticamente</li>
          <li>Fluxo de inicialização determinístico (Runner → Engine → Plugins → DB)</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Segurança</h2>
        <p className="mt-3 text-sm text-neutral-300">
          Dados sensíveis são persistidos localmente usando AES‑GCM 256 bits, com chave gerada por fonte criptograficamente segura. Nenhum segredo é versionado ou armazenado em plaintext.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-medium">Diferencial técnico</h2>
        <p className="mt-2 text-sm text-neutral-300">Invariantes formais:</p>
        <ul className="mt-2 list-disc pl-6 text-sm text-neutral-300">
          <li>UI não acessa DB ou FS diretamente</li>
          <li>Plugins são registrados antes do primeiro frame</li>
          <li>Nenhuma feature depende de outra feature</li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-neutral-400">Tempo de leitura: 2 minutos • Sinal técnico: altíssimo</p>
    </main>
  )
}
