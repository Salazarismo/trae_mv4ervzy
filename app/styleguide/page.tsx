import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Skeleton } from '@/components/ui/Skeleton'
import { Tooltip } from '@/components/ui/Tooltip'

export const metadata = { title: 'Styleguide' }

export default function StyleguidePage() {
  const colors = [
    { name: 'background', class: 'bg-background' },
    { name: 'primary', class: 'bg-primary' },
    { name: 'success', class: 'bg-success' },
    { name: 'warning', class: 'bg-warning' },
    { name: 'error', class: 'bg-error' },
    { name: 'surface', class: 'bg-surface' },
    { name: 'border', class: 'bg-border' },
  ]
  return (
    <div className="space-y-10 py-10">
      <SectionHeader title="Tokens" description="Cores, tipografia e espaçamento" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {colors.map((c) => (
          <div key={c.name} className="rounded-lg border border-border bg-neutral-900 p-4">
            <div className={`h-12 w-full rounded ${c.class}`}></div>
            <p className="mt-2 text-xs text-neutral-400">{c.name}</p>
          </div>
        ))}
      </div>

      <SectionHeader title="Componentes" description="Primitivos com variantes controladas" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="p-6">
          <p className="text-sm text-neutral-300">Buttons</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button size="sm">SM</Button>
            <Button size="lg">LG</Button>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-neutral-300">Badges</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Badge>Neutral</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-neutral-300">Skeleton</p>
          <div className="mt-3">
            <Skeleton className="h-10 w-full" />
          </div>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-neutral-300">Tooltip</p>
          <div className="mt-3">
            <Tooltip content="Mais detalhes">
              <Button variant="secondary">Passe o mouse</Button>
            </Tooltip>
          </div>
        </Card>
      </div>

      <SectionHeader title="Contratos" description="Do/Don’t e políticas de uso" />
      <ul className="list-disc space-y-2 pl-6 text-sm text-neutral-300">
        <li>Usar apenas variantes permitidas por componente.</li>
        <li>Evitar props extras para estilo; preferir composição.</li>
        <li>Não criar classes globais para componentes.</li>
        <li>Respeitar `prefers-reduced-motion` e acessibilidade por teclado.</li>
      </ul>
    </div>
  )
}
