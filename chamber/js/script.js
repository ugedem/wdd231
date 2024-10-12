document.addEventListener('DOMContentLoaded', () => {
    const directoryContainer = document.getElementById('directory-container');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    let currentView = 'grid';  // default view
    let currentMembers = [];

    // Fetch the members' data from members.json
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const members = await response.json();
            currentMembers = members;
            displayMembers(currentView);  // default to grid view
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Display members based on the current view (grid or list)
    function displayMembers(viewType) {
        directoryContainer.innerHTML = '';  // Clear previous content
        currentMembers.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('directory-item', viewType);

            // Inner HTML structure for each member
            memberElement.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            directoryContainer.appendChild(memberElement);
        });
    }

    // Event listeners for view buttons
    gridViewButton.addEventListener('click', () => {
        currentView = 'grid';
        directoryContainer.classList.remove('list-view');
        directoryContainer.classList.add('grid-view');
        displayMembers(currentView);
    });

    listViewButton.addEventListener('click', () => {
        currentView = 'list';
        directoryContainer.classList.remove('grid-view');
        directoryContainer.classList.add('list-view');
        displayMembers(currentView);
    });

    // Initial fetch and display of members in grid view
    fetchMembers();
});
