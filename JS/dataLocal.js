const destinationsData = [
  {
    name: "Macan Island",
    image: "./assets/img/destinations/card1.png",
    title: "Eco Resort - Tiger Island",
    description: "The environmentally friendly concept, snorkeling, kayaking and relaxed atmosphere make Eco Resort Pulau Macan the best choice for a romantic honeymoon.",
    price: "IDR 1.000.000 - IDR 1.500.000",
    link: "#"
  },
  {
    name: "Tidung Island",
    image: "./assets/img/destinations/card2.jpg",
    title: "Love Bridge - Tidung Island",
    description: "The iconic Love Bridge, located on Tidung Island, is a must-visit destination for travelers. Connecting Big Tidung Island and Small Tidung Island.",
    price: "IDR 5.000 - IDR 10.000",
    link: "#"
  },
  {
    name: "Pramuka Island",
    image: "./assets/img/destinations/card3.jpg",
    title: "Mangrove - Pramuka Island",
    description: "Pramuka Island is famous for its turtle conservation, snorkeling, diving, mangrove trekking, and stunning sunset views from the pier. Nearby Semak Daun Island is ideal for camping.",
    price: "IDR 50.000 - IDR 150.000",
    link: "#"
  },
  {
    name: "Semak Daun Island",
    image: "./assets/img/destinations/card4.jpg",
    title: "Snorkeling - Semak Daun Island",
    description: "Semak Daun Island, an uninhabited gem in the Thousand Islands, is ideal for camping. It boasts white sandy beaches, clear waters, and a tranquil vibe, perfect for snorkeling.",
    price: "IDR 20.000 - IDR 50.000",
    link: "#"
  },
  {
    name: "Ayer Island",
    image: "./assets/img/destinations/card5.jpg",
    title: "Floating Cottages - Ayer Island",
    description: "Ayer Island, part of the Thousand Islands, is known as the 'Pearl of the Islands.' It features exclusive resorts with floating cottages, modern facilities, and a relaxing tropical atmosphere.",
    price: "IDR 300.000 - IDR 500.000",
    link: "#"
  },
  {
    name: "Coconut Island",
    image: "./assets/img/destinations/card6.png",
    title: "Private Getaway - Coconut Island",
    description: "Known for its peaceful atmosphere, Kelapa Island offers a quiet retreat for those seeking a more tranquil vacation. The island has clear beaches and serene waters.",
    price: "IDR 20.000 - IDR 50.000",
    link: "#"
  },
  {
    name: "Kotok Island",
    image: "./assets/img/destinations/card7.png",
    title: "Beachfront Villas - Kotok Island",
    description: "Kotok Island is ideal for those looking to escape the crowds, offering a peaceful and undisturbed environment. Stay in eco-friendly beachfront villas.",
    price: "IDR 1.000.000 - IDR 2.500.000",
    link: "#"
  },
  {
    name: "Harapan Island",
    image: "./assets/img/destinations/card8.png",
    title: "Nature Exploration - Harapan Island",
    description: "Harapan Island is known for its lush green landscapes and is perfect for trekking and exploring the natural beauty of the island.",
    price: "IDR 50.000 - IDR 100.000",
    link: "#"
  },
  {
    name: "Bira Island",
    image: "./assets/img/destinations/card9.png",
    title: "Clear Waters - Bira Island",
    description: "Known for its untouched natural beauty, Pulau Bira is great for camping and nature walks. The island’s clear waters are perfect for snorkeling and swimming.",
    price: "IDR 20.000 - IDR 40.000",
    link: "#"
  },
  {
    name: "Hair Island",
    image: "./assets/img/destinations/card10.png",
    title: "Mangrove Forests - Hair Island",
    description: "Explore the lush mangrove forests, which provide a unique ecosystem for a variety of species. Rambut Island is a wildlife sanctuary, known for its bird watching opportunities.",
    price: "IDR 25.000 - IDR 50.000",
    link: "#"
  }
];

