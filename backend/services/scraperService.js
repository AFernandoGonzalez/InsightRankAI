// services/scraperService.js

const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWebsiteData = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Example: Scraping all H1 tags
    const h1Tags = [];
    $('h1').each((index, element) => {
      h1Tags.push($(element).text());
    });

    // Add more scraping logic as needed

    return {
      h1Tags,
      // Add more scraped data here
    };
  } catch (error) {
    console.error('Error scraping website data:', error.message);
    throw new Error('Failed to scrape website data');
  }
};

module.exports = { scrapeWebsiteData };
