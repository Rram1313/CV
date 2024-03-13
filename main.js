function imprimir() {
  window.print();
}
// Funcion para ocultar y mostrar página.
document.addEventListener("DOMContentLoaded", function () {
  const desplegarButton = document.querySelector("#desplegar");
  const contenedor = document.querySelector(".ocultar");
  let estaOculto = true;

  desplegarButton.addEventListener("click", () => {
    if (estaOculto) {
      contenedor.style.maxHeight = contenedor.scrollHeight + "px";
      desplegarButton.textContent = "-";
    } else {
      contenedor.style.maxHeight = "0";
      desplegarButton.textContent = "+";
    }
    estaOculto = !estaOculto;
  });

  // Ajustar la altura máxima después de cargar la página
  setTimeout(() => {
    contenedor.style.maxHeight = "0";
  }, 100);
});

// Funcion para ocultar y mostrar página.
document.addEventListener("DOMContentLoaded", function () {
  const desplegarButton2 = document.querySelector("#desplegar2");
  const contenedor2 = document.querySelector(".ocultar2");
  let estaOculto2 = true;

  desplegarButton2.addEventListener("click", () => {
    if (estaOculto2) {
      contenedor2.style.maxHeight = contenedor2.scrollHeight + "px";
      desplegarButton2.textContent = "-";
    } else {
      contenedor2.style.maxHeight = "0";
      desplegarButton2.textContent = "+";
    }
    estaOculto2 = !estaOculto2;
  });

  // Ajustar la altura máxima después de cargar la página
  setTimeout(() => {
    contenedor2.style.maxHeight = "0";
  }, 100);
});

// Funcion para ocultar y mostrar página.
document.addEventListener("DOMContentLoaded", function () {
  const desplegarButton3 = document.querySelector("#desplegar3");
  const contenedor3 = document.querySelector(".ocultar3");
  let estaOculto3 = true;

  desplegarButton3.addEventListener("click", () => {
    if (estaOculto3) {
      contenedor3.style.maxHeight = contenedor3.scrollHeight + "px";
      desplegarButton3.textContent = "-";
    } else {
      contenedor3.style.maxHeight = "0";
      desplegarButton3.textContent = "+";
    }
    estaOculto3 = !estaOculto3;
  });

  // Ajustar la altura máxima después de cargar la página
  setTimeout(() => {
    contenedor3.style.maxHeight = "0";
  }, 100);
});

// Funcion para ocultar y mostrar página.
document.addEventListener("DOMContentLoaded", function () {
  const desplegarButton4 = document.querySelector("#desplegar4");
  const contenedor4 = document.querySelector(".ocultar4");
  let estaOculto4 = true;

  desplegarButton4.addEventListener("click", () => {
    if (estaOculto4) {
      contenedor4.style.maxHeight = contenedor4.scrollHeight + "px";
      desplegarButton4.textContent = "-";
    } else {
      contenedor4.style.maxHeight = "0";
      desplegarButton4.textContent = "+";
    }
    estaOculto4 = !estaOculto4;
  });

  // Ajustar la altura máxima después de cargar la página
  setTimeout(() => {
    contenedor4.style.maxHeight = "0";
  }, 100);
});

// Funcion para ocultar y mostrar página.
document.addEventListener("DOMContentLoaded", function () {
  const desplegarButton5 = document.querySelector("#desplegar5");
  const contenedor5 = document.querySelector(".ocultar5");
  let estaOculto5 = true;

  desplegarButton5.addEventListener("click", () => {
    if (estaOculto5) {
      contenedor5.style.maxHeight = contenedor5.scrollHeight + "px";
      desplegarButton5.textContent = "-";
    } else {
      contenedor5.style.maxHeight = "0";
      desplegarButton5.textContent = "+";
    }
    estaOculto5 = !estaOculto5;
  });

  // Ajustar la altura máxima después de cargar la página
  setTimeout(() => {
    contenedor5.style.maxHeight = "0";
  }, 100);
});