/* =========================================================
   C12 TECHNOLOGIES — Página: DEMO DE DASHBOARD
   Gráficos 100% SVG/CSS puros (sem bibliotecas externas).
   Cenário fictício: cliente "Varejo+ — varejo omnichannel".
   ========================================================= */

// ---------- Helpers de gráfico (SVG puro) ----------

// Gráfico de linhas: duas séries (2025 vs 2026), 10 meses
function lineChart() {
  const W = 640, H = 260, PADL = 46, PADR = 16, PADT = 18, PADB = 34;
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"];
  const s2025 = [2.4, 2.6, 2.5, 2.8, 3.0, 2.9, 3.2, 3.1, 3.3, 3.5];
  const s2026 = [2.8, 3.0, 3.3, 3.2, 3.6, 3.8, 3.9, 4.1, 4.2, 4.6];
  const max = 5, min = 0;
  const iw = W - PADL - PADR, ih = H - PADT - PADB;
  const x = i => PADL + (iw / (meses.length - 1)) * i;
  const y = v => PADT + ih - ((v - min) / (max - min)) * ih;

  const path = arr => arr.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + " " + y(v).toFixed(1)).join(" ");
  const area = path(s2026) + ` L ${x(s2026.length - 1)} ${y(min)} L ${x(0)} ${y(min)} Z`;

  let grid = "", labels = "";
  for (let g = 0; g <= 4; g++) {
    const v = (max / 4) * g, yy = y(v);
    grid += `<line x1="${PADL}" y1="${yy}" x2="${W - PADR}" y2="${yy}" stroke="#E4E7F0" stroke-width="1"/>`;
    labels += `<text x="${PADL - 8}" y="${yy + 4}" text-anchor="end" font-size="10" fill="#9AA3BC">${v.toString().replace(".", ",")}</text>`;
  }
  meses.forEach((m, i) => {
    labels += `<text x="${x(i)}" y="${H - 10}" text-anchor="middle" font-size="10" fill="#9AA3BC">${m}</text>`;
  });

  const dots = s2026.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="3.4" fill="#4F46E5" stroke="#fff" stroke-width="1.6"/>`).join("");

  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%; height:auto" role="img" aria-label="Receita mensal 2025 vs 2026">
    <defs>
      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4F46E5" stop-opacity=".22"/>
        <stop offset="100%" stop-color="#4F46E5" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${grid}${labels}
    <path d="${area}" fill="url(#areaGrad)"/>
    <path d="${path(s2025)}" fill="none" stroke="#9AA3BC" stroke-width="2.4" stroke-dasharray="6 5" stroke-linecap="round"/>
    <path d="${path(s2026)}" fill="none" stroke="#4F46E5" stroke-width="3" stroke-linecap="round"/>
    ${dots}
    <g font-size="11" font-weight="600">
      <rect x="${PADL + 4}" y="${PADT}" width="12" height="12" rx="3" fill="#4F46E5"/>
      <text x="${PADL + 22}" y="${PADT + 10}" fill="#131A2E">2026</text>
      <rect x="${PADL + 66}" y="${PADT}" width="12" height="12" rx="3" fill="#9AA3BC"/>
      <text x="${PADL + 84}" y="${PADT + 10}" fill="#131A2E">2025</text>
    </g>
  </svg>`;
}

