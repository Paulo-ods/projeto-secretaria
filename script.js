    document.getElementById("leadForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Obrigada por se inscrever! Entraremos em contato em breve.");
      this.reset();
    });

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });