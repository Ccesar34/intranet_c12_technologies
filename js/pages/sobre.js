/* =========================================================
   C12 TECHNOLOGIES — Página: SOBRE NÓS
   ========================================================= */

window.PAGES.sobre = () => `
  <span class="eyebrow"><span class="dot"></span> Sobre Nós</span>
  <h1 class="page-title">Uma consultoria que <span class="accent">fala a língua do negócio</span> — e também a do código.</h1>
  <p class="page-sub">
    A C12 Technologies nasceu em 2021 com uma inquietação: por que projetos de dados demoram meses
    e custam fortunas? A resposta nos levou ao vibe coding — e a um modelo de consultoria mais
    rápido, transparente e mensurável.
  </p>

  <!-- Nossa história -->
  <section class="section-gap grid grid-3">
    <div class="card" style="text-align:center">
      <div class="service-icon si-indigo" style="margin:0 auto 12px">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.6-9.5-9C.9 8.7 2.6 5 6 5c2 0 3.2 1 4 2.2C10.8 6 12 5 14 5c3.4 0 5.1 3.7 3.5 7-2.5 4.4-9.5 9-9.5 9z" transform="scale(.9) translate(1.3 1)"/></svg>
      </div>
      <h3 style="font-size:15.5px; margin-bottom:6px">Missão</h3>
      <p style="color:var(--muted); font-size:13px">Democratizar a decisão orientada por dados em empresas de qualquer porte.</p>
    </div>
    <div class="card" style="text-align:center">
      <div class="service-icon si-cyan" style="margin:0 auto 12px">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>
      </div>
      <h3 style="font-size:15.5px; margin-bottom:6px">Visão</h3>
      <p style="color:var(--muted); font-size:13px">Ser referência em entrega ágil de dados e automação na América Latina.</p>
    </div>
    <div class="card" style="text-align:center">
      <div class="service-icon si-violet" style="margin:0 auto 12px">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 8l7-5 7 5M7 13l5 5 5-5"/></svg>
      </div>
      <h3 style="font-size:15.5px; margin-bottom:6px">Propósito</h3>
      <p style="color:var(--muted); font-size:13px">Devolver tempo às pessoas: que máquinas façam o repetitivo e humanos façam o brilhante.</p>
    </div>
  </section>

  <!-- Valores -->
  <section class="section-gap">
    <h2 class="section-title">Nossos valores</h2>
    <p class="section-sub">O que guia cada entrega, cada linha de código e cada reunião</p>
    <div class="values-grid">
      <div class="card value-card">
        <div class="vi si-indigo"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></div>
        <h3>Transparência</h3>
        <p>Código, custo e prazo abertos desde o dia 1.</p>
      </div>
      <div class="card value-card">
        <div class="vi si-cyan"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg></div>
        <h3>Velocidade</h3>
        <p>Protótipo em dias. Aprender rápido vale mais que planejar devagar.</p>
      </div>
      <div class="card value-card">
        <div class="vi si-violet"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg></div>
        <h3>Impacto real</h3>
        <p>Projeto bom é o que muda indicador, não o que enche slide.</p>
      </div>
      <div class="card value-card">
        <div class="vi" style="background:var(--bad-soft); color:var(--bad)"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></div>
        <h3>Segurança</h3>
        <p>Dados do cliente onde pertencem: no ambiente do cliente.</p>
      </div>
    </div>
  </section>

  <!-- Time -->
  <section class="section-gap">
    <h2 class="section-title">Time de liderança</h2>
    <p class="section-sub">Quem conduz os projetos e as entregas da C12</p>
    <div class="team-grid" style="grid-template-columns: repeat(2, 1fr)">
      <div class="card member">
        <div class="avatar avatar-lg">CC</div>
        <h3>Caio Cesar</h3>
        <span>CEO &amp; Fundador</span>
        <div class="tags"><span class="tag">Estratégia</span><span class="tag">Vibe coding</span></div>
      </div>
      <div class="card member">
        <div class="avatar avatar-lg" style="background:linear-gradient(135deg,#06B6D4,#3B82F6)">IO</div>
        <h3>Isis de Oliveira</h3>
        <span>Head de Dados</span>
        <div class="tags"><span class="tag">Business Intelligence</span><span class="tag">Machine Learning</span></div>
      </div>
    </div>
  </section>

  <!-- Linha do tempo da empresa -->
  <section class="section-gap">
    <h2 class="section-title">Nossa trajetória</h2>
    <p class="section-sub">Marcos fictícios da empresa</p>
    <div class="timeline">
      <div class="card tl-item">
        <div class="tl-step">21</div>
        <h3>2021 — Fundação</h3>
        <p>Primeiros contratos de análise de dados para varejo local.</p>
        <span class="badge badge-info tl-time">3 fundadores</span>
      </div>
      <div class="card tl-item">
        <div class="tl-step">23</div>
        <h3>2023 — Vibe coding</h3>
        <p>Adotamos desenvolvimento assistido por IA e a entrega cai de meses para dias.</p>
        <span class="badge badge-cyan tl-time">+40 projetos</span>
      </div>
      <div class="card tl-item">
        <div class="tl-step">26</div>
        <h3>2026 — Consolidação</h3>
        <p>Mais de 120 projetos, 15 setores e um NPS que a gente tem orgulho de publicar.</p>
        <span class="badge badge-violet tl-time">Vocês aqui</span>
      </div>
    </div>
  </section>

  <section class="section-gap">
    <div class="cta-banner">
      <div>
        <h2>Gostou da nossa história?</h2>
        <p>Vamos escrever o próximo capítulo juntos — começando pelo seu problema mais urgente.</p>
      </div>
      <button class="btn btn-white" data-goto="contato">Conversar agora</button>
    </div>
  </section>
`;
