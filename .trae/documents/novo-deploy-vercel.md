# Plano: Novo Deploy na Vercel

## Objetivo
Fazer deploy da aplicação na Vercel para gerar um novo link público.

## Situação Atual
- Aplicação já configurada para Vercel (arquivo vercel.json existe)
- Versão V2 configurada como página padrão no raiz `/`
- Histórico de deploys pode ser visto em: [Vercel Dashboard](https://vercel.com/dashboard)

---

## Plano de Execução

### Fase 1: Preparar para Deploy
1. Verificar se todas as alterações estão salvas
2. Garantir que o build funciona corretamente

### Fase 2: Executar Deploy
1. Executar comando `vercel` ou conectar ao repositório Git
2. Aguardar build e deploy

### Fase 3: Obter novo link
1. Copiar URL de deploy gerada
2. Testar link no navegador

---

## Alternativas de Deploy

### Opção 1: Deploy via Git (Recomendado)
- Push das alterações para GitHub/GitLab
- Vercel detecta mudanças e faz deploy automático
- Link atualizado após cada push

### Opção 2: Deploy via CLI
- Executar `vercel` na pasta do projeto
- Gerar link temporário ou fixo

### Opção 3: Deploy manual
- Fazer build local (`npm run build`)
- Upload da pasta `dist` via dashboard Vercel

---

## Resultado Esperado
- Link de deploy ativo como: `https://[project].vercel.app`
- Página V2 acessível na raiz `/`
- Página V1 acessível em `/v1`