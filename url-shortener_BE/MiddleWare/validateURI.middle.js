/**
 * This file valide the input url is valid or not
 */
const validUrl = require('valid-url');

function validateUrl(req, res, next) {
  const { url } = req.body;
  if (validUrl.isWebUri(url)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }
  next();
}

module.exports = validateUrl;
