/* =========================================================
   C12 TECHNOLOGIES — Página: INÍCIO
   ========================================================= */

window.PAGES.home = () => `
  <!-- HERO -->
  <section class="hero">
    <div>
      <span class="eyebrow"><span class="dot"></span> Consultoria em Dados, BI & Automação</span>
      <h1>Transforme dados em <span class="accent">decisões rápidas</span>.</h1>
      <p>
        A <strong>C12 Technologies</strong> ajuda empresas a enxergar o presente com clareza e agir
        no futuro com confiança: análise de dados, business intelligence e automação de processos —
        entregues em dias, não meses, com vibe coding.
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary" data-goto="contato">
          Solicitar proposta
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
        <button class="btn btn-ghost" data-goto="dashboard">Ver demo de dashboard</button>
      </div>
      <div class="hero-badges">
        <span class="badge badge-info">+120 projetos entregues</span>
        <span class="badge badge-cyan">98% de satisfação</span>
        <span class="badge badge-violet">Entrega 5x mais rápida</span>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div class="float-card fc-1">
        <div class="fc-label">Receita monitorada</div>
        <div class="fc-value">R$ 48,2 mi</div>
        <div class="fc-bars">
          <span style="height:40%"></span><span style="height:55%"></span><span class="hi" style="height:78%"></span><span style="height:62%"></span><span style="height:88%"></span>
        </div>
      </div>
      <div class="float-card fc-2">
        <div class="fc-label">Automações ativas</div>
        <div class="fc-value">312 fluxos</div>
        <span class="badge badge-ok">99,2% de SLA</span>
      </div>
      <div class="float-card fc-3">
        <div class="fc-label">Decisões apoiadas por dados</div>
        <div class="fc-value">+42 mil / mês</div>
      </div>
    </div>
  </section>

  <!-- NÚMEROS -->
  <section class="section-gap">
    <div class="stats-strip">
      <div class="card stat"><div class="n">+120</div><div class="l">Projetos entregues</div></div>
      <div class="card stat"><div class="n">15</div><div class="l">Setores atendidos</div></div>
      <div class="card stat"><div class="n">98%</div><div class="l">Satisfação dos clientes</div></div>
      <div class="card stat"><div class="n">40%</div><div class="l">Redução média de tempo operacional</div></div>
    </div>
  </section>

  <!-- O QUE FAZEMOS -->
  <section class="section-gap">
    <h2 class="section-title">O que fazemos</h2>
    <p class="section-sub">Três frentes complementares que se conectam na prática</p>
    <div class="grid grid-3">
      <div class="card service-card">
        <div class="service-icon si-indigo">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </div>
        <h3>Análise de Dados</h3>
        <p>Diagnóstico, modelagem e exploração dos seus dados para responder as perguntas que importam ao negócio.</p>
        <div class="tags"><span class="tag">ETL</span><span class="tag">Estatística</span><span class="tag">Python</span></div>
        <a class="service-link" href="#solucoes" data-goto="solucoes">Saiba mais →</a>
      </div>
      <div class="card service-card">
        <div class="service-icon si-cyan">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 15v-4M12 15V8M16 15v-2.5"/></svg>
        </div>
        <h3>Business Intelligence</h3>
        <p>Dashboards executivos e indicadores ao vivo, para o time inteiro decidir com base no mesmo número.</p>
        <div class="tags"><span class="tag">Dashboards</span><span class="tag">KPIs</span><span class="tag">Data warehouse</span></div>
        <a class="service-link" href="#solucoes" data-goto="solucoes">Saiba mais →</a>
      </div>
      <div class="card service-card">
        <div class="service-icon si-violet">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
        </div>
        <h3>Automação de Processos</h3>
        <p>Rotinas manuais viram fluxos automáticos com vibe coding — desenvolvimento assistido por IA, em dias.</p>
        <div class="tags"><span class="tag">Vibe coding</span><span class="tag">Integrações</span><span class="tag">Fluxos</span></div>
        <a class="service-link" href="#solucoes" data-goto="solucoes">Saiba mais →</a>
      </div>
    </div>
  </section>

  <!-- POR QUE A C12 -->
  <section class="section-gap grid grid-2" style="gap:22px">
    <div class="card">
      <h2 class="section-title">Por que a C12?</h2>
      <p class="section-sub">O padrão antigo de consultoria é lento e caro. Nós mudamos a equação.</p>
      <ul class="list-check">
        <li><span class="ck">✓</span><span><strong>Protótipo em 10 dias</strong> — você vê resultado antes de qualquer contrato longo.</span></li>
        <li><span class="ck">✓</span><span><strong>Vibe coding</strong> — desenvolvimento humano + IA, com revisão e qualidade de engenharia.</span></li>
        <li><span class="ck">✓</span><span><strong>Dados seguros</strong> — tudo dentro do ambiente do cliente, sem "caixa-preta".</span></li>
        <li><span class="ck">✓</span><span><strong>Impacto mensurável</strong> — cada projeto nasce com métrica de sucesso combinada.</span></li>
      </ul>
    </div>
    <div class="card">
      <h2 class="section-title">Como começamos</h2>
      <p class="section-sub">Um caminho simples, do primeiro contato à operação contínua</p>
      <div class="timeline" style="grid-template-columns:1fr; gap:14px">
        <div class="tl-item card" style="box-shadow:none">
          <div class="tl-step">1</div>
          <h3>Diagnóstico gratuito</h3>
          <p>Workshop de 2h para mapear processos, fontes de dados e oportunidades de maior impacto.</p>
          <span class="badge badge-cyan tl-time">Sem custo · Sem compromisso</span>
        </div>
        <div class="tl-item card" style="box-shadow:none">
          <div class="tl-step">2</div>
          <h3>Protótipo rápido</h3>
          <p>Dashboards e automações piloto rodando com seus dados reais para validação da diretoria.</p>
          <span class="badge badge-info tl-time">Até 10 dias</span>
        </div>
        <div class="tl-item card" style="box-shadow:none">
          <div class="tl-step">3</div>
          <h3>Operação contínua</h3>
          <p>Evolução incremental, monitoria e novos módulos conforme o negócio cresce.</p>
          <span class="badge badge-violet tl-time">Sprints curtos</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="section-gap">
    <div class="cta-banner">
      <div>
        <h2>Pronto para ver seus dados trabalhando?</h2>
        <p>Agende um diagnóstico gratuito — sem slides genéricos, com o seu problema na mesa.</p>
      </div>
      <button class="btn btn-white" data-goto="contato">Falar com a C12</button>
    </div>
  </section>
`;
