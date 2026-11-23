/* =========================================================
   C12 TECHNOLOGIES — Página: METODOLOGIA
   ========================================================= */

window.PAGES.metodologia = () => `
  <span class="eyebrow"><span class="dot"></span> Metodologia</span>
  <h1 class="page-title">Vibe coding: velocidade de startup, <span class="accent">rigor de engenharia</span>.</h1>
  <p class="page-sub">
    Nossa metodologia une desenvolvimento assistido por IA, revisão humana especializada e ciclos
    curtos de entrega. É assim que entregamos em dias o que tradicionalmente leva meses — sem abrir
    mão de qualidade, segurança e documentação.
  </p>

  <!-- Fluxo vibe coding -->
  <section class="section-gap">
    <h2 class="section-title">O fluxo C12 em 5 passos</h2>
    <p class="section-sub">Ciclo completo de um projeto típico</p>
    <div class="flow">
      <div class="card flow-step">
        <div class="fv">01</div>
        <h4>Descobrir</h4>
        <p>Workshop com o time para mapear dor, dados e métrica de sucesso.</p>
      </div>
      <div class="card flow-step">
        <div class="fv">02</div>
        <h4>Prototipar</h4>
        <p>IA + engenheiro constroem o piloto funcional em poucos dias.</p>
      </div>
      <div class="card flow-step">
        <div class="fv">03</div>
        <h4>Validar</h4>
        <p>Você usa, testa e aprova — ajustes são baratos nessa fase.</p>
      </div>
      <div class="card flow-step">
        <div class="fv">04</div>
        <h4>Entregar</h4>
        <p>Deploy no seu ambiente, documentação e treinamento do time.</p>
      </div>
      <div class="card flow-step">
        <div class="fv">05</div>
        <h4>Evoluir</h4>
        <p>Sprints curtos adicionam módulos conforme o negócio cresce.</p>
      </div>
    </div>
  </section>

  <!-- Como funciona o vibe coding -->
  <section class="section-gap grid grid-2" style="gap:22px">
    <div class="card">
      <h2 class="section-title">O que é vibe coding, na prática?</h2>
      <p class="section-sub">Menos digitação de código, mais direção de produto</p>
      <ul class="list-check">
        <li><span class="ck">✓</span><span><strong>Linguagem natural</strong> — o especialista descreve a regra de negócio; a IA escreve a primeira versão do código.</span></li>
        <li><span class="ck">✓</span><span><strong>Revisão humana obrigatória</strong> — todo código passa por arquiteto da C12, testes automatizados e code review.</span></li>
        <li><span class="ck">✓</span><span><strong>Versionado e auditável</strong> — Git, CI/CD e histórico completo de decisões.</span></li>
        <li><span class="ck">✓</span><span><strong>Seu código é seu</strong> — entregamos repositório completo, sem dependência eterna da C12.</span></li>
        <li><span class="ck">✓</span><span><strong>Segurança desde o dia 1</strong> — dados do cliente nunca saem do ambiente acordado em contrato.</span></li>
      </ul>
    </div>
    <div class="card">
      <h2 class="section-title">Stack que dominamos</h2>
      <p class="section-sub">Ferramentas certas para cada camada do problema</p>
      <h3 style="font-size:13px; margin:12px 0 8px; color:var(--muted)">Dados & BI</h3>
      <div class="stack-wrap">
        <span class="tag">Python</span><span class="tag">SQL</span><span class="tag">PostgreSQL</span>
        <span class="tag">BigQuery</span><span class="tag">dbt</span><span class="tag">Power BI</span>
        <span class="tag">Metabase</span><span class="tag">Looker Studio</span>
      </div>
      <h3 style="font-size:13px; margin:16px 0 8px; color:var(--muted)">Automação & IA</h3>
      <div class="stack-wrap">
        <span class="tag">n8n</span><span class="tag">APIs REST</span><span class="tag">LLMs</span>
        <span class="tag">RAG</span><span class="tag">OCR</span><span class="tag">Webhooks</span>
      </div>
      <h3 style="font-size:13px; margin:16px 0 8px; color:var(--muted)">Engenharia</h3>
      <div class="stack-wrap">
        <span class="tag">Git</span><span class="tag">CI/CD</span><span class="tag">Docker</span>
        <span class="tag">Testes automatizados</span><span class="tag">Observabilidade</span>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section-gap">
    <h2 class="section-title">Perguntas frequentes</h2>
    <p class="section-sub">As dúvidas que ouvimos em toda primeira conversa</p>
    <details class="faq-item">
      <summary>Preciso ter um time de TI interno para trabalhar com vocês?</summary>
      <div class="faq-body">Não. Entregamos projetos ponta a ponta. Se existir um time interno, integramos — mas muitos clientes começam sem nenhum suporte técnico dedicado.</div>
    </details>
    <details class="faq-item">
      <summary>Meus dados ficam seguros? A IA treina com eles?</summary>
      <div class="faq-body">Todo projeto roda no ambiente acordado (sua infraestrutura ou cloud contratada) e nenhum dado é usado para treinar modelos de terceiros. A segurança é um requisito de contrato, não um detalhe.</div>
    </details>
    <details class="faq-item">
      <summary>Quanto custa um piloto?</summary>
      <div class="faq-body">Depende do escopo, mas pilots típicos de dashboard ou automação têm preço fixo fechado antes do início — sem surpresa de horas extras. O diagnóstico inicial é gratuito.</div>
    </details>
    <details class="faq-item">
      <summary>E se o resultado não for o esperado?</summary>
      <div class="faq-body">A métrica de sucesso é combinada no passo 01. O piloto só avança quando ela é atingida — e se não for, redefinimos o caminho sem custo adicional na fase de protótipo.</div>
    </details>
  </section>

  <section class="section-gap">
    <div class="cta-banner">
      <div>
        <h2>Vamos desenhar seu primeiro ciclo?</h2>
        <p>Uma conversa de 30 minutos basta para esboçar o fluxo do seu projeto.</p>
      </div>
      <button class="btn btn-white" data-goto="contato">Agendar conversa</button>
    </div>
  </section>
`;
