// spotlight.js
document.addEventListener("DOMContentLoaded", function() {
    const spotlightGrid = document.querySelector('.spotlight-grid');

    fetch('data/members.json')  // Ensure this path is correct relative to your HTML file
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading business data.');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                memberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name} logo">
                    <h3>${member.name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Membership Level:</strong> ${member.membership}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                `;

                spotlightGrid.appendChild(memberCard);
            });
        })
        .catch(error => {
            spotlightGrid.innerHTML = `<p>Error loading business data: ${error.message}</p>`;
        });
});
