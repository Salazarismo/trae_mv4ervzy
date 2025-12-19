# Styleguide (Contrato)

## Princípios
- Primitivos CSS são utilitários locais, não classes globais.
- Componentes React cuidam de composição, acessibilidade e estados.
- Variantes controladas com `cva`; apenas `variant` e `size` por componente.
- Animações decorativas, opcionais e respeitam `prefers-reduced-motion`.

## Do
- Usar tokens do `tailwind.config.ts` para cores e motion.
- Garantir foco visível e navegação por teclado.
- Manter componentes pequenos e previsíveis.

## Don’t
- Criar `.btn`, `.input` globais em `globals.css`.
- Adicionar props de estilo não previstas.
- Usar animações JS em UI crítica.

## Variantes por Componente
- Button: `variant` (primary, secondary, ghost, danger), `size` (sm, md, lg).
- Badge: `variant` (neutral, primary, success, warning, error).

## Dark Mode
- Arquitetura preparada com `dark` variant do Tailwind; toggler será tratado futuramente.

## Empty States
- Layout consistente: ícone, título curto, mensagem clara e ação opcional.

## Imagens
- Usar `ImageWithFallback` para degradar com dignidade quando houver falha.

## Solicitações de Mudança
- Propor alterações via PR com atualização deste contrato.

## Motion
- Utilitários: `animate-in-300/500`, `animate-out-200/300`, `animate-float`, `animate-rotate-slow`.
- Limites: amplitude dos orbs 8–12px (máx. 15px); rotação ~0.75 rpm; deslocamentos por cursor ≤ 50% do diâmetro/segundo.
- Tiers: desktop 60fps; mobile 30fps; low‑end sem JS nos orbs.
- Kill‑switch: `data-motion="off"` no `<html>` ou `?motion=off` na URL.
- Quando NÃO animar: formulários em envio, leitura longa, estados de erro e feedback crítico.
 - Presença: usar `useExitAnimation(duration)` para saída com atraso de unmount quando necessário; preferir `data-state` para transições sem desmontar.
 - Budget: no máximo 12 elementos animados simultaneamente; ≤ 2 transforms por elemento; entradas ≤ 500ms e saídas ≤ 300ms.
