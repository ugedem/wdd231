document.addEventListener('DOMContentLoaded', () => {
    const directory = document.getElementById('directory');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    let currentMembers = [];

   
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const members = await response.json();
            currentMembers = members;
            displayMembers('grid'); 
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

   
    function displayMembers(view) {
        directory.className = view;
        directory.innerHTML = '';

        currentMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member');
            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name} logo">
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                </div>
            `;
            directory.appendChild(memberCard);
        });
    }

    
    gridViewButton.addEventListener('click', () => displayMembers('grid'));
    listViewButton.addEventListener('click', () => displayMembers('list'));

    
    fetchMembers();
    
    
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toDateString();
});
