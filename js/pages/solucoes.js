/* =========================================================
   C12 TECHNOLOGIES — Página: SOLUÇÕES
   ========================================================= */

window.PAGES.solucoes = () => `
  <span class="eyebrow"><span class="dot"></span> Soluções</span>
  <h1 class="page-title">Três frentes, <span class="accent">um objetivo</span>: decisões melhores.</h1>
  <p class="page-sub">
    Trabalhamos em camadas — dos dados brutos à automação do dia a dia. Cada solução abaixo pode
    começar como um piloto de baixo risco e evoluir para a operação completa.
  </p>

  <!-- Análise de Dados -->
  <section class="section-gap card">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap">
      <div>
        <div class="service-icon si-indigo" style="margin-bottom:12px">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </div>
        <h2 class="section-title">1. Análise de Dados</h2>
        <p class="section-sub">Da pergunta de negócio à resposta quantificada</p>
      </div>
      <span class="badge badge-info">Piloto a partir de 2 semanas</span>
    </div>
    <div class="grid grid-2" style="gap:16px">
      <ul class="list-check">
        <li><span class="ck">✓</span><span><strong>Diagnóstico de dados</strong> — inventário de fontes, qualidade e lacunas.</span></li>
        <li><span class="ck">✓</span><span><strong>Modelagem e ETL</strong> — pipeline confiável, atualizado conforme a sua operação.</span></li>
        <li><span class="ck">✓</span><span><strong>Análises sob demanda</strong> — precificação, mix, sazonalidade, cohort e churn.</span></li>
      </ul>
      <ul class="list-check">
        <li><span class="ck">✓</span><span><strong>Modelos preditivos</strong> — previsão de demanda e de receita com acurácia monitorada.</span></li>
        <li><span class="ck">✓</span><span><strong>Data lakes e warehouses</strong> — base única e governada para toda a empresa.</span></li>
        <li><span class="ck">✓</span><span><strong>Cultura de dados</strong> — capacitação do time interno para decolar sozinho.</span></li>
      </ul>
    </div>
    <div class="tags" style="margin-top:14px">
      <span class="tag">Python</span><span class="tag">SQL</span><span class="tag">Pandas</span>
      <span class="tag">PostgreSQL</span><span class="tag">dbt</span><span class="tag">Airflow</span>
    </div>
  </section>

  <!-- BI -->
  <section class="section-gap card">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap">
      <div>
        <div class="service-icon si-cyan" style="margin-bottom:12px">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 15v-4M12 15V8M16 15v-2.5"/></svg>
        </div>
        <h2 class="section-title">2. Business Intelligence</h2>
        <p class="section-sub">Todo o time olhando para o mesmo número</p>
      </div>
      <span class="badge badge-cyan">Dashboards ao vivo</span>
    </div>
    <div class="grid grid-2" style="gap:16px">
      <ul class="list-check">
        <li><span class="ck">✓</span><span><strong>Scorecards executivos</strong> — KPIs do negócio com metas e variações claras.</span></li>
        <li><span class="ck">✓</span><span><strong>Dashboards por área</strong> — comercial, financeiro, operações e RH em linguagem própria.</span></li>
        <li><span class="ck">✓</span><span><strong>Alertas inteligentes</strong> — indicador saiu da meta? O responsável já sabe.</span></li>
      </ul>
      <ul class="list-check">
        <li><span class="ck">✓</span><span><strong>Self-service BI</strong> — perguntas do dia a dia respondidas sem depender de TI.</span></li>
        <li><span class="ck">✓</span><span><strong>Fechamentos acelerados</strong> — relatórios de D+3 para quase tempo real.</span></li>
        <li><span class="ck">✓</span><span><strong>Governança visual</strong> — padrão único de métrica, nomenclatura e cor.</span></li>
      </ul>
    </div>
    <div class="tags" style="margin-top:14px">
      <span class="tag">Power BI</span><span class="tag">Looker Studio</span><span class="tag">Metabase</span>
      <span class="tag">Grafana</span><span class="tag">DAX</span><span class="tag">BigQuery</span>
    </div>
  </section>

  <!-- Automação -->
  <section class="section-gap card">
    <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:16px; flex-wrap:wrap">
      <div>
        <div class="service-icon si-violet" style="margin-bottom:12px">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>
        </div>
        <h2 class="section-title">3. Automação de Processos com vibe coding</h2>
        <p class="section-sub">O processo manual de hoje, o fluxo automático de amanhã</p>
      </div>
      <span class="badge badge-violet">Nossa especialidade</span>
    </div>
    <p style="color:var(--muted); max-width:860px">
      <strong>Vibe coding</strong> é a nossa forma de construir: pessoas descrevem o processo em linguagem natural
      e a IA gera o código — com arquitetos da C12 revisando, testando e garantindo qualidade de engenharia.
      O resultado: automações que levavam meses ficam prontas em dias, com custo previsível.
    </p>
    <div class="grid grid-3" style="margin-top:18px">
      <div class="card" style="box-shadow:none; background:var(--surface-2); border:none">
        <h3 style="font-size:14.5px; margin-bottom:6px">Integrações de sistemas</h3>
        <p style="font-size:12.5px">ERPs, CRMs, planilhas e portais conversando entre si — sem retrabalho humano.</p>
      </div>
      <div class="card" style="box-shadow:none; background:var(--surface-2); border:none">
        <h3 style="font-size:14.5px; margin-bottom:6px">Fluxos administrativos</h3>
        <p style="font-size:12.5px">Cotações, aprovações, contratos e relatórios circulando sozinhos, com trilha de auditoria.</p>
      </div>
      <div class="card" style="box-shadow:none; background:var(--surface-2); border:none">
        <h3 style="font-size:14.5px; margin-bottom:6px">Agentes de IA internos</h3>
        <p style="font-size:12.5px">Assistentes que respondem perguntas de negócio com acesso restrito e seguro aos seus dados.</p>
      </div>
    </div>
    <div class="tags" style="margin-top:16px">
      <span class="tag">n8n</span><span class="tag">APIs REST</span><span class="tag">LLMs</span>
      <span class="tag">Git</span><span class="tag">CI/CD</span><span class="tag">RPA</span>
    </div>
  </section>

  <!-- CTA -->
  <section class="section-gap">
    <div class="cta-banner">
      <div>
        <h2>Não sabe por onde começar?</h2>
        <p>Comece pelo diagnóstico gratuito — a gente aponta a frente com maior retorno.</p>
      </div>
      <button class="btn btn-white" data-goto="contato">Agendar diagnóstico</button>
    </div>
  </section>
`;
