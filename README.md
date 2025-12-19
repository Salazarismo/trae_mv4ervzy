# trae_mv4ervzy

## DNS com Cloudflare via Terraform

1. Crie os seguintes secrets no repositório GitHub:
   - `CLOUDFLARE_API_TOKEN`
   - `ZONE_ID`
   - `DOMAIN` (ex.: `portifoliosalazar.com.br`)
2. Opcional: copie `infra/cloudflare/terraform.tfvars.example` para `infra/cloudflare/terraform.tfvars` e preencha.
3. Dispare o workflow `Cloudflare DNS` (Actions → Cloudflare DNS → Run workflow) ou faça push na `main` alterando `infra/cloudflare/`.
4. Registros aplicados:
   - Apex `A` → `216.198.79.1`
   - `www` `CNAME` → `b0b09c6df67ae1cb.vercel-dns-017.com.`
5. Após propagação, vá em Vercel → Project Settings → Domains → Refresh até `Valid Configuration`.

## Design System e UI

- Baseado em Tailwind, com tokens definidos em `tailwind.config.ts` (cores, container, radii, sombras, keyframes).
- CSS global mínimo em `app/globals.css` (tipografia base, acessibilidade, skip link).
- Componentes React com variantes controladas por `cva` em `components/ui/*`:
  - `Button` (`variant`: primary, secondary, ghost, danger; `size`: sm, md, lg)
  - `Input`, `Textarea`, `Select`, `Card`, `Badge`, `Skeleton`, `Spinner`, `SectionHeader`, `Tooltip`, `ImageWithFallback`
- Styleguide como contrato:
  - Página: `app/styleguide/page.tsx` (tokens, exemplos e políticas de uso)
  - Documento: `docs/styleguide.md` (do/don’t, variantes permitidas, decisões)
- Acessibilidade: foco visível, `skip link`, `prefers-reduced-motion`; `aria-current` na navegação.

### Motion

- Utilitários de entrada/saída: `animate-in-300/500`, `animate-out-200/300`.
- Orbs: float contínuo, rotação lenta e interação com cursor; tiers de performance (desktop 60fps, mobile 30fps, low-end sem JS).
- Kill‑switch: adicione `?motion=off` na URL para desativar animações internamente.

### Desenvolvimento

- `npm run dev` para ambiente local.
- Rota de verificação rápida: `http://localhost:3000/styleguide`.
- Evite criar classes globais de componentes; use composição local e cva.
