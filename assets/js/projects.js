document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = localStorage.getItem("language") || "es";

    const translations = {
        es: {
            welcome: "Bienvenid@ a mi mundo digital",
            description: "Transformando ideas en soluciones digitales",
            projects: "Mis Proyectos",
            projectsDesc: "He desarrollado proyectos web utilizando HTML, CSS, JavaScript y Bootstrap para crear interfaces responsivas, funcionales y atractivas. HTML proporciona una estructura clara, CSS mejora el diseño visual y la adaptabilidad, JavaScript agrega interactividad, y Bootstrap asegura un desarrollo ágil y responsive. Cada proyecto refleja mi enfoque en la eficiencia y la experiencia del usuario.",
            projectTitles: [
                "Front End Store",
                "Landing Page",
                "Festival De Musica",
                "Cuppon Page",
                "Inmobiliaria",
                "Todo List",
                "Api Conversor"
            ],
            projectDescriptions: [
                "Un proyecto de e-commerce que simula una tienda en línea con un diseño responsive, utilizando HTML y CSS.",
                "Un blog sencillo desarrollado con HTML y CSS que permite la visualización de artículos relacionados con el mundo del café.",
                "Este proyecto es una página web interactiva diseñada para promocionar y gestionar un festival de música. El sitio ofrece una experiencia visual y dinámica para los usuarios interesados en el evento, con una interfaz intuitiva y moderna.",
                "Un proyecto web que simula una página de cupones y descuentos. Utiliza HTML, Bootstrap y CSS para crear una interfaz visual atractiva y funcional que permite a los usuarios visualizar diversas promociones.",
                "Una aplicación web de inmobiliaria que permite mostrar propiedades en venta y alquiler. Desarrollado con HTML, CSS, y JavaScript, incluye una interfaz de usuario intuitiva y fácil de usar.",
                "Un gestor de tareas simple, donde los usuarios pueden añadir, editar y eliminar tareas. El proyecto utiliza JavaScript para manipular las tareas y almacenar los cambios de manera eficiente.",
                "Una API diseñada para convertir entre diferentes unidades de medida. Utiliza JavaScript para realizar conversiones precisas y dinámicas según la selección del usuario."
            ],
            footer: "© 2025 Mariangel Araviches"
        },
        en: {
            welcome: "Welcome to my digital world",
            description: "Transforming ideas into digital solutions",
            projects: "My Projects",
            projectsDesc: "I have developed web projects using HTML, CSS, JavaScript, and Bootstrap to create responsive, functional, and attractive interfaces. HTML provides a clear structure, CSS enhances the visual design and adaptability, JavaScript adds interactivity, and Bootstrap ensures agile and responsive development. Each project reflects my focus on efficiency and user experience.",
            projectTitles: [
                "Front End Store",
                "Landing Page",
                "Musical Festival",
                "Cuppon Page",
                "Real Estate",
                "Todo List",
                "API Converter"
            ],
            projectDescriptions: [
                "An e-commerce project simulating an online store with a responsive design using HTML and CSS.",
                "A simple blog developed with HTML and CSS that allows the visualization of articles related to the coffee world.",
                "This project is an interactive website designed to promote and manage a music festival. The site offers a visual and dynamic experience for users interested in the event, with an intuitive and modern interface.",
                "A web project simulating a coupon and discount page. It uses HTML, Bootstrap, and CSS to create a visually appealing and functional interface that allows users to view various promotions.",
                "A real estate web application that allows showcasing properties for sale and rent. Developed with HTML, CSS, and JavaScript, it includes an intuitive and easy-to-use user interface.",
                "A simple task manager where users can add, edit, and delete tasks. The project uses JavaScript to manipulate tasks and store changes efficiently.",
                "An API designed to convert between different units of measurement. It uses JavaScript to perform precise and dynamic conversions based on user selection."
            ],
            footer: "© 2025 Mariangel Araviches"
        }
    };

    // Obtener el menú toggle y las enlaces de navegación
    const menuToggle = document.querySelector('.menu__toggle');
    const navLinks = document.querySelector('.nav-links');

    // Añadir el evento de clic al menú toggle
    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Alternar la clase 'active' para mostrar/ocultar el menú
    });

    function updateLanguage(lang) {
        document.querySelector(".hero h1").textContent = translations[lang].welcome;
        document.querySelector(".hero p").textContent = translations[lang].description;
        document.querySelector(".section-title").textContent = translations[lang].projects;
        document.querySelector("#proyectos p").textContent = translations[lang].projectsDesc;
        document.querySelector("footer p").textContent = translations[lang].footer;

        const projectTitles = document.querySelectorAll(".project-title");
        const projectDescriptions = document.querySelectorAll(".project-description");

        projectTitles.forEach((title, index) => {
            title.textContent = translations[lang].projectTitles[index];
        });

        projectDescriptions.forEach((desc, index) => {
            desc.textContent = translations[lang].projectDescriptions[index];
        });
    }

    languageToggle.addEventListener("click", function () {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        localStorage.setItem("language", currentLanguage);
        updateLanguage(currentLanguage);
    });

    updateLanguage(currentLanguage);
});
