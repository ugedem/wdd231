document.addEventListener('DOMContentLoaded', () => {
    fetch('data/menu.json')
        .then(response => response.json())
        .then(data => {
            const menuItems = data.items;
            const featuredMenu = document.getElementById('featured-menu');
            
            // Randomly select three items from the menu
            const randomItems = getRandomItems(menuItems, 3);
            
            // Display the random items on the page
            randomItems.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-info">
                        <h2>${item.name}</h2>
                        <p>Small: ₦${item.price.small} | Medium: ₦${item.price.medium} | Large: ₦${item.price.large}</p>
                    </div>
                `;
                
                featuredMenu.appendChild(menuItem);
            });
        })
        .catch(error => console.error('Error loading menu:', error));
});

// Function to select a random set of items
function getRandomItems(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
