// Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Destination
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".destinations-container");
    const pagination = document.querySelectorAll(".circle-page");
    const arrowLeft = document.querySelector(".arrow-pagination:first-child");
    const arrowRight = document.querySelector(".arrow-pagination:last-child");

    let currentIndex = 0;

    function updateSlide(index) {
        const offset = -index * 1200;
        container.style.transform = `translateX(${offset}px)`;

        pagination.forEach((page, i) => {
            if (i === index) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    }

    arrowRight.addEventListener("click", () => {
        if (currentIndex < pagination.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        }
    });

    arrowLeft.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(currentIndex);
        }
    });

    pagination.forEach((page, i) => {
        page.addEventListener("click", () => {
            currentIndex = i;
            updateSlide(currentIndex);
        });
    });

    updateSlide(currentIndex);
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