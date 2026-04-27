# Plano: Criar Duas Versões da Landing Page para Apresentação ao Cliente

## Objetivo
Duplicar a landing page atual e criar uma versão alternativa para que o cliente possa escolher entre duas abordagens visuais/comerciais.

## Análise do Projeto Atual

### Estrutura Identificada:
- **Stack**: React + TypeScript + Tailwind CSS + React Router v7
- **Página atual**: `src/pages/Home.tsx` (componente único)
- **Rotas configuradas**: `/` (principal) e `/other` (placeholder) em `App.tsx`
- **Componentes principais**: HeroSection, PainSection, RepositioningSection, PortfolioSection, BenefitsSection, CTASection, Header, Footer, LeadForm

---

## Opções de Implementação

### **Opção 1: Criar Rota Alternativa (`/v2`) — Recomendada**

**Vantagens:**
- Simples de implementar
- Mantém ambas as versões separadas e navegáveis
- Fácil de comparar no navegador
- Deploy separado possível se necessário

**Passos:**
1. Criar novo componente `HomeV2.tsx` em `src/pages/`
2. Duplicar todos os componentes de seção para versões V2 (`HeroSectionV2.tsx`, etc.)
3. Ou criar versão alternativa com mesma estrutura mas diferentes estilos/conteúdo
4. Adicionar nova rota em `App.tsx`

**Estrutura de arquivos:**
```
src/
├── pages/
│   ├── Home.tsx          # Versão original
│   └── HomeV2.tsx        # Nova versão alternativa
└── components/
    └── sections/
        ├── HeroSection.tsx
        └── HeroSectionV2.tsx  # Versão alternativa (opcional)
```

**Rotas resultantes:**
- `http://localhost:5173/` → Versão original
- `http://localhost:5173/v2` → Nova versão

---

### **Opção 2: Usar Parâmetros de Query String**

**Vantagens:**
- Single Page Application real (mesma URL com parâmetro)
- Não requer mudança de rota
- Fácil de compartilhar links (`?v=2`)

**Passos:**
1. Criar componente de switch no `Home.tsx`
2. Ler query param `?v=` 
3. Renderizar componentes diferentes baseado no parâmetro

**Código base:**
```tsx
const variant = new URLSearchParams(window.location.search).get('v');
// variant === '2' ? <ComponentsV2 /> : <ComponentsV1 />
```

**URLs resultantes:**
- `http://localhost:5173/` → Versão 1
- `http://localhost:5173/?v=2` → Versão 2

---

### **Opção 3: Sistema de Layouts Intercambiáveis**

**Vantagens:**
- Mais profissional e escalável
- Permite alternar entre versões dinamicamente
- Bom para A/B testing futuro

**Passos:**
1. Criar arquivo de configurações de layout
2. Extrair diferenças entre versões em constantes/config
3. Criar componentes que aceitem prop `layout` ou `variant`
4. Adicionar seletor visual no Header (para testes)

**Estrutura:**
```
src/
├── layouts/
│   ├── LayoutV1.tsx
│   └── LayoutV2.tsx
├── config/
│   └── variants.ts
└── pages/
    └── Home.tsx  (aceita variant como prop)
```

---

### **Opção 4: Duplicar Arquivos e Criar Página Paralela**

**Vantagens:**
- Total liberdade criativa
- Versões completamente independentes
- Sem risco de quebrar uma versão ao modificar a outra

**Passos:**
1. Copiar `Home.tsx` → `HomeB.tsx`
2. Copiar componentes necessários para versão B
3. Criar rota alternativa em `App.tsx`
4. Modificar livremente cada versão

---

## Recomendação

**Usar Opção 1 (Rota Alternativa `/v2`)** pelo seguinte:
- ✅ Implementação rápida
- ✅ Separação clara entre versões
- ✅ Fácil visualização lado a lado
- ✅ Manutenção simples
- ✅ Deployment paralelo fácil

---

## Plano de Execução (Opção 1)

### Fase 1: Preparação
1. Criar arquivo `src/pages/HomeV2.tsx`
2. Copiar estrutura do `Home.tsx`
3. Importar todos os componentes necessários

### Fase 2: Customização da Versão 2
4. Criar versão alternativa de componentes principais (ou usar os mesmos com props diferente)
5. Ajustar cores, layout, estilo visual
6. Personalizar headlines e CTAs se necessário

### Fase 3: Configuração de Rotas
7. Editar `App.tsx` para adicionar rota `/v2`
8. Atualizar navegação interna

### Fase 4: Testes
9. Testar ambas as versões localmente
10. Ajustar conforme feedback do cliente

---

## Resultado Esperado

O cliente poderá acessar:
- **Versão A**: `/` (landing page original)
- **Versão B**: `/v2` (nova versão alternativa)

Ambas funcionais, navegáveis e apresentáveis para decisão.