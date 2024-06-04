const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    RegistrationDate: {
        type: Date,
        required: true
    },
    UserRoleId: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }
});

module.exports = mongoose.model('User', UserSchema);