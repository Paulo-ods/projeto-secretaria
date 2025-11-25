document.getElementById("leadForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const button = document.getElementById("formButton");
  const originalHTML = button.innerHTML;

  // Loading visual
  button.disabled = true;
  button.innerHTML = `
    <div class="loading-icon"></div>
    Enviando...
  `;

  // Detecta cidade via API
  let cidade = "Não identificado";
  try {
    const resp = await fetch("https://ipapi.co/json/");
    if (resp.ok) {
      const data = await resp.json();
      cidade = data.city || "Não identificado";
    }
  } catch (err) {
    console.warn("Não foi possível obter a cidade");
  }

  // Espera um pouquinho pra animação
  setTimeout(() => {

    // Tag fixa (pode alterar)
   // const campanha = "Lead do site – Campanha X";

    // Monta a mensagem
    const texto = encodeURIComponent(
      `📨 *Novo Lead Recebido*\n\n` +
      `👤 Nome: ${nome}\n` +
      `📧 E-mail: ${email}\n` +
      `📍 Cidade: ${cidade}\n\n` +
      `📝 Mensagem:\n${mensagem}`
    );

    const numero = "5546988192326";

    // Detecta se é mobile
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    let url;

    if (isMobile) {
      // Abre app do WhatsApp
      url = `https://wa.me/${numero}?text=${texto}`;
    } else {
      // Abre versão Web
      url = `https://web.whatsapp.com/send?phone=${numero}&text=${texto}`;
    }

    // Abre WhatsApp
    window.open(url, "_blank");

    // Feedback visual
    button.innerHTML = "✨ Enviado!";
    button.classList.remove("bg-[#82466D]");
    button.classList.add("bg-green-600");

    document.getElementById("leadForm").reset();

    setTimeout(() => {
      button.disabled = false;
      button.classList.remove("bg-green-600");
      button.classList.add("bg-[#82466D]");
      button.innerHTML = originalHTML;
    }, 2000);

  }, 1200);
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