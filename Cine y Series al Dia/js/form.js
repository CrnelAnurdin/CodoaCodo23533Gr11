    const contactoLink = document.querySelector('nav ul li a[href="#contacto"]');
    const contactForm = document.getElementById('contact-form');
    const contactSection = document.getElementById('contacto');

    contactoLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactForm.classList.toggle('hidden');
        contactSection.scrollIntoView();
        contactSection.focus();
    });