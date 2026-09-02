# Dev Portfolio — PFO1

## 📌 Descripción del proyecto

Este proyecto corresponde a la **Práctica Final Obligatoria 1 (PFO1)** y consiste en el desarrollo de un **Portfolio Web Personal** para presentar el perfil profesional, formación, habilidades, proyectos y medios de contacto del desarrollador.

El objetivo de la PFO1 fue aplicar conocimientos de desarrollo web para construir una interfaz profesional, responsive e interactiva, utilizando tecnologías del lado del cliente y realizando posteriormente su publicación en Internet.

El portfolio presenta las siguientes secciones principales:

* **Inicio:** presentación del perfil profesional.
* **Acerca de:** información y descripción profesional.
* **Habilidades:** tecnologías y conocimientos.
* **Educación:** formación académica.
* **Proyectos:** presentación y filtrado de proyectos.
* **Contacto:** medios para establecer comunicación.
* **Currículum:** acceso y descarga del CV.

---

## 🌐 Demo

La aplicación se encuentra desplegada y disponible públicamente en Vercel:

**https://dev-portfolio-2025.vercel.app/**

---

## 📂 Repositorio

Repositorio GitHub:

**https://github.com/JoseLuisGalvis/dev-portfolio-2025**

---

## 🛠️ Tecnologías utilizadas

### Desarrollo

* **HTML5** — estructura semántica y organización del contenido.
* **CSS3** — estilos, diseño responsive, variables CSS, transiciones y efectos visuales.
* **JavaScript** — comportamiento dinámico e interacción con el usuario.

### Librerías y frameworks

* **Bootstrap 5.3** — sistema de grillas, componentes y adaptación responsive.
* **AOS (Animate On Scroll)** — animaciones al desplazarse por la página.
* **GSAP** — animaciones y efectos dinámicos.
* **Swiper** — componentes de navegación y presentación de contenidos.
* **Remix Icon** — utilización de iconografía.
* **Google Fonts / Poppins** — tipografía utilizada en la interfaz.

Las librerías externas se incorporan mediante **CDN**, evitando incorporar físicamente sus archivos al repositorio.

---

## 🎨 Decisiones de diseño y desarrollo

### 1. Portfolio de una sola página

Se optó por una estructura **Single Page** para concentrar toda la información profesional en una única experiencia de navegación.

Las diferentes secciones se encuentran identificadas mediante anclas:

```text
Inicio
  ↓
Acerca de
  ↓
Habilidades
  ↓
Educación
  ↓
Proyectos
  ↓
Contacto
```

Esta decisión permite acceder rápidamente a cada contenido desde la barra de navegación sin necesidad de cargar diferentes páginas HTML.

### 2. Diseño responsive

Se utilizó **Bootstrap 5** como apoyo para implementar una interfaz adaptable a diferentes tamaños de pantalla.

La utilización de clases responsive y del sistema de grillas permite que el contenido se reorganice en dispositivos de escritorio, tablets y teléfonos móviles.

### 3. Diseño visual mediante variables CSS

Se definieron variables CSS en `:root` para centralizar los principales colores utilizados por la aplicación:

```css
:root {
  --primary-color: #231f20;
  --secondary-color: #595959;
  --background-light: #f5f5f5;
  --accent-color: #0077b6;
  --cta-color: #f25c05;
  --success-color: #2a9d8f;
}
```

Esta decisión facilita el mantenimiento y permite modificar la identidad visual del portfolio desde un único lugar.

### 4. Animaciones e interacción

Se incorporaron animaciones para mejorar la experiencia de usuario sin modificar la funcionalidad principal del portfolio.

Entre ellas se encuentran:

* Animaciones de entrada mediante **AOS**.
* Transiciones CSS.
* Efectos `hover`.
* Animaciones y transformaciones 3D sobre imágenes.
* Efectos dinámicos mediante **GSAP**.
* Componentes interactivos para el filtrado de habilidades y proyectos.

El objetivo fue proporcionar una experiencia visual más dinámica manteniendo una navegación sencilla.

### 5. Filtrado dinámico

Se implementó JavaScript para permitir filtrar las habilidades y proyectos según categorías.

El usuario puede seleccionar un criterio y el script muestra u oculta dinámicamente los elementos correspondientes sin necesidad de recargar la página.

### 6. Componente Web personalizado

Como parte de la implementación se desarrolló un **Custom Element** denominado:

```html
<progress-bar>
```

Este componente permite representar visualmente el nivel de determinadas habilidades mediante una barra de progreso circular.

La implementación utiliza la API **Web Components / Custom Elements** de JavaScript.

---

## 📁 Estructura del proyecto

La estructura principal del proyecto es:

```text
dev-portfolio-2025/
│
├── index.html
│
├── vercel.json
│
└── public/
    │
    ├── css/
    │   └── styles.css
    │
    ├── js/
    │   └── script.js
    │
    ├── images/
    │   ├── aboutUs.jpeg
    │   ├── foto.png
    │   ├── dev.png
    │   └── ...
    │
    ├── icons/
    │   └── ws.png
    │
    └── pdf/
        └── CV_JOSE_GALVIS_FULL_STACK_DEV_DIC2025.pdf
```

La separación de HTML, CSS, JavaScript y recursos multimedia permite mantener una estructura sencilla y comprensible para un proyecto de estas características.

---

## 🚀 Despliegue en Vercel

El proyecto fue desplegado utilizando **Vercel**.

Debido a que los recursos estáticos del proyecto se encuentran organizados dentro de la carpeta `public`, se incorporó un archivo `vercel.json` para configurar el comportamiento del servidor y el acceso a los recursos.

La configuración establece el uso de:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ]
}
```

Además, se definieron rutas específicas para los recursos CSS, JavaScript, imágenes, iconos y archivos PDF.

De esta manera, se garantiza que los recursos referenciados desde `index.html` puedan ser encontrados correctamente una vez desplegada la aplicación.

---

## 🔀 Control de versiones

El desarrollo fue gestionado mediante **Git**, utilizando **GitHub** como repositorio remoto.

El control de versiones permitió:

* Registrar los cambios realizados.
* Mantener un historial de desarrollo.
* Recuperar versiones anteriores.
* Facilitar la publicación y actualización del proyecto.
* Mantener el código fuente disponible en un repositorio remoto.

---

## 🤖 Declaración de uso de Inteligencia Artificial

Durante el desarrollo de esta PFO1 se utilizó **Inteligencia Artificial como herramienta de asistencia**.

La IA fue utilizada como apoyo para:

* Consultar conceptos relacionados con desarrollo web.
* Analizar alternativas de implementación.
* Resolver problemas técnicos encontrados durante el desarrollo.
* Revisar y mejorar fragmentos de código.
* Proponer alternativas de diseño e interacción.
* Facilitar tareas de documentación.

El uso de IA se realizó como **herramienta de asistencia y aprendizaje**, sin delegar en ella la responsabilidad final sobre el proyecto.

Las propuestas obtenidas mediante IA fueron revisadas, evaluadas y adaptadas al contexto del proyecto antes de ser incorporadas.

La responsabilidad sobre las decisiones de diseño, implementación, integración y funcionamiento final de la aplicación corresponde al autor.

---

## 👤 Autor

**José Luis Galvis Escobar**

**Desarrollador Full Stack**

---

## 📄 PFO1

Proyecto desarrollado como parte de la **Práctica Final Obligatoria 1 (PFO1)**.

**Año:** 2025
