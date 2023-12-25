import axios from 'axios';
//const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
//const API_URL = 'https://localhost:7073/STOCKDATA';
//npm starconst API_URL = 'http://localhost:5108/api/products';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // This is the 'Extract' step
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const transformData = (data) => {
    // 'Transform' step - filter posts with ID less than 50
    return data.filter(post => post.id < 150);
  };
  
 export const fetchDataFromApi = async () => {
    // Replace with actual API call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  
  export const fetchDatanorthwind = async () => {
    //const url = 'http://localhost:1786/api/products'; // Replace with your actual API endpoint
   const url ='https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};
