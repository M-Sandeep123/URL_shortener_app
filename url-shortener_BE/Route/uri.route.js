/**
 * This file contains the end points for the uri 
 */
const uriController = require('../Controller/uri.controller');
const validateUrl = require("../MiddleWare/validateURI.middle");
const authJwtMiddleWare = require("../MiddleWare/authJwt.middleWare");

module.exports = (app) => {
    // POST route for URL shortening
    app.post('/shorten', [authJwtMiddleWare.verifyToken, validateUrl], uriController.shortenURL);

    // GET route for URL redirection
    app.get('/:shortURL', [authJwtMiddleWare.verifyToken], uriController.redirectURL);

    // GET route for all short urls created by the user
    app.get('/user/shorturls', [authJwtMiddleWare.verifyToken], uriController.getAllShortURLs);
};


