// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Obtener todos los botones de filtro
  const filterButtons = document.querySelectorAll("[data-filter]");
  // Obtener todos los elementos de habilidades
  const skillItems = document.querySelectorAll(".skill-item");

  // Agregar evento click a cada botón de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover la clase active de todos los botones
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.remove("cv");
        btn.classList.add("btn-outline");
      });

      // Agregar la clase active al botón clickeado
      this.classList.add("active");
      this.classList.remove("btn-outline");
      this.classList.add("cv");

      // Obtener el valor del filtro
      const filterValue = this.getAttribute("data-filter");

      // Mostrar u ocultar las habilidades según el filtro
      skillItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Obtener todos los elementos de proyectos
  const projectItems = document.querySelectorAll(".project-item");

  // Agregar evento click a cada botón de filtro
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover la clase active de todos los botones
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");
      });

      // Agregar la clase active al botón clickeado
      this.classList.add("active");
      this.classList.remove("btn-outline-primary");
      this.classList.add("btn-primary");

      // Obtener el valor del filtro
      const filterValue = this.getAttribute("data-filter");

      // Mostrar u ocultar los proyectos según el filtro
      projectItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Definir el elemento personalizado
  class ProgressBar extends HTMLElement {
    #label;
    #progress;

    constructor() {
      super();
      this.#label = this.querySelector(".label");
      this.#progress = this.querySelector(".progress");
    }

    attributeChangedCallback(attribute, previous, current) {
      if (attribute === "aria-valuenow") {
        if (current >= 0 && current <= 100) {
          this.#progress.setAttribute("stroke-dashoffset", 100 - current);
          this.#label.innerText = current;
        }
      }
    }

    static get observedAttributes() {
      return ["aria-valuenow"];
    }
  }

  window.customElements.define("progress-bar", ProgressBar);

  // Filtro de habilidades
  document.querySelectorAll(".btn-group .btn").forEach((button) => {
    button.addEventListener("click", function () {
      document
        .querySelectorAll(".btn-group .btn")
        .forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");
      const skills = document.querySelectorAll(".skill-item");

      skills.forEach((skill) => {
        if (filter === "all" || skill.classList.contains(filter)) {
          skill.style.display = "block";
        } else {
          skill.style.display = "none";
        }
      });
    });
  });
});
