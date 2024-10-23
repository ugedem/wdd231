// Check Last Visit and Display Message
document.addEventListener('DOMContentLoaded', () => {
    const visitInfo = document.getElementById('visit-info');
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
  
    if (!lastVisit) {
      visitInfo.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const daysPassed = Math.floor((now - lastVisit) / oneDay);
      if (daysPassed < 1) {
        visitInfo.textContent = "Back so soon! Awesome!";
      } else if (daysPassed === 1) {
        visitInfo.textContent = "You last visited 1 day ago.";
      } else {
        visitInfo.textContent = `You last visited ${daysPassed} days ago.`;
      }
    }
    localStorage.setItem('lastVisit', now);
  
    // Load Spotlight Members from spotlight.js
    loadSpotlightMembers();
  });
  
  // Load Spotlight Members and Display in the Gallery
  function loadSpotlightMembers() {
    const spotlightGrid = document.getElementById('spotlight-members');
    
    // Fetching spotlight members from the already existing spotlight.js file
    if (typeof importSpotlightMembers === 'function') {
      importSpotlightMembers()
        .then(members => {
          members.forEach(member => {
            const spotlightItem = document.createElement('div');
            spotlightItem.classList.add('spotlight-item');
  
            spotlightItem.innerHTML = `
              <img src="${member.logo}" alt="${member.name}">
              <h3>${member.name}</h3>
              <p>${member.description}</p>
              <a href="${member.website}" target="_blank">Visit Website</a>
            `;
            spotlightGrid.appendChild(spotlightItem);
          });
        })
        .catch(error => {
          console.error('Error loading spotlight members:', error);
        });
    } else {
      console.error('Function importSpotlightMembers not found.');
    }
  }
  