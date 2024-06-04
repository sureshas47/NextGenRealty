const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AgentSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    FbLink: {
        type: String
    },
    InstaLink: {
        type: String
    },
    TwitterLink: {
        type: String
    },
    Image: {
        type: String
    }
});

module.exports = mongoose.model('Agent', AgentSchema);