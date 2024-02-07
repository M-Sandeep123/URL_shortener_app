/**
 * This file contains the logic of URL shortener
 */
const shortid = require('shortid');
const URI = require('../Model/uri.model');

// Function to generate a custom alias based on the incoming URL
const generateCustomAlias = (url) => {
  // Extract domain name from URL
  const domain = extractDomain(url);
  return domain || shortid.generate();
};

// Function to extract domain name from a URL
const extractDomain = (url) => {
  try {
    const completeURL = `${url}`;
    const { hostname } = new URL(completeURL);
    const domain = hostname.replace(/^www\./, '');
    return domain;
  } catch (error) {
    console.error('Error extracting domain:', error.message);
    return null;
  }
};

exports.shortenURL = async (req, res) => {
  const { originalURL } = req.body;

  try {
    // Check if a short URL for the original URL already exists
    const existingURI = await URI.findOne({ originalURL });
    if (existingURI) {
      return res.status(401).send("Short URL for this resource is already generated");
    }

    // Generate custom alias based on the original URL
    const customAlias = generateCustomAlias(originalURL);

    // Generate unique short URL
    const shortURL = shortid.generate();

    // Save URL mapping to database
    const newURI = new URI({
      originalURL,
      shortURL,
      customAlias,
      userId: req.user
    });
    await newURI.save();

    res.json({ shortURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.redirectURL = async (req, res) => {
  const { shortURL } = req.params;
  try {
    // Find original URL based on short URL
    const uri = await URI.findOne({ shortURL });
    if (!uri.originalURL) {
      return res.status(404).json({ error: 'Short URL not found' });
    }

    // Redirect to original URL
    res.status(200).send(uri);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Import the URI model
exports.getAllShortURLs = async (req, res) => {
  try {
    // Retrieve all short URLs created by the user
    const userId = req.user;
    const shortURLs = await URI.find({ userId });
    res.json({ shortURLs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

