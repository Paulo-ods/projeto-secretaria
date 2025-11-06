    document.getElementById("leadForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Obrigada por se inscrever! Entraremos em contato em breve.");
      this.reset();
    });



document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnLerMais');
  const resumo = document.getElementById('resumoMobile');

  // Se qualquer um não existir (ex.: em desktop), aborta sem erro
  if (!btn || !resumo) return;

  btn.addEventListener('click', () => {
    // Texto completo (pode ajustar)
    const full = "O programa foi criado para guiar você passo a passo em um processo prático e inspirador. Cada etapa foi pensada para que secretárias possam aplicar imediatamente o que aprendem — transformando hábitos, comunicação e performance profissional.";

    // Troca o texto e remove o botão (ou esconda)
    resumo.innerText = full;
    btn.classList.add('hidden');

    // Opcional: animação de expansão (suave)
    resumo.style.transition = 'max-height 0.45s ease, opacity 0.35s ease';
    resumo.style.overflow = 'hidden';
    resumo.style.opacity = '0';
    resumo.style.maxHeight = '0px';

    // força repaint antes de abrir
    requestAnimationFrame(() => {
      resumo.style.opacity = '1';
      resumo.style.maxHeight = '400px'; // ajustar conforme texto
    });
  });
});


    // Menu mobile
    const btn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    btn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Animações suaves com IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));