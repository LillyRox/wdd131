const temples = [
  {
    templeName: "Ciudad Juárez Mexico",
    location: "Ciudad Juárez, Mexico",
    dedicated: "2000, February, 27",
    area: 32177 ,
    imageUrl: "images/ciudadjuarez-mexico.jpeg "
  },
  {
    templeName: "Colonia Juárez Chihuahua",
    location: "Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 31857,
    imageUrl: "images/coloniajuarez-mexico.jpeg"
  },
  {
    templeName: "Guadalajara Mexico",
    location: "Guadalajara, Mexico",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/guadalajara-mexico.jpeg"
  },
  {
    templeName: "Hermosillo Sonora Mexico",
    location: "Sonora, Mexico",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/hermosillo-mexico.jpeg"
  },
  {
    templeName: "Mérida Mexico",
    location: "Mérida Mexico",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/merida-mexico.jpeg"
  },
  {
    templeName: "Oaxaca Mexico",
    location: "Oaxaca, Mexico",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/oaxaca-mexico.jpeg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-mexico.jpeg"
  },
  {
    templeName: "Puebla Mexico",
    location: "Puebla, Mexico",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "images/puebla-mexico.jpeg"
  },
  {
    templeName: "Tampico Mexico",
    location: "Tampico, Mexico",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl: "images/tampico-mexico.jpeg"  
  }
];

const gallery = document.querySelector(".gallery");

function renderTemples(filteredTemples) {
  gallery.innerHTML = "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("figure");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "400");
    img.setAttribute("height", "250");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    gallery.appendChild(card);
  });
}

renderTemples(temples);

/**
 * Temple Album – Footer dates and hamburger menu.
 * @file temples.js
 */

const currentyearEl = document.getElementById("currentyear");
if (currentyearEl) {
  currentyearEl.textContent = new Date().getFullYear();
}

const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

const menuBtn = document.getElementById("menu");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuBtn.classList.toggle("open");

    if (menuBtn.classList.contains("open")) {
      menuBtn.textContent = "X";
      menuBtn.setAttribute("aria-label", "Close Navigation");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      menuBtn.textContent = "\u2630"; 
      menuBtn.setAttribute("aria-label", "Open Navigation");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

const title = document.querySelector("#gallery-title");
const navHome = document.querySelector("#nav-home");
const navOld = document.querySelector("#nav-old");
const navNew = document.querySelector("#nav-new");
const navLarge = document.querySelector("#nav-large");
const navSmall = document.querySelector("#nav-small");

navHome.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Home";
  renderTemples(temples);
});

navOld.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Old";
  const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
  renderTemples(oldTemples);
});

navNew.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "New";
  const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
  renderTemples(newTemples);
});

navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Large";
  const largeTemples = temples.filter(temple => temple.area > 90000);
  renderTemples(largeTemples);
});

navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = "Small";
  const smallTemples = temples.filter(temple => temple.area < 10000);
  renderTemples(smallTemples);
});