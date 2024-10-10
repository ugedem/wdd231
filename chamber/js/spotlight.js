fetch('data/members.json')
    .then(response => response.json())
    .then(members => {
        // Filter members who are Gold or Silver
        const spotlightMembers = members.filter(member => ['Gold', 'Silver'].includes(member.membership));
        
        // Select 2-3 random spotlight members
        const selectedSpotlights = getRandomMembers(spotlightMembers, 2);
        
        // Display them in the spotlight container
        const spotlightContainer = document.getElementById('spotlight-container');
        selectedSpotlights.forEach(member => {
            spotlightContainer.innerHTML += `
                <div class="member-spotlight">
                    <img src="${member.image}" alt="${member.name}">
                    <h4>${member.name}</h4>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
        });
    });

function getRandomMembers(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
