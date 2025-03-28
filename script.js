// Animation pour les icônes sociales
document.querySelectorAll('.social-media a').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      const iconElement = icon.querySelector('i');
      iconElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      iconElement.style.transform = 'scale(1.2)';
      iconElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
    icon.addEventListener('mouseleave', () => {
      const iconElement = icon.querySelector('i');
      iconElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      iconElement.style.transform = 'scale(1)';
      iconElement.style.boxShadow = 'none';
    });
  });
  
  // Animation des langages de programmation au survol
  document.querySelectorAll('.programming-languages a').forEach((icon) => {
    icon.addEventListener('mouseenter', () => {
      const iconElement = icon.querySelector('i');
      iconElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      iconElement.style.transform = 'scale(1.2)';
      iconElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    });
    icon.addEventListener('mouseleave', () => {
      const iconElement = icon.querySelector('i');
      iconElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      iconElement.style.transform = 'scale(1)';
      iconElement.style.boxShadow = 'none';
    });
  });
  
  // Animation d'apparition au scroll
  const elements = document.querySelectorAll('.programming-languages a, .social-media a');
  window.addEventListener('scroll', () => {
    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.style.transition = 'transform 0.5s ease-in-out';
        element.style.transform = 'translateX(0)';
      } else {
        element.style.transform = 'translateX(-100px)';
      }
    });
  });
  
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Vérifier le mode stocké dans le localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleButton.textContent = "🌙 Mode Sombre";
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌙 Mode Sombre";
    } else {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "☀️ Mode Clair";
    }
  });

