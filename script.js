document.addEventListener("DOMContentLoaded", () => {
  console.log("Moob Serviços carregado com sucesso.");

  /* ===============================
     SCROLL SUAVE PARA ÂNCORAS
  ================================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* ===============================
     BOTÃO COM FEEDBACK VISUAL
  ================================ */
  const actionButtons = document.querySelectorAll(".btn-primary");

  actionButtons.forEach(button => {
    button.addEventListener("click", function () {

      // Só aplica efeito se NÃO for link externo
      if (this.getAttribute("href") && this.getAttribute("href").startsWith("http")) {
        return; // deixa o link funcionar normal (ex: download APK)
      }

      // Efeito visual temporário
      this.classList.add("loading");
      const originalText = this.innerText;
      this.innerText = "Carregando...";

      setTimeout(() => {
        this.classList.remove("loading");
        this.innerText = originalText;
      }, 1500);
    });
  });


  /* ===============================
     ANIMAÇÃO AO SCROLL (REVEAL)
  ================================ */
  const revealElements = document.querySelectorAll(
    ".card, .plan-card, .pricing-description, .benefit-grid div"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // executa ao carregar
});