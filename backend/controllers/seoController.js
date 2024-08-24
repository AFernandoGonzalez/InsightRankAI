// controllers/seoController.js

const { getPageSpeedData } = require('../services/googlePageSpeedService');

const getSeoData = async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Fetch data from Google PageSpeed API
    const pageSpeedData = await getPageSpeedData(url);

    // Log the entire response for debugging
    console.log("PageSpeed Data:", pageSpeedData);

    // Check if the necessary properties exist in the response
    const performanceScore = pageSpeedData?.lighthouseResult?.categories?.performance?.score || 0;
    const accessibilityScore = pageSpeedData?.lighthouseResult?.categories?.accessibility?.score || 0;
    const seoScore = pageSpeedData?.lighthouseResult?.categories?.seo?.score || 0;

    // Combine all data into a single response object
    const seoData = {
      performance: performanceScore,
      accessibility: accessibilityScore,
      seo: seoScore,
      // Additional metrics and scraped data can be added here
    };

    res.json(pageSpeedData);
  } catch (error) {
    console.error('Error fetching PageSpeed data:', error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSeoData };
