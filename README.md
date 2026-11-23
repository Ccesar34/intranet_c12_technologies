# C12 Technologies — Site Institucional

> **Protótipo navegável com dados fictícios** — Análise de Dados · Business Intelligence · Automação de Processos com vibe coding.

![Status](https://img.shields.io/badge/status-prot%C3%B3tipo-00BAB4) ![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20puro-2D2E47) ![Licen%C3%A7a](https://img.shields.io/badge/licen%C3%A7a-MIT-3E7996)

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

Baseada na identidade oficial da marca C12 Technologies:

| Cor | Hex | Significado |
|---|---|---|
| Azul Petróleo | `#3E7996` | Inovação |
| Azul Noturno | `#2D2E47` | Confiança (base do tema) |
| Turquesa | `#00BAB4` | Tecnologia (destaque/ação) |
| Azul Profundo | `#2F6C82` | Equilíbrio |

- **Fundo branco/claro** com as cores da marca nos detalhes: turquesa `#00BAB4` (ações e destaques), azul profundo `#2F6C82` (menu hambúrguer), azul petróleo `#3E7996` e azul noturno `#2D2E47` (títulos em gradiente e bloco CTA)
- Tipografia: [Montserrat](https://fonts.google.com/specimen/Montserrat) (títulos e texto), com fallback para fontes de sistema
- Logo geométrico "C" two-tone (turquesa + azul profundo) em SVG inline e favicon
- Ícones SVG inline · cards com sombras suaves · micro-animações discretas
- **Responsivo**: no celular, o menu vira uma gaveta lateral com topo fixo e botão hambúrguer azul profundo (`#2F6C82`)

## 🗂️ Estrutura do projeto

```
intranet/
├── index.html              # Shell da aplicação + menu + topo mobile + carregamento dos módulos
├── css/
│   └── styles.css          # Design system completo (tokens da marca, componentes, páginas)
├── js/
│   ├── app.js              # Orquestração: navegação por hash, menu (recolher no desktop, gaveta no mobile), rotas
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
├── LICENSE
├── .gitignore
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

> **Cache-busting:** os arquivos são carregados com sufixo de versão (ex.: `styles.css?v=6`, `app.js?v=3`).
> Ao publicar uma alteração, suba a versão do arquivo alterado para todos receberem a novidade sem depender de Ctrl+F5.

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

O projeto já está versionado em [github.com/Ccesar34/intranet_c12_technologies](https://github.com/Ccesar34/intranet_c12_technologies).
Para publicar o site:

1. No repositório: **Settings → Pages → Source: Deploy from a branch**;
2. Escolha a branch `main` e a pasta `/ (root)`;
3. Em minutos o site estará no ar em `https://ccesar34.github.io/intranet_c12_technologies/`.

Nenhuma etapa de build é necessária — futuras atualizações vão ao ar a cada `git push` na `main`.

## 🗺️ Roadmap

- [x] **Fase 1 — Protótipo navegável** (este repositório): identidade visual, conteúdo fictício e demo de dashboard
- [ ] **Fase 2 — Interatividade real**: formulário de contato funcional (backend leve), animações de gráficos e filtros
- [ ] **Fase 3 — Conteúdo dinâmico**: CMS/headless para cases e posts, SEO avançado e analytics
- [ ] **Fase 4 — Automações de vendas**: integração com CRM, agendamento de reuniões e agentes de IA para pré-qualificação de leads

## 🤝 Créditos e licença

Protótipo desenvolvido como proposta comercial. Código sob licença [MIT](LICENSE).

---
*C12 Technologies © 2026 — Dados fictícios para fins de demonstração.*
