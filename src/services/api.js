import axios from 'axios';

const API_URL = 'https://dummyjson.com/products?limit=200';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
};
