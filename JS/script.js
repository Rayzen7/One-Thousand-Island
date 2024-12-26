// Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Accordion
document.querySelectorAll('.faq-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.faq-arrow');

        document.querySelectorAll('.faq-accordion-body').forEach(item => {
            if (item !== content) {
                item.classList.remove('open');
                item.previousElementSibling.querySelector('.faq-arrow').classList.remove('rotate');
            }
        });

        content.classList.toggle('open');
        icon.classList.toggle('rotate');
    });
});