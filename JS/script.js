// Navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
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

// Testimonials
window.onload = function () {
  const testimonialsWrapper = document.getElementById("testimonialsWrapper");    
  const pagination = document.getElementById("pagination");
  let currentIndex = 0;

  function createTestimonial(testimonial) {
    return `
        <div class="testimonials-flex">
          <div class="testimonials-text">
            <div class="testimonials-user">
              <img src="${testimonial.profileImage}" alt="" />
              <div class="testimonials-user-profile">
                <h1>${testimonial.name}</h1>
                <p>${testimonial.location}</p>
              </div>
            </div>
            <div class="testimonials-star">
              <img src="${testimonial.starImage}" alt="" />
              <p>• &nbsp ${testimonial.date}</p>
            </div>
            <div class="testimonials-user-text">
              <h2>${testimonial.title}</h2>
              <p>${testimonial.text}</p>
            </div>
          </div>
          <div class="testimonials-img-flex">
            <div class="testimonials-img">
              <img src="${testimonial.mainImage}" alt="" />
              <div class="testimonials-img-card">
                <img src="${testimonial.cardImages[0]}" alt="" />
                <img src="${testimonial.cardImages[1]}" alt="" />
              </div>
            </div>
          </div>
        </div>
      `;
  }

  testimonialsData.forEach((testimonial, index) => {
    testimonialsWrapper.innerHTML += createTestimonial(testimonial, index);
  });

  function updatePagination() {
    const circles = document.querySelectorAll(".testimonials-circle");
    circles.forEach((circle, index) => {
      circle.style.backgroundColor =
        index === currentIndex ? "var(--primary-color)" : "#ccc";
    });
  }

  function scrollTestimonials() {
    testimonialsWrapper.style.transform = `translateX(-${
      currentIndex * 93.5
    }%)`;
    updatePagination();
  }

  setInterval(function () {
    currentIndex = (currentIndex + 1) % testimonialsData.length;
    scrollTestimonials();
  }, 5000);

  updatePagination();
};

// Accordion
document.querySelectorAll(".faq-accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".faq-arrow");

    document.querySelectorAll(".faq-accordion-body").forEach((item) => {
      if (item !== content) {
        item.classList.remove("open");
        item.previousElementSibling
          .querySelector(".faq-arrow")
          .classList.remove("rotate");
      }
    });

    content.classList.toggle("open");
    icon.classList.toggle("rotate");
  });
});
