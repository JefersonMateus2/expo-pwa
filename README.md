# Expo PWA

Aplicativo Expo + React Native + TypeScript + Expo Router, com foco na experiência web/PWA.

## Requisitos

- Node.js LTS
- npm

## Executar localmente

```bash
npm install
npm run web
```

## Build web estático

```bash
npm run build:web
```

O comando gera a versão web estática na pasta `dist/`. Para testar a instalação PWA de forma real, publique essa pasta em um host HTTPS e confira o manifesto e a opção de instalação no navegador.

## PWA mínima nesta etapa

- `public/manifest.json`: nome, nome curto, idioma, cores, modo de exibição e URL inicial.
- `public/icons/icon.svg` e `public/icons/icon-maskable.svg`: ícones vetoriais.
- `app/+html.tsx`: associa o manifesto e define metadados de tema e instalação.

Esta configuração é o ponto de partida para instalação web; não declaramos suporte offline completo. Um service worker e estratégia de cache não foram adicionados nesta etapa, pois precisam ser integrados e testados com a saída estática do Expo sem duplicar infraestrutura.

## Estrutura

- `app/`: rotas Expo Router e HTML base da versão web.
- `public/`: manifesto e ícones públicos.
- `src/components/`: componentes compartilhados.
- `src/services/`: serviços de dados, a implementar nos próximos checkpoints.
- `src/types/`: tipos TypeScript compartilhados.
- `src/utils/`: utilitários compartilhados.

Firebase/Firestore e CRUD serão implementados em checkpoints posteriores.
