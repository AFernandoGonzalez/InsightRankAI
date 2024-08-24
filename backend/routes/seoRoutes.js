// routes/seoRoutes.js

const express = require('express');
const router = express.Router();
const { getSeoData } = require('../controllers/seoController');

// Define the route to fetch SEO data
router.get('/data', getSeoData);

module.exports = router;
