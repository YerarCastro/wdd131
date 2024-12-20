// filtered-temples.js: JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("visible");
        hamburger.textContent = menu.classList.contains("visible") ? "✖" : "☰";
    });

    // Temple data array
    const temples = [
        {
            name: "Mexico City Temple",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            size: 116642,
            image: "images/temple-mexico-city.jpeg"
        },
        {
            name: "Campinas Brazil Temple",
            location: "Campinas, Brazil",
            dedicated: "2002, May, 17",
            size: 73000,
            image: "images/temple-campinas.jpeg"
        },
        {
            name: "Montevideo Uruguay Temple",
            location: "Montevideo, Uruguay",
            dedicated: "2001, March, 18",
            size: 10000,
            image: "images/temple-montevideo.jpg"
        },
        {
            name: "Montreal Canada Temple",
            location: "Montreal, Canada",
            dedicated: "2000, June, 4",
            size: 10000,
            image: "images/temple-montreal.jpg"
        },
        {
            name: "Rome Italy Temple",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            size: 40900,
            image: "images/temple-roma.jpg"
        },
        {
            name: "Salt Lake City Temple",
            location: "Salt Lake City, USA",
            dedicated: "1893, April, 6",
            size: 253015,
            image: "images/temple-salt-lake-city.jpeg"
        },
        {
            name: "Sao Paulo Brazil Temple",
            location: "Sao Paulo, Brazil",
            dedicated: "1978, October, 30",
            size: 59000,
            image: "images/temple-sao-paulo.jpg"
        },
        {
            name: "Veracruz Mexico Temple",
            location: "Veracruz, Mexico",
            dedicated: "2000, July, 9",
            size: 10000,
            image: "images/temple-veracruz.webp"
        },
        {
            name: "Buenos Aires Argentina Temple",
            location: "Buenos Aires, Argentina",
            dedicated: "1986, January, 17",
            size: 13700,
            image: "images/temples-buenos-aires.jpg"
        }
    ];

    // Display temple cards dynamically
    const templeGallery = document.getElementById("temple-gallery");

    const displayTemples = (filteredTemples) => {
        templeGallery.innerHTML = ""; // Clear existing content
        filteredTemples.forEach(temple => {
            const card = document.createElement("div");
            card.className = "temple-card";
            card.innerHTML = `
                <img src="${temple.image}" alt="${temple.name}" loading="lazy">
                <h3>${temple.name}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.size} sq ft</p>
            `;
            templeGallery.appendChild(card);
        });
    };

    // Filter temples based on menu selection
    const filterTemples = (criteria) => {
        switch (criteria) {
            case "old":
                return temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
            case "new":
                return temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
            case "large":
                return temples.filter(temple => temple.size > 90000);
            case "small":
                return temples.filter(temple => temple.size <= 10000);
            default:
                return temples; // Show all temples
        }
    };

    // Event listeners for menu links
    document.querySelectorAll("#menu a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute("data-filter");
            const filteredTemples = filterTemples(filter);
            displayTemples(filteredTemples);
        });
    });

    // Initial display of all temples
    displayTemples(temples);

    // Footer: Display last modified date
    const lastModifiedElement = document.getElementById("last-modified");
    lastModifiedElement.textContent += document.lastModified;
});
