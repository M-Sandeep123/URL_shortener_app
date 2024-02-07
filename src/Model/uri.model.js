/**
 * This is the uri model schema.
 */
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalURL: { 
        type: String, 
        required: true 
    },
    shortURL: { 
        type: String, 
        required: true 
    },
    customAlias: {
        type: String
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('URL', urlSchema);
