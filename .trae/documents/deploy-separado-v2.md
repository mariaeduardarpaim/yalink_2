# Plano: Configurar V2 como Página Principal para Deploy

## Objetivo
Modificar o projeto atual para que a versão V2 seja a página padrão no deploy, enquanto mantém ambas versões acessíveis durante desenvolvimento.

## Alterações a Fazer

### 1. Modificar App.tsx
- **Rota `/` → HomeV2** (página secundária atual)
- **Rota `/v1` → Home** (página principal original)
- Remover rota `/other` se não for usada

### 2. Resultado
- **Desenvolvimento local:**
  - `http://localhost:5173/` → V2 (nova versão)
  - `http://localhost:5173/v1` → V1 (versão original)
  
- **Deploy na Vercel:**
  - URL principal → V2 (será excluída ou mantida)
  - URL `/v1` → V1 (alternativa para comparação)

### 3. Deploy Separado (Futuro)
Quando decidirem qual versão manter:
- Se manterem V2: fazer deploy normal, URL raiz = V2
- Se manterem V1: trocar rotas, fazer deploy, URL raiz = V1

---

## Plano de Execução

1. **Editar App.tsx** - Inverter rotas para V2 ser padrão
2. **Testar** - Verificar ambas versões funcionando
3. **Deploy** - Fazer deploy da versão atual (V2 como padrão)

---

## Resultado Esperado

| Rota | Antes | Depois |
|------|-------|--------|
| `/` | V1 (Home) | V2 (HomeV2) |
| `/v2` | V2 (HomeV2) | `/v1` (Home) |
| Deploy | V1 | V2 |