const testimonialsData = [
  {
    name: "Pandu Tria Adyatama",
    location: "Visitor from Australia",
    date: "Sunday, 9th of February, 2024",
    title: "Perfect for a Quick Getaway",
    text: "I visited Tidung Island for a weekend trip, and it was exactly what I needed to escape the hustle and bustle of city life. The island is charming and offers a peaceful atmosphere, perfect for relaxing and unwinding. The highlight of my visit was the iconic Love Bridge, where I enjoyed breathtaking sunset views and took some amazing photos.",
    profileImage: "./assets/img/testimonials/testimonial1/profile.svg",
    starImage: "./assets/img/testimonials/stars.svg",
    mainImage: "./assets/img/testimonials/testimonial1/img-primary.svg",
    cardImages: [
      "./assets/img/testimonials/testimonial1/card2.svg",
      "./assets/img/testimonials/testimonial1/card3.svg",
    ],
  },
  {
    name: "Setio Nugraha",
    location: "Visitor from Canada",
    date: "Monday, 6th of January, 2024",
    title: "A Perfect Gateaway Close to the City",
    text: "The Thousand Islands were a delightful surprise. I never imagined such a serene and picturesque destination could be located just a short ferry ride from Jakarta. The journey itself was enjoyable, with beautiful views of the sea along the way. When I arrived, I was greeted by crystal-clear waters and pristine beaches.",
    profileImage: "./assets/img/testimonials/testimonial2/profile.svg",
    starImage: "./assets/img/testimonials/stars.svg",
    mainImage: "./assets/img/testimonials/testimonial2/img-primary.svg",
    cardImages: [
      "./assets/img/testimonials/testimonial2/card2.svg",
      "./assets/img/testimonials/testimonial2/card3.svg",
    ],
  },
  {
    name: "Muhammad Khadafi",
    location: "Visitor from China",
    date: "Saturday, 9th of March, 2024",
    title: "Perfect for Water Sports Enthusiasts",
    text: "As a diving enthusiast, I’ve visited several underwater spots around Southeast Asia, but Pari Island in the Thousand Islands ranks among the best. The coral reefs were vibrant and teeming with marine life. I even spotted a hawksbill sea turtle during one of my dives, which was an incredible moment. ",
    profileImage: "./assets/img/testimonials/testimonial3/profile.svg",
    starImage: "./assets/img/testimonials/stars.svg",
    mainImage: "./assets/img/testimonials/testimonial3/img-primary.svg",
    cardImages: [
      "./assets/img/testimonials/testimonial3/card2.svg",
      "./assets/img/testimonials/testimonial3/card3.svg",
    ],
  },
];

const destinationInfo = [
  {
    id: 1,
    name: "Tiger Island",
    description:
      "The environmentally friendly concept, snorkeling, kayaking and relaxed atmosphere make Eco Resort Pulau Macan the best choice for a romantic honeymoon",
    location:
      "Kepulauan Seribu, DKI Jakarta, Indonesia (Latitude: 5.7290° S, Longitude: 106.6045° E)",
    contact: "0881024816158 | @pulaumacan",
    ticketPrice: "IDR 500.000 - IDR 1.000.000",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.6902397628446!2d106.54876679056304!3d-5.5983202333549364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a79606201c89b%3A0xf07c09fa138e362d!2sPulau%20Macan%20Eco%20Lodge!5e0!3m2!1sid!2sid!4v1735355102643!5m2!1sid!2sid",
    images: [
      "./assets/img/information/tiger-island/card1.svg",
      "./assets/img/information/tiger-island/card2.svg",
      "./assets/img/information/tiger-island/card3.svg",
    ],
  },
  {
    id: 2,
    name: "Tiger Island",
    description:
      "The environmentally friendly concept, snorkeling, kayaking and relaxed atmosphere make Eco Resort Pulau Macan the best choice for a romantic honeymoon",
    location:
      "Kepulauan Seribu, DKI Jakarta, Indonesia (Latitude: 5.7290° S, Longitude: 106.6045° E)",
    contact: "0881024816158 | @pluaumancan",
    ticketPrice: "IDR 500.000 - IDR 1.000.000",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.6902397628446!2d106.54876679056304!3d-5.5983202333549364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a79606201c89b%3A0xf07c09fa138e362d!2sPulau%20Macan%20Eco%20Lodge!5e0!3m2!1sid!2sid!4v1735355102643!5m2!1sid!2sid",
    images: [
      "./assets/img/information/tiger-island/card1.svg",
      "./assets/img/information/tiger-island/card2.svg",
      "./assets/img/information/tiger-island/card3.svg",
    ],
  },
  {
    id: 3,
    name: "Tiger Island",
    description:
      "The environmentally friendly concept, snorkeling, kayaking and relaxed atmosphere make Eco Resort Pulau Macan the best choice for a romantic honeymoon",
    location:
      "Kepulauan Seribu, DKI Jakarta, Indonesia (Latitude: 5.7290° S, Longitude: 106.6045° E)",
    contact: "0881024816158 | @pluaumancan",
    ticketPrice: "IDR 500.000 - IDR 1.000.000",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.6902397628446!2d106.54876679056304!3d-5.5983202333549364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a79606201c89b%3A0xf07c09fa138e362d!2sPulau%20Macan%20Eco%20Lodge!5e0!3m2!1sid!2sid!4v1735355102643!5m2!1sid!2sid",
    images: [
      "./assets/img/information/tiger-island/card1.svg",
      "./assets/img/information/tiger-island/card2.svg",
      "./assets/img/information/tiger-island/card3.svg",
    ],
  },
];
