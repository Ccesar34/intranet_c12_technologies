/* =========================================================
   C12 TECHNOLOGIES — Site institucional | app.js (orquestração)
   Cada página vive em js/pages/<modulo>.js e se registra
   em window.PAGES. Para adicionar um módulo novo:
   1) crie js/pages/meumodulo.js registrando window.PAGES.meumodulo
   2) adicione o <script> e o item do menu no index.html
   3) inclua o título em TITLES abaixo
   ========================================================= */

window.PAGES = window.PAGES || {};

/* ---------------------------------------------------------
   Menu hambúrguer
   · Desktop (>900px): recolhe/expande a sidebar (memória)
   · Mobile  (≤900px): abre/fecha a gaveta lateral + véu
   --------------------------------------------------------- */
(() => {
  const appEl = document.getElementById('app');
  const burger = document.getElementById('hamburger');           // dentro da sidebar
  const burgerMobile = document.getElementById('hamburgerMobile'); // topo mobile
  const backdrop = document.getElementById('backdrop');
  if (!appEl) return;

  const isMobile = () => window.matchMedia('(max-width: 900px)').matches;
  const drawerOpen = () => appEl.classList.contains('mobile-open');

  const setDrawer = (open) => {
    appEl.classList.toggle('mobile-open', open);
    document.body.style.overflow = (open && isMobile()) ? 'hidden' : '';
  };

  const toggle = () => {
    if (isMobile()) {
      setDrawer(!drawerOpen());
    } else {
      appEl.classList.toggle('collapsed');
      localStorage.setItem('c12-menu-recolhido', appEl.classList.contains('collapsed') ? '1' : '0');
    }
  };

  // Estado inicial
  if (isMobile()) setDrawer(false);
  else if (localStorage.getItem('c12-menu-recolhido') === '1') appEl.classList.add('collapsed');

  burger && burger.addEventListener('click', toggle);
  burgerMobile && burgerMobile.addEventListener('click', toggle);
  backdrop && backdrop.addEventListener('click', () => setDrawer(false));

  // Se a janela cresce, garante fechamento da gaveta
  window.addEventListener('resize', () => { if (!isMobile()) setDrawer(false); });

  // Exposto para navegação fechar a gaveta ao trocar de página
  window.C12closeDrawer = () => setDrawer(false);
})();

const TITLES = {
  home: "Início",
  solucoes: "Soluções",
  cases: "Cases de Sucesso",
  metodologia: "Metodologia",
  sobre: "Sobre Nós",
  dashboard: "Demo de Dashboard",
  contato: "Contato",
};

const content = document.getElementById("content");

function navigate(page) {
  if (!window.PAGES[page]) page = "home";
  content.innerHTML = window.PAGES[page]();
  document.querySelectorAll(".menu-item").forEach(el =>
    el.classList.toggle("active", el.dataset.page === page)
  );
  if (location.hash !== "#" + page) history.replaceState(null, "", "#" + page);
  window.scrollTo({ top: 0 });

  // No mobile, fecha a gaveta ao navegar
  if (window.matchMedia('(max-width: 900px)').matches && window.C12closeDrawer) {
    window.C12closeDrawer();
  }

  // Hook opcional executado pela página ativa (ex.: interatividade de gráficos)
  if (typeof window.PAGES[page + "_after"] === "function") {
    window.PAGES[page + "_after"]();
  }
}

// Navegação por cliques em qualquer elemento com data-goto
document.addEventListener("click", e => {
  const goto = e.target.closest("[data-goto]");
  if (goto) {
    e.preventDefault();
    navigate(goto.dataset.goto);
  }
});

// Itens do menu lateral
document.querySelectorAll(".menu-item").forEach(el =>
  el.addEventListener("click", e => {
    e.preventDefault();
    navigate(el.dataset.page);
  })
);

// Botões voltar/avançar do navegador
window.addEventListener("hashchange", () => {
  const page = (location.hash || "#home").slice(1);
  if (!window.PAGES[page]) return navigate("home");
  const active = document.querySelector(".menu-item.active");
  if (!active || active.dataset.page !== page) navigate(page);
});

// Rota inicial
navigate((location.hash || "#home").slice(1));
