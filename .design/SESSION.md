# Session - Portfolio Build

## Última atualização
22/04/2026

## O que fizemos hoje
1. Adicionado i18n (português/inglês) com dicionários JSON
2. Criadas versões EN de todas as páginas
3. Adicionado seletor de idioma no header
4. Unificado /about e /contact (removida página de contato)
5. Adicionado /experience com conteúdo do currículo
6. Ajuste de espaçamento entre botão LinkedIn e tags de skills (mt-16)
7. LinkedIn ao lado do email com separador "|"
8. Configurado GitHub Actions para build e deploy automático
9. Corrigido erro de sintaxe no workflow (concurrency)

## Status atual
- Branch `master` = código fonte (aqui localmente)
- Branch `main` = GitHub Pages (deploy from branch)
- GitHub Actions configurado mas NÃO está funcionando corretamente
- Site em produção usando "deploy from branch" na `main`

## Problema
O workflow do GitHub Actions não está deployando os arquivos corretamente.
O site está sendo servido como HTML puro sem estilos.

## Solução pendente
O usuário quer continuar usando **"deploy from branch"** (não GitHub Actions).
É necessário configurar o deploy para que quando fazer push na `main`,
os arquivos buildados (pasta `out/`) sejam disponibilizados na branch.

## Próximos passos
1. Configurar workflow para fazer push da pasta `out/` para a branch `main`
   OU
2. Trocar para Vercel (mais simples para Next.js)

## Arquivos modificados hoje
- src/app/about/page.tsx - email + LinkedIn lado a lado
- src/app/en/about/page.tsx - mesma modificação
- src/i18n/pt.json, src/i18n/en.json - traduções
- src/components/layout/header.tsx - language switcher
- .github/workflows/deploy.yml - GitHub Actions

## Configuração GitHub Pages
- Settings → Pages → Source: **Deploy from a branch**
- Branch: **main** (/ (root))

## URLs do site
- Produção: https://silasvj.github.io/portfolio/
- Repo: https://github.com/silasvj/portfolio