// Barras verticais empilhadas a partir de uma base comum (alinhadas)
function barChart() {
  const W = 640, H = 260, PADL = 46, PADR = 16, PADT = 18, PADB = 34;
  const dados = [
    { canal: "E-commerce", v: 16.8 },
    { canal: "Loja física", v: 12.4 },
    { canal: "Marketplace", v: 10.2 },
    { canal: "Atacado", v: 8.8 },
  ];
  const max = 18;
  const iw = W - PADL - PADR, ih = H - PADT - PADB;
  const base = PADT + ih;
  const slot = iw / dados.length;
  const barW = 64;

  let out = "";
  for (let g = 0; g <= 4; g++) {
    const v = (max / 4) * g, yy = base - ((v / max) * ih);
    out += `<line x1="${PADL}" y1="${yy}" x2="${W - PADR}" y2="${yy}" stroke="#E4E7F0" stroke-width="1"/>`;
    out += `<text x="${PADL - 8}" y="${yy + 4}" text-anchor="end" font-size="10" fill="#9AA3BC">${v.toString().replace(".", ",")}</text>`;
  }
  out += `<line x1="${PADL}" y1="${base}" x2="${W - PADR}" y2="${base}" stroke="#C9CEE3" stroke-width="1.5"/>`;

  dados.forEach((d, i) => {
    const bh = (d.v / max) * ih;
    const bx = PADL + slot * i + (slot - barW) / 2;
    out += `<rect x="${bx.toFixed(1)}" y="${(base - bh).toFixed(1)}" width="${barW}" height="${bh.toFixed(1)}" rx="8" fill="url(#barGrad)"/>`;
    out += `<text x="${(bx + barW / 2).toFixed(1)}" y="${(base - bh - 8).toFixed(1)}" text-anchor="middle" font-size="11.5" font-weight="700" fill="#131A2E">${d.v.toString().replace(".", ",")}</text>`;
    out += `<text x="${(bx + barW / 2).toFixed(1)}" y="${H - 10}" text-anchor="middle" font-size="10.5" fill="#9AA3BC">${d.canal}</text>`;
  });

  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%; height:auto" role="img" aria-label="Receita por canal em R$ milhões">
    <defs><linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#06B6D4"/><stop offset="100%" stop-color="#4F46E5"/>
    </linearGradient></defs>
    ${out}
    <text x="${PADL}" y="${PADT - 4}" font-size="10.5" fill="#9AA3BC">R$ milhões</text>
  </svg>`;
}

// Donut: participação por categoria
function donutChart() {
  const dados = [
    { cat: "Eletroportáteis", v: 38, cor: "#4F46E5" },
    { cat: "Telefonia", v: 27, cor: "#06B6D4" },
    { cat: "Casa inteligente", v: 21, cor: "#8B5CF6" },
    { cat: "Acessórios", v: 14, cor: "#F59E0B" },
  ];
  const R = 62, C = 2 * Math.PI * R;
  let acc = 0;
  const segs = dados.map(d => {
    const seg = (d.v / 100) * C;
    const s = `<circle cx="80" cy="80" r="${R}" fill="none" stroke="${d.cor}" stroke-width="22"
      stroke-dasharray="${seg.toFixed(2)} ${(C - seg).toFixed(2)}" stroke-dashoffset="${(-acc).toFixed(2)}"
      transform="rotate(-90 80 80)" stroke-linecap="butt"/>`;
    acc += seg;
    return s;
  }).join("");
  const legenda = dados.map(d => `
    <div style="display:flex; align-items:center; gap:8px; padding:5px 0; font-size:13px">
      <span style="width:12px; height:12px; border-radius:4px; background:${d.cor}; flex-shrink:0"></span>
      <span style="color:var(--muted)">${d.cat}</span>
      <strong style="margin-left:auto">${d.v}%</strong>
    </div>`).join("");
  return `
    <div style="display:flex; align-items:center; gap:22px; flex-wrap:wrap">
      <svg viewBox="0 0 160 160" style="width:170px; height:170px; flex-shrink:0" role="img" aria-label="Participação por categoria">
        <circle cx="80" cy="80" r="${R}" fill="none" stroke="#F1F3F9" stroke-width="22"/>
        ${segs}
        <text x="80" y="76" text-anchor="middle" font-size="21" font-weight="800" fill="#131A2E" font-family="Sora, sans-serif">38%</text>
        <text x="80" y="92" text-anchor="middle" font-size="9" fill="#9AA3BC">maior categoria</text>
      </svg>
      <div style="flex:1; min-width:180px">${legenda}</div>
    </div>`;
}

// Funil de conversão
function funnelChart() {
  const etapas = [
    { nome: "Visitantes", v: 320000, cor: "#4F46E5" },
    { nome: "Viu produto", v: 180000, cor: "#6D5AE8" },
    { nome: "Carrinho", v: 62000, cor: "#8B5CF6" },
    { nome: "Compra", v: 24000, cor: "#06B6D4" },
  ];
  const W = 640, H = 240, max = etapas[0].v;
  const Hmid = 46; // altura de cada faixa
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%; height:auto" role="img" aria-label="Funil de conversão do e-commerce">
    ${etapas.map((e, i) => {
      const wTop = (e.v / max) * (W - 220);
      const wBot = (etapas[i + 1] ? etapas[i + 1].v / max : e.v / max / 1.3) * (W - 220);
      const y = 14 + i * (Hmid + 8);
      const cx = W / 2;
      const pct = ((e.v / max) * 100).toFixed(1).replace(".", ",");
      return `<g>
        <path d="M ${cx - wTop / 2} ${y} L ${cx + wTop / 2} ${y} L ${cx + wBot / 2} ${y + Hmid} L ${cx - wBot / 2} ${y + Hmid} Z" fill="${e.cor}" opacity="${1 - i * 0.13}"/>
        <text x="${cx - wTop / 2 - 12}" y="${y + Hmid / 2 + 4}" text-anchor="end" font-size="12" fill="#5D6781" font-weight="600">${e.nome}</text>
        <text x="${cx - wTop / 2 - 12}" y="${y + Hmid / 2 + 18}" text-anchor="end" font-size="10.5" fill="#9AA3BC">${e.v.toLocaleString("pt-BR")} · ${pct}%</text>
      </g>`;
    }).join("")}
  </svg>`;
}

