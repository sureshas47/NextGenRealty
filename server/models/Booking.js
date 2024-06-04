const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    UserID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    PropertyID: {
        type: Schema.Types.ObjectId,
        ref: 'Property'
    },
    Quantity: {
        type: Number,
        required: true
    },
    TotalPrice: {
        type: Number,
        required: true
    },
    BookingDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Booking', BookingSchema);