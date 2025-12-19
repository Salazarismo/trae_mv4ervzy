## Princípios e Limites
- Separação explícita:
  - Primitivos CSS → somente estilo visual (tokens utilitários locais).
  - Componentes React → composição, acessibilidade e estados (sem virar "central de estilo").
- CSS Global mínimo: apenas reset, tipografia base e regras de acessibilidade em `app/globals.css:1-5`. Sem `@layer components` global.
- Variantes: estratégia única com `class-variance-authority (cva)` + `clsx` por componente.
- Animação: nunca crítica. JS opcional, decorativa e respeitando `prefers-reduced-motion`.
- Styleguide como contrato: define o que fazer, o que não fazer e quando evitar.

## Stack e Base Atual
- Next.js 14 + TailwindCSS já ativos: `tailwind.config.ts:1-7`, `app/globals.css:1-5`, `app/layout.tsx:10-19`, `components/Header.tsx:11-24`.

## Sistema de Design (Tokens)
- Definir tokens exclusivamente no `tailwind.config.ts:5` (sem CSS global):
  - Cores (claro/escuro preparados): `neutral`, `primary`, `success`, `warning`, `error`, `surface`, `border` com contraste AA.
  - Tipografia: escala de texto, pesos e `line-height`.
  - Espaçamento e tamanhos: `spacing`, `container`, `screens`.
  - Motion: `durations`, `easings`, `keyframes` para utilitários `animate-*`.
  - Bordas/sombras: `borderRadius`, `boxShadow`.

## Componentes React (Composição + A11y)
- Criar em `components/ui/*` componentes com cva e utilitários Tailwind:
  - `Button.tsx`: variantes `variant` (primary, secondary, ghost, danger) e `size` (sm, md, lg); estados `disabled/pressed/hover/focus` com foco visível; sem props infladas.
  - `Input.tsx`, `Textarea.tsx`, `Select.tsx`: rótulos, `aria-*`, mensagens de erro/sucesso.
  - `Card.tsx`, `Badge.tsx`: semântica adequada (ex.: `section`, `article` quando fizer sentido).
  - `Skeleton.tsx`, `Spinner.tsx`: respeitam `prefers-reduced-motion`.
  - `SectionHeader.tsx`, `Tooltip.tsx`: focados em acessibilidade (rolagem por teclado, `aria-describedby`).
- Composição local: classes Tailwind no próprio arquivo do componente; nenhuma classe global `.btn`/`.input`.

## Ícones e Imagens
- Ícones: adotar `lucide-react` (ou SVG inline) com `aria-hidden` e título opcional para acessibilidade.
- Imagens: `next/image` com `alt`, `sizes` e `priority` no hero.
- Fallback visual:
  - Componente `ImageWithFallback` (placeholder + borda) quando houver erro de carregamento; sem UX quebrada.

## Dark Mode (Arquitetura Preparada)
- Habilitar `dark` variant do Tailwind; aplicar `class="dark"` em `html`/`body` (sem implementação do toggler agora).
- Tokens já prontos para ambas variantes (claro/escuro).

## Interações e Animações (Contratos)
- Microinterações: transições CSS (150–250ms) com `ease-out`/`ease-in`; nunca bloquear fluxo.
- Scroll reveal:
  - CSS‑only (keyframes) para casos simples; se JS for usado, apenas decorativo, sem mudar layout, sem afetar tabulação, protegido por `prefers-reduced-motion`.
- Estados de formulário: feedback claro com `aria-live`.

## Acessibilidade (WCAG AA)
- Contraste garantido por tokens.
- Foco visível consistente (`:focus-visible` já em `app/globals.css:5`).
- `Skip link` no topo de `app/layout.tsx:12-16` para navegação por teclado.
- Hierarquia de headings (ex.: `app/page.tsx:4`), ícones com `aria-hidden` e elementos com `role` quando necessário.

## Empty States e Erros
- Padrões para listas vazias (ícone, mensagem, ação sugerida).
- Erros de rede/processamento: componentes de erro com orientação clara e opção de retry.
- `404/empty` visuais consistentes.

## Styleguide como Contrato
- Página: `app/styleguide/page.tsx` com:
  - Tokens (cores, tipografia, spacing, motion) + matrizes de variantes por componente (permitido/proibido).
  - Do/Don’t: exemplos de uso incorreto (props excessivas, variantes não permitidas, classes duplicadas).
  - Critérios de adoção: quando NÃO usar um componente.
- Documento: `docs/styleguide.md` normativo (contratos, mudanças versionadas, processo de revisão).

## Performance e Compatibilidade
- Autoprefixer; evitar features não suportadas.
- `next/font` com `swap` em `app/layout.tsx:10-19`.
- Imagens otimizadas; sem LCP pesado.
- Lighthouse/Web Vitals para LCP/CLS/TBT.

## Implementação (Sequência)
1. Tokens no `tailwind.config.ts:5` (cores, tipografia, spacing, motion, radii, sombras; com `dark` preparado).
2. `app/globals.css:1-5`: manter apenas base/reset e acessibilidade; remover ideia de `@layer components` global.
3. `app/layout.tsx:12-16`: adicionar `next/font` e `skip link`.
4. `components/ui/*`: criar `Button`, `Input`, `Textarea`, `Select`, `Card`, `Badge`, `Skeleton`, `Spinner`, `SectionHeader`, `Tooltip` usando `cva`.
5. Atualizar `components/Header.tsx:11-24`: estados de foco/ativo e ícones; mobile acessível.
6. Integrar `next/image` com `ImageWithFallback` em `app/page.tsx:3-11` e páginas de projetos.
7. Animações: keyframes em tokens; aplicar somente decorativas e respeitar `prefers-reduced-motion`.
8. Styleguide (página + doc) com contratos e do/don’t.

## Critérios de Exclusão (Não faremos agora)
- Sem `framer-motion` ou animações JS críticas.
- Sem classes globais `.btn/.input` em `globals.css`.
- Sem props de variantes além de `variant` e `size` por componente.
- Sem tema dinâmico (apenas preparação para dark mode, sem toggler).
- Sem charts complexos; foco em UI base.

## Verificação
- A11y: axe/lighthouse; teclado completo; `prefers-reduced-motion`.
- Performance: LCP/CLS/TBT em páginas principais.
- Consistência: styleguide como referência obrigatória para revisão.
