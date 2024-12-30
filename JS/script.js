// Navbar Start
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
// Navbar End

// Destination Start
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".destinations-container");
  const pagination = document.querySelectorAll(".circle-page");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  let currentIndex = 0;

  function updateSlide(index) {
    const offset = -index * 1000;
    container.style.transform = `translateX(${offset}px)`;

    pagination.forEach((page, i) => {
      if (i === index) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  }

  function generateDestinations() {
    destinationsData.forEach((destination) => {
      const card = document.createElement("div");
      card.classList.add("destinations-card");

      card.innerHTML = `
          <img src="${destination.image}" alt="${destination.name}" />
          <div class="destinations-card-text">
            <h2>${destination.name}</h2>
          </div>
          <div class="destinations-card-details">
            <h1>${destination.title}</h1>
            <p>${destination.description}</p>
            <h5>${destination.price}</h5>
            <p class="view-information">
              <a href="#information" class="destination-link" data-id="${destination.id}">View Information Detail</a>
            </p>
          </div>
        `;

      container.appendChild(card);
    });
  }

  arrowRight.addEventListener("click", () => {
    if (currentIndex < pagination.length - 1) {
      currentIndex++;
      updateSlide(currentIndex);
      arrowRight.classList.add("active");
      arrowLeft.classList.add("active");
    }
  });

  arrowLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlide(currentIndex);
      arrowRight.classList.remove("active");
      arrowLeft.classList.remove("active");
    }
  });

  pagination.forEach((page, i) => {
    page.addEventListener("click", () => {
      currentIndex = i;
      updateSlide(currentIndex);
    });
  });

  generateDestinations();
  updateSlide(currentIndex);
});
// Destination End

// Testimonials Start
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
      currentIndex * 100
    }%)`;
    updatePagination();
  }

  setInterval(function () {
    currentIndex = (currentIndex + 1) % testimonialsData.length;
    scrollTestimonials();
  }, 5000);

  updatePagination();
};
// Testimonials End

// Information Start
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("informationWrapper");

  destinationInfo.forEach((info, index) => {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("information-container");

    infoContainer.innerHTML = `
      <div class="information-container">
        <div class="information-container-header">
          <div class="information-island-header">
            <h1>${info.name}</h1>
            <p>${info.description}</p>
            <iframe src="${
              info.mapSrc
            }" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div class="information-island-body">
            <div class="information-island-flex">
              <img src="./assets/img/information/wallet.svg" alt="" />
              <div class="information-island-text">
                <h2>Entrance Ticket Price</h2>
                <p>${info.ticketPrice}</p>
              </div>
            </div>
            <div class="information-island-flex">
              <img src="./assets/img/information/lamp.svg" alt="" />
              <div class="information-island-text">
                <h2>Location and Wind direction</h2>
                <p>${info.location}</p>
              </div>
            </div>
            <div class="information-island-flex">
              <img src="./assets/img/information/hearth.svg" alt="" />
              <div class="information-island-text">
                <h2>Contact Person & Social Media</h2>
                <p>${info.contact}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="information-body-img">
          ${info.images.map((img) => `<img src="${img}" alt="" />`).join("")}
        </div>
      </div>
      `;

    wrapper.appendChild(infoContainer);
  });

  const informationWrapper = document.getElementById("informationWrapper");
  let currentIndex = 0;
  let autoScrollTimer;
  let isUserInteracting = false;

  function scrollWrapper() {
    if (isUserInteracting) return;
    currentIndex++;
    if (currentIndex >= wrapper.children.length) {
      currentIndex = 0;
    }
    informationWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function startAutoScroll() {
    autoScrollTimer = setInterval(scrollWrapper, 5000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollTimer);
  }

  const destinationLinks = document.querySelectorAll(".destination-link");
  destinationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const destinationId = event.target.getAttribute("data-id");
      currentIndex = destinationId - 1;
      wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

      const pageLink = document.querySelector("#information");
      pageLink.scrollIntoView({
        behavior: "smooth",
      });

      isUserInteracting = true;
      stopAutoScroll();
      setTimeout(() => {
        isUserInteracting = false;
        startAutoScroll();
      }, 9000);
    });
  });

  if (window.location.hash) {
    const destinationId = window.location.hash.split("-")[1];
    currentIndex = destinationId - 1;
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  startAutoScroll();
});
// Information End

// FAQ Start
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
// FAQ End