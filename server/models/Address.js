const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    Country: {
        type: String,
        required: true
    },
    Province: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    },
    HouseNo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Address', AddressSchema);