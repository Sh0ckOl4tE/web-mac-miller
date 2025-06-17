//Captura de envío de formulario y muestra de mensaje

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    alert(`Gracias por tu mensaje, ${nombre}.`);
    form.reset();
  });
});

// Efecto fade-in al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
  const secciones = document.querySelectorAll(".fade-in");

  const mostrarSeccion = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Solo se anima una vez
      }
    });
  };

  const options = {
    threshold: 0.2 // Cuánto del elemento debe ser visible
  };

  const observer = new IntersectionObserver(mostrarSeccion, options);

  secciones.forEach(seccion => {
    observer.observe(seccion);
  });
});

// Cambiar el color del fondo al entrar en cada sección
const seccionesColor = document.querySelectorAll("section[data-color]");

const cambiarFondo = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nuevoColor = entry.target.getAttribute("data-color");
      document.body.style.backgroundColor = nuevoColor;
    }
  });
};

const observerColor = new IntersectionObserver(cambiarFondo, {
  threshold: 0.4
});

seccionesColor.forEach(seccion => {
  observerColor.observe(seccion);
});

