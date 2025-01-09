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
            description: "Transformando ideas en soluciones digitales",
            aboutTitle: "Sobre mí",
            aboutText: `¡Hola! Soy Mariangel Araviches, una desarrolladora en constante crecimiento, dando el salto de Front-End a Fullstack con una sólida base en <strong>HTML, CSS, JavaScript y React.</strong> Actualmente, me encuentro fortaleciendo mis habilidades a través de un bootcamp de desarrollo web, siempre con la meta de expandir mi conocimiento y enfrentar nuevos desafíos.<br><br>

                Desde 2023, he explorado el mundo de la programación mediante cursos en línea y proyectos personales, impulsada por mi pasión por la tecnología y su impacto en el mundo. Mi enfoque autodidacta y mi mentalidad de crecimiento me han permitido adaptarme a entornos dinámicos y aprender con rapidez. <br><br>
                
                A futuro, aspiro a especializarme en <strong>Backend y DevOps</strong>, explorando tecnologías como <strong>PHP, Node.js y PostgreSQL</strong>, junto con <strong>herramientas de automatización y despliegue</strong>. Más allá del código, disfruto sumergirme en el mundo de los videojuegos, especialmente los clásicos retro, y en series animadas como Daria. <br><br>
                
                ¿Trabajamos junt@s? Escríbeme a <strong> <a href="mailto:mariangelaraviches@gmail.com">mariangelaraviches@gmail.com</a> 🚀
                </strong>`,
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
            description: "Transforming ideas into digital solutions",
            aboutTitle: "About me",
            aboutText: `Hello! I am Mariangel Araviches, a developer in constant growth, making the leap from Front-End to Fullstack with a solid foundation in <strong>HTML, CSS, JavaScript and React.</strong> Currently, I am strengthening my skills through a web development bootcamp, always with the goal of expanding my knowledge and facing new challenges.<br><br>

            Since 2023, I have explored the world of programming through online courses and personal projects, driven by my passion for technology and its impact on the world. My self-directed approach and growth mindset have allowed me to adapt to dynamic environments and learn quickly. <br><br>
            
            In the future, I aspire to specialize in <strong>Backend and DevOps</strong>, exploring technologies such as <strong>PHP, Node.js and PostgreSQL</strong>, along with <strong>automation and deployment tools</strong> . Beyond code, I enjoy immersing myself in the world of video games, especially retro classics, and animated series like Daria. <br><br>
            
             Do we work together? Write to me at <strong> <a href="mailto:mariangelaraviches@gmail.com">mariangelaraviches@gmail.com</a> 🚀
                </strong>`,
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
