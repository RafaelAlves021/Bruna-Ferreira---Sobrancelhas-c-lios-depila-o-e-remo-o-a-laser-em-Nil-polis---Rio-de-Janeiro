/**
 * script.js — Interações e dinamismo da Landing Page
 * Espaço Bruna Ferreira
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Atualização automática do ano no rodapé
  const elementoAno = document.getElementById('anoAtual');
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }

  // 2. Fechar o menu móvel ao clicar numa ligação
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('menuPrincipal');
  
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // 3. Efeito suave de entrada dos elementos com Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // Deixa de observar após a animação
      }
    });
  }, observerOptions);

  // Aplica a classe de animação aos blocos principais
  const secoesParaAnimar = document.querySelectorAll('.procedure-card, .diff-card, .testimonial-card, .gallery-item');
  secoesParaAnimar.forEach(el => {
    el.classList.add('fade-in-section');
    observer.observe(el);
  });

});