// services/googlePageSpeedService.js

const axios = require('axios');

const getPageSpeedData = async (url) => {
  const apiKey = process.env.GOOGLE_API_KEY;
  console.log("API Key: ", apiKey);
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching PageSpeed data:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch PageSpeed Insights data');
  }
};

module.exports = { getPageSpeedData };
