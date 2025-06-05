const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');
  let currentIndex = 0;

  function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
  }
  btnNext.addEventListener('click', () => {
    showNextSlide();
    resetInterval();
  });

  btnPrev.addEventListener('click', () => {
    showPrevSlide();
    resetInterval();
  });

  // Slider automático cada 4 segundos
  let slideInterval = setInterval(showNextSlide, 4000);

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showNextSlide, 4000);
  }

  function abrirFormulario() {
    document.getElementById('fondo-oscuro').classList.remove('oculto');
    document.getElementById('formulario-edicion').classList.remove('oculto');
    document.body.classList.add('body-bloqueado');

    document.getElementById('titulo-formulario').textContent = 'Editar producto';
    document.getElementById('campo-seccion').classList.add('oculto');
  }
  function abrirFormularioAgregar() {
    document.getElementById('fondo-oscuro').classList.remove('oculto');
    document.getElementById('formulario-edicion').classList.remove('oculto');
    document.body.classList.add('body-bloqueado');

    document.getElementById('titulo-formulario').textContent = 'Agregar producto';
    document.getElementById('campo-seccion').classList.remove('oculto');
}

  function cerrarFormulario() {
    document.getElementById('fondo-oscuro').classList.add('oculto');
    document.getElementById('formulario-edicion').classList.add('oculto');
    document.body.classList.remove('body-bloqueado');
  }

