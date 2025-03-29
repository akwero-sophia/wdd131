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

// DOM elements
const templeContainer = document.getElementById('temple-cards');
const navLinks = document.querySelectorAll('nav a');

// Function to create temple card
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <figure>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        </figure>
    `;
    
}
];

// DOM elements
const templeContainer = document.getElementById('temple-cards');
const navLinks = document.querySelectorAll('nav a');

// Function to create temple card
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    
    card.innerHTML = `
        <figure>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
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
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
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
