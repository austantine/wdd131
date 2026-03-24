// Insert current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date dynamically
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Accra, Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 38000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },

    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, October, 30",
        area: 19000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
    },

    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 7",
        area: 107000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah, United States",
        dedicated: "2012, March, 29",
        area: 17000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612-main.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Colonia Juárez Mexico",
        location: "Colonia Juárez, Mexico",
        dedicated: "1999, March, 6",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-1601-main.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

];
// Function to render temples
function renderTemples(filteredTemples) {
    const gallery = document.querySelector(".temple-gallery");
    gallery.innerHTML = ""; // clear previous cards

    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy"; // native lazy loading

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

// Initial render
renderTemples(temples);

// Filtering logic for navigation menu
document.querySelectorAll(".navigation a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        // Remove active class from all links
        document.querySelectorAll(".navigation a").forEach(a => a.classList.remove("active"));

        // Add active class to clicked link
        event.target.classList.add("active");

        const filter = event.target.textContent;
        let filtered = temples;

        if (filter === "Old") {
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "New") {
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "Large") {
            filtered = temples.filter(t => t.area > 90000);
        } else if (filter === "Small") {
            filtered = temples.filter(t => t.area < 10000);
        } else if (filter === "Home") {
            filtered = temples;
        }

        renderTemples(filtered);
    });
});


// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("show");

        if (navigation.classList.contains("show")) {
            menuButton.textContent = "✖"; // X symbol
        } else {
            menuButton.textContent = "☰"; // hamburger symbol
        }
    });
});

