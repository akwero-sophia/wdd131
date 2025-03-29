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

    // Temple data with standardized date formats (YYYY-MM-DD)
    const temples = [
        {
            templeName: "Aba Nigeria Temple",
            location: "Aba, Nigeria",
            dedicated: "2005-08-07",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba_nigeria_temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Apia Samoa Temple",
            location: "Vaitele Street, Pesega, Apia",
            dedicated: "2005-09-04",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Apia-Samoa/400x250/Apia_Samoa_Temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Bacolod Philippines Temple",
            location: "Philippines",
            dedicated: "2021-12-11",
            area: 26700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Bacolod-Philippines/400x225/Bacolod_Philippines_temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Bahía Blanca Argentina Temple",
            location: "Argentina",
            dedicated: "2022-04-09",
            area: 19000,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Bahía_Blanca_Argentina/400x250/Bahía_Blanca_Argentina_temple_2.jpg"
        },
        {
            templeName: "Dallas Texas Temple",
            location: "Texas, United States",
            dedicated: "1984-10-24",
            area: 44207,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Dallas-Texas/400x250/Dallas_Texas_temple-exterior-2.jpeg"
        },
        {
            templeName: "Davao Philippines Temple",
            location: "Philippines, Barangay Ma-a",
            dedicated: "2020-11-14",
            area: 18450,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Davao-Philippines/400x250/Davao_Philippines_Temple-exterior-1075606-wallpaper.jpg"
        },
        {
            templeName: "Denver Colorado Temple",
            location: "Centennial, Colorado, United States",
            dedicated: "1986-10-28",
            area: 29117,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Denver-Colorado/400x250/Denver_Colorado_temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Elko Nevada Temple",
            location: "Elko, Nevada, United States",
            dedicated: "2022-05-07",
            area: 5133,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Elko-Nevada/400x250/slctemple7.jpg"
        },
        {
            templeName: "Edmonton Alberta Temple",
            location: "Edmonton, Alberta, Canada",
            dedicated: "1999-02-27",
            area: 10700,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/Edmonton-Alberta/2018/400x250/Edmonton_Alberta_Temple01.jpg"
        },
        {
            templeName: "Sacramento California Temple",
            location: "Rancho Cordova, California, United States",
            dedicated: "2006-09-03",
            area: 19500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/Sacramento-California-Temple/Sacramento-California-Temple-20358-main.jpg"
        }
    ];

    // DOM elements
    const templeContainer = document.getElementById('temple-cards');
    const navLinks = document.querySelectorAll('nav a');

    // Function to create temple card
    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        // Format the date for display
        const dedicationDate = new Date(temple.dedicated);
        const formattedDate = dedicationDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        card.innerHTML = `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${formattedDate}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            </figure>
        `;
        
        return card;
    }

    // Function to display temples
    function displayTemples(filteredTemples) {
        templeContainer.innerHTML = '';
        filteredTemples.forEach(temple => {
            templeContainer.appendChild(createTempleCard(temple));
        });
    }

    // Filter functions
    function filterOld() {
        return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    }

    function filterNew() {
        return temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
    }

    function filterLarge() {
        return temples.filter(temple => temple.area > 90000);
    }

    function filterSmall() {
        return temples.filter(temple => temple.area < 10000);
    }

    // Event listeners for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            e.target.classList.add('active');
            
            // Filter based on clicked link
            switch(e.target.textContent.toLowerCase()) {
                case 'old':
                    displayTemples(filterOld());
                    break;
                case 'new':
                    displayTemples(filterNew());
                    break;
                case 'large':
                    displayTemples(filterLarge());
                    break;
                case 'small':
                    displayTemples(filterSmall());
                    break;
                case 'home':
                default:
                    displayTemples(temples);
            }
        });
    });

    // Initial display of all temples
    displayTemples(temples);
});