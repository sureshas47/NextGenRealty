const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    PropertyName: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    Price: {
        type: Number,
        required: true
    },
    BedsCount: {
        type: Number,
        required: true
    },
    BathCount: {
        type: Number,
        required: true
    },
    AgentID: {
        type: Schema.Types.ObjectId,
        ref: 'Agent'
    },
    Image: {
        type: String
    },
    CategoryID: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    AddressID: {
        type: Schema.Types.ObjectId,
        ref: 'Address'
    }
});

module.exports = mongoose.model('Property', PropertySchema);