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
