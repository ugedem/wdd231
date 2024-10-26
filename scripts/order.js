document.addEventListener('DOMContentLoaded', async () => {
    const foodSelect = document.getElementById('food');
    
    try {
        const response = await fetch('data/menu.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const menuData = await response.json();

        // Populate food options in the select element
        menuData.items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.name;
            option.textContent = item.name;
            foodSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading food options:', error);
    }

    const form = document.getElementById('order-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your order has been placed successfully!');
    });
});
