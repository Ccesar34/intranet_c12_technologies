/* =========================================================
   C12 TECHNOLOGIES — Página: CONTATO
   Formulário demonstrativo (sem backend nesta versão).
   ========================================================= */

window.PAGES.contato = () => `
  <span class="eyebrow"><span class="dot"></span> Contato</span>
  <h1 class="page-title">Vamos falar sobre <span class="accent">o seu próximo projeto</span>.</h1>
  <p class="page-sub">
    Preencha o formulário e nossa equipe retorna em até 1 dia útil com uma proposta de
    diagnóstico gratuito. Sem robôs de atendimento: quem responde é gente de verdade.
  </p>

  <section class="section-gap contact-grid">
    <!-- FORMULÁRIO -->
    <div class="card">
      <h2 class="section-title" style="margin-bottom:16px">Conte um pouco do seu desafio</h2>
      <form id="c12Form" class="form-grid">
        <div class="field">
          <label for="f-nome">Nome completo *</label>
          <input id="f-nome" type="text" placeholder="Ex.: Ana Ribeiro" required>
        </div>
        <div class="field">
          <label for="f-empresa">Empresa *</label>
          <input id="f-empresa" type="text" placeholder="Ex.: Empresa LTDA" required>
        </div>
        <div class="field">
          <label for="f-email">E-mail corporativo *</label>
          <input id="f-email" type="email" placeholder="nome@empresa.com.br" required>
        </div>
        <div class="field">
          <label for="f-tel">Telefone / WhatsApp</label>
          <input id="f-tel" type="tel" placeholder="(11) 99999-0000">
        </div>
        <div class="field full">
          <label for="f-interesse">Qual frente mais interessa? *</label>
          <select id="f-interesse" required>
            <option value="">Selecione...</option>
            <option>Análise de Dados</option>
            <option>Business Intelligence</option>
            <option>Automação de Processos</option>
            <option>Agentes de IA internos</option>
            <option>Ainda não sei — quero o diagnóstico</option>
          </select>
        </div>
        <div class="field full">
          <label for="f-msg">Descreva o desafio (opcional)</label>
          <textarea id="f-msg" placeholder="Ex.: Fechamento mensal leva 3 dias de planilhas e sempre atrasa..."></textarea>
        </div>
        <div class="field full" style="flex-direction:row; align-items:center; gap:10px">
          <button type="submit" class="btn btn-primary">Enviar mensagem</button>
          <button type="reset" class="btn btn-ghost">Limpar</button>
        </div>
      </form>
      <div id="formOk" style="display:none; margin-top:16px" class="badge badge-ok">
        ✓ Mensagem registrada! (protótipo — nenhum dado é enviado de verdade)
      </div>
    </div>

    <!-- INFORMAÇÕES -->
    <div class="contact-info">
      <div class="card ci-item">
        <div class="ci-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
        </div>
        <div>
          <strong>E-mail</strong>
          <span>contato@c12tech.com.br</span>
        </div>
      </div>
      <div class="card ci-item">
        <div class="ci-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>
        </div>
        <div>
          <strong>Telefone / WhatsApp</strong>
          <span>+55 11 4000-0012</span>
        </div>
      </div>
      <div class="card ci-item">
        <div class="ci-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <strong>Escritório</strong>
          <span>Av. Paulista, 1200 — Bela Vista, São Paulo/SP</span>
        </div>
      </div>
      <div class="card ci-item">
        <div class="ci-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
        </div>
        <div>
          <strong>Horário de atendimento</strong>
          <span>Segunda a sexta, das 9h às 18h (BRT)</span>
        </div>
      </div>

      <div class="card" style="background:var(--indigo-soft); border-color:#C7CBF8">
        <h3 style="font-size:15px; margin-bottom:6px">Diagnóstico gratuito</h3>
        <p style="font-size:13px; color:var(--muted)">
          Workshop de 2 horas em que mapeamos seus processos e apontamos as 3 automações ou
          análises com maior retorno — sem custo e sem compromisso.
        </p>
      </div>
    </div>
  </section>
`;

// Interatividade da página de contato: submit demonstrativo
window.PAGES.contato_after = () => {
  const form = document.getElementById("c12Form");
  const ok = document.getElementById("formOk");
  if (!form || !ok) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    ok.style.display = "inline-flex";
    form.querySelectorAll("input, select, textarea").forEach(el => el.value = "");
    setTimeout(() => { ok.style.display = "none"; }, 6000);
  });
};
