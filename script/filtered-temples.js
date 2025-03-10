document.addEventListener('DOMContentLoaded', () => {
    // Preload critical images for small screens
    const preloadImages = [
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    ];

    preloadImages.forEach(url => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = url;
        document.head.appendChild(link);
    });

    // Hamburger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('visible');
        menuToggle.textContent = nav.classList.contains('visible') ? '✕' : '☰';
    });

    // Update current year and last modified date
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

    // Temple data
    const temples = [
        {
            templeName: "Aba Nigeria Temple",
            location: "Aba, Nigeria",
            dedicated: "7, August, 2005 ",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba_nigeria_temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Apia Samoa Temple",
            location: "Vaitele Street,Pesega, Apia",
            dedicated: "4 ,September, 2005 ",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Apia-Samoa/400x250/Apia_Samoa_Temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Bacolod Philippines Temple",
            location: "Philippines",
            dedicated: "11 ,December, 2021",
            area:  26700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Bacolod-Philippines/400x225/Bacolod_Philippines_temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Bahía Blanca Argentina",
            location: "Argentina",
            dedicated: "9, April, 2022 ",
            area:   19000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Bahía_Blanca_Argentina/400x250/Bahía_Blanca_Argentina_temple_2.jpg"
        },
        {
            templeName: "Dallas Texas .",
            location: "Texas, United States",
            dedicated: " 24,October, 1984",
            area: 44207,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Dallas-Texas/400x250/Dallas_Texas_temple-exterior-2.jpeg"
        },
        {
            templeName: "Davao Philippines ",
            location: "Philippines,Barangay Ma-a ",
            dedicated: "14 ,November ,2020 ",
            area:  18450,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Davao-Philippines/400x250/Davao_Philippines_Temple-exterior-1075606-wallpaper.jpg"
        },
        {
            templeName: "Denver Colorado",
            location: "Centennial, Colorado, United States",
            dedicated: "28 October 1986",
            area: 29117,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Denver-Colorado/400x250/Denver_Colorado_temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Elko Nevada ",
            location: "Elko, Nevada,United States ",
            dedicated: "7, May ,2022",
            area: 5133,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Elko-Nevada/400x250/slctemple7.jpg"
        },
        {
            templeName: "Edmonton Alberta",
            location: "Edmonton, Alberta,Canada",
            dedicated: "27, February, 1999",
            area: 10700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Edmonton-Alberta/2018/400x250/Edmonton_Alberta_Temple01.jpg"
        },
        {
            templeName: "Sacramento California Temple",
            location: " Rancho Cordova, California,United States",
            dedicated: " 3, September, 2006",
            area: 19500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/Sacramento-California-Temple/Sacramento-California-Temple-20358-main.jpg"
        }
    ];

    // Render temples dynamically
    const renderTemples = (temples) => {
        const gallery = document.getElementById("temple-gallery");
        gallery.innerHTML = ""; // Clear current content

        const isSmallScreen = window.innerWidth <= 768; // Detect small screens

        temples.forEach((temple, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img 
                    src="${temple.imageUrl}" 
                    alt="${temple.templeName}" 
                    loading="${isSmallScreen && index === 0 ? 'eager' : 'lazy'}" 
                    width="400" 
                    height="250"> <!-- Explicit dimensions to prevent layout shifts -->
                <div class="caption">
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            gallery.appendChild(card);
        });
    };

    // Filter temples based on criteria
    const filterTemples = (criteria) => {
        let filteredTemples = temples;

        if (criteria === "old") {
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
        } else if (criteria === "new") {
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
        } else if (criteria === "large") {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (criteria === "small") {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        renderTemples(filteredTemples);
    };

    // Event listeners for navigation links
    document.getElementById("home").addEventListener("click", () => renderTemples(temples));
    document.getElementById("old").addEventListener("click", () => filterTemples("old"));
    document.getElementById("new").addEventListener("click", () => filterTemples("new"));
    document.getElementById("large").addEventListener("click", () => filterTemples("large"));
    document.getElementById("small").addEventListener("click", () => filterTemples("small"));

    // Initial render of all temples
    renderTemples(temples);
});