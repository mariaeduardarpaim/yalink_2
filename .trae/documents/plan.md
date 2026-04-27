# Plano de Implementação

## Objetivo
Alterar a cor de fundo das seções `HeroSection`, `CTASection` e do `Footer` para o verde específico solicitado: `#067E6D`.

## Arquivos a serem modificados e ações

1. **`tailwind.config.js`**:
   - Atualizar a cor `yealink-dark-bg` para o valor `#067E6D`.
   - Remover as configurações de `backgroundImage` (`hero-gradient` e `footer-gradient`), pois vamos utilizar a cor sólida nas seções em vez do gradiente anterior.

2. **`src/index.css`**:
   - Remover as classes utilitárias `.hero-gradient` e `.footer-gradient` que definiam o gradiente anterior.

3. **`src/components/sections/HeroSection.tsx`**:
   - Substituir a classe `bg-hero-gradient` por `bg-yealink-dark-bg` na tag `section` principal.

4. **`src/components/sections/CTASection.tsx`**:
   - Substituir a classe `bg-footer-gradient` por `bg-yealink-dark-bg` na tag `section` principal.

> Nota: O arquivo `Footer.tsx` já utiliza a classe `bg-yealink-dark-bg`, então ao alterar a configuração do Tailwind no passo 1, a cor do Footer será atualizada automaticamente.

## Passos de Verificação
- Verificar se as 3 áreas (Hero, CTA final e Footer) estão exibindo corretamente o fundo com a cor `#067E6D`.
- Assegurar que a remoção das classes não quebrou o restante da estrutura de estilos.