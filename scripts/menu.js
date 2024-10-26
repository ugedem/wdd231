document.addEventListener('DOMContentLoaded', async () => {
    const menuContainer = document.getElementById('menu-list');

    try {
        const response = await fetch('data/menu.json');
        const menuItems = await response.json();

        menuItems.forEach(item => {
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');
            menuCard.innerHTML = `
                <h3>${item.name}</h3>
                <p>Small: ₦1200 | Medium: ₦2000 | Large: ₦3000</p>
                <p>${item.contents}</p>
            `;
            menuContainer.appendChild(menuCard);
        });
    } catch (error) {
        console.error('Error loading menu:', error);
    }
});
