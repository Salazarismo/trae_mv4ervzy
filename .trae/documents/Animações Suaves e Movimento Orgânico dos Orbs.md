## Princípios Reforçados
- Presença controlada: saída animada só acontece com atraso de unmount bem definido.
- Tiers fixos de performance: previsível (desktop 60fps, mobile 30fps, low‑end JS off).
- will-change aplicado apenas durante a animação e removido depois.
- Limites perceptivos claros para orbs; evitar ruído visual.
- Motion Budget e kill‑switch global para controle operacional.

## Padrões de Saída (Presença)
- Hook `useExitAnimation(duration)` para elementos que desmontam:
  - Mantém o componente “vivo” por `duration` antes do unmount, aplicando classe `animate-out-*`.
  - Exposição de `state` e `onExited` para composição com menus/tooltips.
- Alternativa CSS pura com `data-state="open|closed"`:
  - Onde possível (ex.: Tooltip), transiciona via atributos sem unmount imediato.
- Wrapper simples `MotionPresence` para casos gerais (lista, modais leves).

## Tiers de Performance
- Desktop: 60fps.
- Mobile: 30fps.
- Low‑end: JS para orbs desligado; somente CSS float/rotate ou estático.
- Heurística de detecção: `navigator.hardwareConcurrency`, `navigator.deviceMemory` (se disponível), `innerWidth/innerHeight` (viewport). Thresholds conservadores.

## will-change (Parcimônia)
- Adicionar `will-change: transform` ao iniciar movimento ou interação; remover após 300–500ms sem interação.
- Orbs recebem `will-change` somente durante hover/cursor tracking.

## Limites Perceptivos (Orbs)
- Amplitude float: 8–12px padrão, máximo 15px.
- Rotação: ~0.75 rpm (entre 0.5–1 rpm).
- Cursor interaction: deslocamento adicional clamped a ≤ 50% do diâmetro/segundo.
- Entrada: fade‑in 300–500ms + scale 0.8→1.0 + translate 5–10px.
- Saída: fade‑out 200–300ms + scale 1.0→0.9 + translate 5–10px.

## Motion Budget
- Máximo de 12 elementos simultaneamente com animação visível em uma viewport padrão.
- Máximo de 2 `transform`s concorrentes por elemento (ex.: translate + rotate).
- Entrada em componentes ≤ 500ms; saída ≤ 300ms.
- Orbs: 3 elementos animados por padrão; sem adicionar novos orbs sem revisão.

## Kill‑Switch Global
- Atributo `data-motion="off"` no `<html>` desativa animações (JS e CSS onde aplicável).
- Query param `?motion=off` seta atributo em client.
- Respeito a `prefers-reduced-motion` sempre prioritário.

## Implementação
1. Tailwind (`tailwind.config.ts`):
   - `keyframes`: `in-scale-fade`, `out-scale-fade`, `float`, `rotate-slow` com variações de duração.
   - `animation`: utilitários `animate-in-300/500`, `animate-out-200/300`, `animate-float`, `animate-rotate-slow`.
2. Presença
   - `hooks/useExitAnimation.ts`: controla atraso de unmount e aplica classe de saída.
   - `components/ui/Tooltip.tsx`: usar `data-state` para transição.
3. Orbs (`components/Hero.tsx`)
   - CSS base: entrada, float e rotação dentro dos limites.
   - JS decorativo: cursor interaction com damping e clamping; tiers de performance; kill‑switch.
   - `IntersectionObserver` para ligar/desligar em visibilidade; cleanup correto.
4. Aplicação de Motion
   - `Button`, `Card`, links e CTAs recebem `animate-in-300` por padrão.
   - Sair: onde houver toggling, usar `useExitAnimation` ou `data-state`.
5. Documentação
   - `docs/styleguide.md`: seção “Motion” com utilitários, limites, tiers e quando NÃO animar.
   - `README.md`: instruções para kill‑switch e teste.

## Testes
- Chrome/Firefox/Safari.
- Desktop vs Mobile; medir fps no DevTools.
- `prefers-reduced-motion` e `data-motion="off"` validados.
- Diferentes resoluções; sem layout shifts.

## Critérios de Aceitação
- Animações de entrada/saída visíveis e suaves, sem flicker.
- Orbs com movimento orgânico dentro dos limites; rotação lenta; interação de cursor suave.
- Performance estável nos tiers; fallback previsível.
- Efeitos canceláveis/interrompíveis via hook e kill‑switch.
