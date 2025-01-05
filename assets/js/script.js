// script.js - Interactividad y efectos

document.addEventListener("DOMContentLoaded", () => {
    // Agregar el efecto de scroll suave a los enlaces de navegación
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento predeterminado de enlace

            // Obtener el destino del enlace
            const targetId = link.getAttribute('href').substring(1); // Obtener el ID del destino
            const targetElement = document.getElementById(targetId);

            // Desplazarse suavemente al destino
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Obtener el menú toggle y las enlaces de navegación
    const menuToggle = document.querySelector('.menu__toggle');
    const navLinks = document.querySelector('.nav-links');

    // Añadir el evento de clic al menú toggle
    menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');  // Alternar la clase 'active' para mostrar/ocultar el menú
    });


    

    // Obtener el botón de cambio de idioma
    const languageToggle = document.getElementById('language-toggle');

    // Definir el contenido en ambos idiomas
    const content = {
        es: {
            welcome: "Bienvenid@ a mi mundo digital",
            description: "Desarrolladora web en constante aprendizaje",
            aboutTitle: "Sobre mí",
            aboutText: `Mi nombre es Mariangel Araviches. Soy una apasionada desarrolladora Front-End que está dando sus primeros pasos hacia el mundo Fullstack. Actualmente, estoy estudiando un bootcamp de desarrollo web para fortalecer mis habilidades y expandir mi conocimiento.<br><br>
                        Desde 2023, he explorado la programación con cursos en línea y proyectos personales, motivada por mi fascinación por cómo la tecnología transforma el mundo. Mis herramientas principales son HTML, CSS, JavaScript y React, pero siempre estoy en busca de nuevos desafíos. A futuro, aspiro a adentrarme en el universo de DevOps para ampliar mis horizontes en tecnología. En mis tiempos libres, me encanta jugar videojuegos, especialmente los clásicos retro, y disfrutar de series animadas como Daria. <br><br>
                        ¿Trabajamos junt@s? Puedes contactarme a mi correo <strong>mariangelaraviches@gmail.com.</strong>`,
            projectsTitle: "Mis Proyectos",
            project1Title: "Front End Store",
            project1Description: "Un proyecto de e-commerce que simula una tienda en línea con un diseño responsive, utilizando HTML y CSS.",
            project1Link: "https://mangellch.github.io/front-end-store/",
            project2Title: "Landing Page",
            project2Description: "Un blog sencillo desarrollado con HTML y CSS que permite la visualización de artículos relacionados con el mundo del café.",
            project2Link: "https://mangellch.github.io/blogdecafe/",
            project3Title: "Iguana Page",
            project3Description: "Un sitio web con temática de iguanas, utilizando HTML y CSS. La página presenta un diseño atractivo con información sobre estas criaturas y una interfaz fácil de navegar.",
            project3Link: "https://mangellch.github.io/iguanapage/",
            project4Title: "Cuppon Page",
            project4Description: "Un proyecto web que simula una página de cupones y descuentos. Utiliza HTML, Bootstrap y CSS para crear una interfaz visual atractiva y funcional que permite a los usuarios visualizar diversas promociones.",
            project4Link: "https://mangellch.github.io/paginacuppon/",
        },
        en: {
            welcome: "Welcome to my digital world",
            description: "Web developer in constant learning",
            aboutTitle: "About me",
            aboutText: `My name is Mariangel Araviches. I'm a passionate Front-End developer taking my first steps into Fullstack development. Currently, I'm studying a web development bootcamp to strengthen my skills and expand my knowledge.<br><br>
                        Since 2023, I've been exploring programming through online courses and personal projects, driven by my fascination with how technology is transforming the world. My main tools are HTML, CSS, JavaScript, and React, but I'm always looking for new challenges. In the future, I aspire to dive into the world of DevOps to broaden my horizons in technology. In my free time, I love playing video games, especially retro classics, and enjoying animated series like Daria. <br><br>
                        Want to work together? You can contact me at my email <strong>mariangelaraviches@gmail.com.</strong>`,
            projectsTitle: "My Projects",
            project1Title: "Front End Store",
            project1Description: "An e-commerce project simulating an online store with a responsive design using HTML and CSS.",
            project1Link: "https://mangellch.github.io/front-end-store/",
            project2Title: "Landing Page",
            project2Description: "A simple blog developed with HTML and CSS that allows the visualization of articles related to the coffee world.",
            project2Link: "https://mangellch.github.io/blogdecafe/",
            project3Title: "Iguana Page",
            project3Description: "A website with an iguana theme, using HTML and CSS. The page features an attractive design with information about these creatures and an easy-to-navigate interface.",
            project3Link: "https://mangellch.github.io/iguanapage/",
            project4Title: "Cuppon Page",
            project4Description: "A web project simulating a coupon and discount page. It uses HTML, Bootstrap, and CSS to create a visually appealing and functional interface that allows users to view various promotions.",
            project4Link: "https://mangellch.github.io/paginacuppon/",
        }
    };

    // Función para cambiar el idioma
    let currentLang = 'es'; // Idioma por defecto (español)

    function changeLanguage() {
        currentLang = currentLang === 'es' ? 'en' : 'es'; // Alternar idioma

        // Cambiar el contenido de la página según el idioma seleccionado
        document.querySelector('.hero h1').textContent = content[currentLang].welcome;
        document.querySelector('.hero p').textContent = content[currentLang].description;
        document.querySelector('#about h2').textContent = content[currentLang].aboutTitle;
        document.querySelector('#about p').innerHTML = content[currentLang].aboutText;
        document.querySelector('#proyectos h2').textContent = content[currentLang].projectsTitle;

        // Cambiar los títulos y descripciones de los proyectos
        document.querySelectorAll('.project-card').forEach((card, index) => {
            const projectContent = [
                {
                    title: content[currentLang].project1Title,
                    description: content[currentLang].project1Description,
                    link: content[currentLang].project1Link
                },
                {
                    title: content[currentLang].project2Title,
                    description: content[currentLang].project2Description,
                    link: content[currentLang].project2Link
                },
                {
                    title: content[currentLang].project3Title,
                    description: content[currentLang].project3Description,
                    link: content[currentLang].project3Link
                },
                {
                    title: content[currentLang].project4Title,
                    description: content[currentLang].project4Description,
                    link: content[currentLang].project4Link
                }
            ];

            card.querySelector('.project-title').textContent = projectContent[index].title;
            card.querySelector('.project-description').textContent = projectContent[index].description;
            card.querySelector('.project-link').setAttribute('href', projectContent[index].link);
        });

        // Actualizar el idioma de la página
        document.documentElement.lang = currentLang;
    }

    // Asignar la función al clic del botón
    languageToggle.addEventListener('click', changeLanguage);
});
