const carruseles = document.querySelectorAll('.carrusel-contenido');

carruseles.forEach((carrusel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  // --- De JAVA si no tengo idea de nada y como la animación no me quedaba tal cual está en figma le pregunté a gemini y me explicó lo de js ---
  carrusel.addEventListener('mousedown', (e) => {
    isDown = true;
    carrusel.style.cursor = 'grabbing';
    startX = e.pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
  });

  carrusel.addEventListener('mouseleave', () => {
    isDown = false;
    carrusel.style.cursor = 'grab';
  });

  carrusel.addEventListener('mouseup', () => {
    isDown = false;
    carrusel.style.cursor = 'grab';
  });

  carrusel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 1; 
    carrusel.scrollLeft = scrollLeft - walk;
  });

  carrusel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
  });

  carrusel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 1;
    carrusel.scrollLeft = scrollLeft - walk;
  });
});