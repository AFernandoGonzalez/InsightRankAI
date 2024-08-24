// src/services/seoService.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const fetchSeoData = async (url) => {
  try {
    const response = await axios.get(`${API_URL}/seo/data`, {
      params: { url },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching SEO data:', error.message);
    throw error;
  }
};
