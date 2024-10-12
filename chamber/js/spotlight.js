// spotlight.js
async function fetchBusinesses() {
    const response = await fetch('data/members.json');
    const businesses = await response.json();
    displayBusinesses(businesses);
}

function displayBusinesses(businesses) {
    const spotlightGrid = document.querySelector('.spotlight-grid');
    businesses.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.innerHTML = `
            <img src="${business.image}" alt="${business.name}" class="business-image">
            <h3>${business.name}</h3>
            <p>${business.address}</p>
            <p>${business.phone}</p>
            <p><a href="${business.website}" target="_blank">Visit Website</a></p>
            <p>Membership: ${business.membership}</p>
        `;
        spotlightGrid.appendChild(businessCard);
    });
}

fetchBusinesses();
