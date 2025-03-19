document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const element = document.getElementById("typed-output");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "fadeIn 1s ease-out forwards";
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});
// Importa ScrollReveal
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal(".section", {
        duration: 1000,
        distance: "50px",
        easing: "ease-in-out",
        origin: "bottom",
        reset: false,
    });

    ScrollReveal().reveal(".project", {
        duration: 1200,
        distance: "40px",
        origin: "left",
        interval: 200,
    });

    ScrollReveal().reveal("#contact-form", {
        duration: 1000,
        distance: "50px",
        origin: "right",
        
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "¡Welcome to my portfolio!";
    const speed = 100; // Velocidad de escritura (ajusta si quieres más rápido o lento)
    let index = 0;
    const element = document.getElementById("typed-text");

    if (element) {
        element.style.color = "#ff66c4"; // Cambia el color del texto
        element.style.fontWeight = "bold"; // Opción extra para hacer más visible el texto

        function typeWriter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        element.innerHTML = ""; // Asegura que el texto inicie vacío
        typeWriter(); // Inicia el efecto de escritura
    } else {
        console.error("Elemento con ID 'typed-text' no encontrado.");
    }
});


// Espera a que el contenido de la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["¡Welcome to my portfolio!"], // El texto que quieres animar
        typeSpeed: 100, // Velocidad de escritura (más bajo es más rápido)
        backSpeed: 50,  // Velocidad de borrado
        backDelay: 1000, // Tiempo antes de borrar el texto
        startDelay: 500, // Tiempo de espera antes de que comience la animación
        loop: true, // Si deseas que se repita
    };

    var typed = new Typed("#typed-output", options); // Selecciona el contenedor para aplicar la animación
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("aboutMe");
    const profileImage = document.getElementById("profileImage");

    // Efecto de aparición al hacer scroll
    function showOnScroll() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Para que se muestre si ya está en pantalla

    // Cambio de imagen al hacer clic
    profileImage.addEventListener("click", function () {
        if (profileImage.src.includes("ruta-de-tu-imagen.jpg")) {
            profileImage.src = "ruta-de-la-segunda-imagen.jpg"; // Cambia a otra imagen
        } else {
            profileImage.src = "ruta-de-tu-imagen.jpg";
        }
    });
});


