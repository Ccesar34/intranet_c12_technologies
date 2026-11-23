# C12 Technologies — Site Institucional

> **Protótipo navegável com dados fictícios** — Análise de Dados · Business Intelligence · Automação de Processos com vibe coding.

![Status](https://img.shields.io/badge/status-prot%C3%B3tipo-7C3AED) ![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20puro-4F46E5) ![Licen%C3%A7a](https://img.shields.io/badge/licen%C3%A7a-MIT-06B6D4)

Site institucional da **C12 Technologies**, consultoria fictícia de dados, BI e automação de processos.
Construído 100% com **HTML, CSS e JavaScript puros** — sem frameworks, sem build e sem dependências
externas obrigatórias. Ideal para demonstração a clientes e evolução incremental por módulos.

---

## ✨ O que há no site

| Menu | Conteúdo |
|---|---|
| **Início** | Hero com proposta de valor, números da consultoria, frentes de atuação e caminho de contratação |
| **Soluções** | Detalhamento das 3 frentes: Análise de Dados, BI e Automação com vibe coding |
| **Cases de Sucesso** | 4 cases fictícios com métricas de resultado e depoimentos |
| **Metodologia** | Fluxo em 5 passos do vibe coding, stack de tecnologia e FAQ |
| **Sobre Nós** | Missão, visão, valores, time de liderança fictício e trajetória |
| **Demo de Dashboard** | Scorecard executivo com KPIs e gráficos — 100% SVG/CSS puro (sem bibliotecas) |
| **Contato** | Formulário demonstrativo + canais de atendimento |

Todos os dados (clientes, métricas, pessoas, contatos) são **fictícios**, criados apenas para demonstração.

## 🎨 Identidade visual

- **Tema claro** com acentos em **indigo/violeta** (`#4F46E5 → #8B5CF6`) e **ciano** (`#06B6D4`)
- Tipografia: [Sora](https://fonts.google.com/specimen/Sora) (títulos) + [Inter](https://fonts.google.com/specimen/Inter) (texto), com fallback para fontes de sistema
- Ícones SVG inline · cards com sombras suaves · micro-animações discretas

## 🗂️ Estrutura do projeto

```
intranet/
├── index.html              # Shell da aplicação + menu + carregamento dos módulos
├── css/
│   └── styles.css          # Design system completo (tokens, componentes, páginas)
├── js/
│   ├── app.js              # Orquestração: navegação por hash, menu hambúrguer, rotas
│   └── pages/              # 1 módulo por página — totalmente independentes
│       ├── home.js
│       ├── solucoes.js
│       ├── cases.js
│       ├── metodologia.js
│       ├── sobre.js
│       ├── dashboard.js
│       └── contato.js
├── assets/
│   └── favicon.svg
└── README.md
```

### Como funciona a navegação

O site é uma **SPA leve**: o `app.js` troca o conteúdo de `#content` conforme a rota na URL
(ex.: `index.html#dashboard`). Cada módulo se registra em `window.PAGES.<nome>` e é completamente
independente — para adicionar uma página nova:

1. Crie `js/pages/minhapagina.js` registrando `window.PAGES.minhapagina = () => "..."`;
2. Adicione o `<script>` e o item de menu no `index.html`;
3. Inclua o título em `TITLES` no `app.js`.

Para excluir um módulo, basta remover o script, o item de menu e a linha em `TITLES` — nada mais quebra.

> **Cache-busting:** os arquivos são carregados com sufixo `?v=1`. Ao publicar uma alteração,
> suba a versão (ex.: `styles.css?v=2`) para todos receberem a novidade sem depender de Ctrl+F5.

## ▶️ Como rodar localmente

É um site estático — qualquer servidor HTTP funciona:

```bash
# Opção 1: Python
cd intranet
python -m http.server 8080

# Opção 2: Node
npx serve intranet
```

Depois acesse `http://localhost:8080`.

## 🚀 Publicar no GitHub Pages

1. Suba este projeto para um repositório (veja histórico de commits abaixo);
2. No repositório: **Settings → Pages → Source: Deploy from a branch**;
3. Escolha a branch `main` e a pasta `/ (root)`;
4. Em minutos o site estará no ar em `https://SEU-USUARIO.github.io/REPO/`.

Nenhuma etapa de build é necessária.

## 🗺️ Roadmap

- [x] **Fase 1 — Protótipo navegável** (este repositório): identidade visual, conteúdo fictício e demo de dashboard
- [ ] **Fase 2 — Interatividade real**: formulário de contato funcional (backend leve), animações de gráficos e filtros
- [ ] **Fase 3 — Conteúdo dinâmico**: CMS/headless para cases e posts, SEO avançado e analytics
- [ ] **Fase 4 — Automações de vendas**: integração com CRM, agendamento de reuniões e agentes de IA para pré-qualificação de leads

## 🤝 Créditos e licença

Protótipo desenvolvido como proposta comercial. Código sob licença [MIT](LICENSE).

---
*C12 Technologies © 2026 — Dados fictícios para fins de demonstração.*