// Gauge de meta anual
function gaugeChart() {
  const pct = 87;
  const R = 70, CIRC = Math.PI * R;
  return `<svg viewBox="0 0 200 118" style="width:100%; max-width:240px; margin:0 auto" role="img" aria-label="Meta anual atingida">
    <defs><linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#06B6D4"/><stop offset="100%" stop-color="#4F46E5"/>
    </linearGradient></defs>
    <path d="M 20 100 A ${R} ${R} 0 0 1 180 100" fill="none" stroke="#F1F3F9" stroke-width="17" stroke-linecap="round"/>
    <path d="M 20 100 A ${R} ${R} 0 0 1 180 100" fill="none" stroke="url(#gaugeGrad)" stroke-width="17" stroke-linecap="round"
      stroke-dasharray="${((pct / 100) * CIRC).toFixed(1)} ${CIRC.toFixed(1)}"/>
    <text x="100" y="88" text-anchor="middle" font-size="30" font-weight="800" fill="#131A2E" font-family="Sora, sans-serif">${pct}%</text>
    <text x="100" y="106" text-anchor="middle" font-size="10" fill="#9AA3BC">da meta anual</text>
  </svg>`;
}

// ---------- Página ----------

window.PAGES.dashboard = () => {
  const kpis = [
    { label: "Receita acumulada", value: "R$ 48,2 mi", delta: "+12,4% vs 2025", dir: "up" },
    { label: "Pedidos", value: "18.460", delta: "+8,1% vs 2025", dir: "up" },
    { label: "Ticket médio", value: "R$ 2.611", delta: "+4,0% vs 2025", dir: "up" },
    { label: "NPS", value: "82", delta: "+6 pts no ano", dir: "up" },
    { label: "Churn", value: "3,1%", delta: "-0,8 p.p. no ano", dir: "down" },
    { label: "SLA das automações", value: "99,2%", delta: "+0,2 p.p. acima da meta", dir: "up" },
  ];

  const kpiCards = kpis.map(k => {
    const badge = k.dir === "up" ? "badge-ok" : "badge-ok";
    const arrow = k.delta.startsWith("-") ? "▾" : "▴";
    return `
      <div class="kpi">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-hint"><span class="badge ${badge}">${arrow} ${k.delta.replace("-", "").replace("+", "")}</span></div>
      </div>`;
  }).join("");

  return `
    <span class="eyebrow"><span class="dot"></span> Demo de Dashboard</span>
    <h1 class="page-title">Scorecard executivo <span class="accent">Varejo+</span></h1>
    <p class="page-sub">
      Exemplo fictício do que sua empresa recebe: um painel único, ao vivo e em linguagem de negócio.
      Filtro simulado: <strong>Ano 2026 &middot; Todas as unidades</strong>.
    </p>

    <div class="demo-note" style="margin-top:18px">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.5"/></svg>
      Demonstração com dados fictícios — em um projeto real, este painel se conectaria ao seu ERP, CRM e e-commerce.
    </div>

    <div class="kpis">${kpiCards}</div>

    <section class="section-gap grid grid-2">
      <div class="card chart-card">
        <h3>Receita mensal — R$ mi</h3>
        <div class="cc-sub">2026 vs 2025 &middot; crescimento sustentado em todos os meses</div>
        <div class="chart-body">${lineChart()}</div>
      </div>
      <div class="card chart-card">
        <h3>Receita por canal — R$ mi</h3>
        <div class="cc-sub">Acumulado do ano &middot; e-commerce lidera com 35%</div>
        <div class="chart-body">${barChart()}</div>
      </div>
      <div class="card chart-card">
        <h3>Participação por categoria</h3>
        <div class="cc-sub">Mix de vendas &middot; participação no faturamento</div>
        <div class="chart-body">${donutChart()}</div>
      </div>
      <div class="card chart-card">
        <h3>Funil de conversão — e-commerce</h3>
        <div class="cc-sub">Jornada do visitante à compra &middot; média dos últimos 90 dias</div>
        <div class="chart-body">${funnelChart()}</div>
      </div>
    </section>

    <section class="section-gap grid" style="grid-template-columns: 1fr 2fr; align-items:start">
      <div class="card chart-card" style="text-align:center">
        <h3>Meta anual</h3>
        <div class="cc-sub">87% da meta já realizada em outubro</div>
        ${gaugeChart()}
        <span class="badge badge-ok" style="margin-top:12px">Projeção: 104% em dezembro</span>
      </div>
      <div class="card chart-card">
        <h3>Top 5 produtos</h3>
        <div class="cc-sub">Maiores faturamentos do ano</div>
        <table class="data-table">
          <thead><tr><th>Produto</th><th>Categoria</th><th class="num">Receita</th><th class="num">vs 2025</th></tr></thead>
          <tbody>
            <tr><td>SmartFone Ultra 12</td><td>Telefonia</td><td class="num">R$ 4,8 mi</td><td class="num"><span class="badge badge-ok">▴ +21%</span></td></tr>
            <tr><td>Robô Aspirador V9</td><td>Casa inteligente</td><td class="num">R$ 3,9 mi</td><td class="num"><span class="badge badge-ok">▴ +34%</span></td></tr>
            <tr><td>Fone BT Studio X</td><td>Acessórios</td><td class="num">R$ 3,1 mi</td><td class="num"><span class="badge badge-ok">▴ +12%</span></td></tr>
            <tr><td>Cafeteira Prime</td><td>Eletroportáteis</td><td class="num">R$ 2,7 mi</td><td class="num"><span class="badge badge-ok">▴ +7%</span></td></tr>
            <tr><td>TV OLED 55"</td><td>Eletroportáteis</td><td class="num">R$ 2,4 mi</td><td class="num"><span class="badge badge-bad">▾ -3%</span></td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section-gap">
      <div class="cta-banner">
        <div>
          <h2>Imagine este painel com seus números reais.</h2>
          <p>No piloto, conectamos suas fontes e entregamos o scorecard da sua empresa em até 10 dias.</p>
        </div>
        <button class="btn btn-white" data-goto="contato">Quero o meu</button>
      </div>
    </section>
  `;
};
