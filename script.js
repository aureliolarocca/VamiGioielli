function toggleMenu() {
  const menu = document.getElementById("ham-menu");
  const menuBtn = document.querySelector(".menu-btn");
  const logo = document.getElementById("logo");

  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menuBtn.style.display = "none";
    logo.style.marginLeft = "200px";
  } else {
    menuBtn.style.display = "block";
    logo.style.margin = "0 auto";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".slider");
  let index = 0;
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;
  let autoSlide;
  let startX = 0;
  let endX = 0;
  let isSwiping = false;
  const threshold = 50; // Minima distanza per considerare lo swipe
  const restartDelay = 4000; // Tempo di inattività prima di riavviare l’auto-slide

  // Funzione per aggiornare la posizione della slide
  function updateSlide() {
    slider.style.transform = `translateX(-${index * 100}vw)`;
  }

  // Funzione per avanzare automaticamente
  function nextSlide() {
    if (!isSwiping) {
      index = (index + 1) % totalSlides;
      updateSlide();
    }
  }

  // Avvia l'auto-slide
  function startAutoSlide() {
    clearInterval(autoSlide); // Evita doppie istanze
    autoSlide = setInterval(nextSlide, 3500);
  }

  startAutoSlide(); // Avvio iniziale

  // SWIPE SU TOUCH
  slider.addEventListener("touchstart", (e) => {
    clearInterval(autoSlide); // Ferma l'auto-slide mentre l'utente interagisce
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slider.addEventListener("touchend", () => {
    let diff = startX - endX;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        index = (index + 1) % totalSlides; // Swipe sinistra → immagine successiva
      } else {
        index = (index - 1 + totalSlides) % totalSlides; // Swipe destra → immagine precedente
      }
      updateSlide();
    }

    isSwiping = false; // Resetto la variabile per l'auto-slide

    // **Aspetta prima di riavviare l'auto-slide**
    setTimeout(() => {
      if (!isSwiping) startAutoSlide();
    }, restartDelay);
  });
});
