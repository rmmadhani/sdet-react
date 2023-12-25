// src/api.js
export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:5108/api/products'); // Adjust the URL to your API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};
