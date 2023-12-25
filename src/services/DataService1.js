import axios from 'axios';
//const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
//const API_URL = 'https://localhost:7073/STOCKDATA';
//const API_URL = 'http://localhost:5108/api/products';

/* export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // This is the 'Extract' step
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
}; */



/* export const transformData = (data) => {
    // 'Transform' step - filter posts with ID less than 50
    return data.filter(post => post.id < 150);
  }; */

  
  
 export const fetchDataFromApi = async () => {
    // Replace with actual API call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  