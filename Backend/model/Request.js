const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    state: {
        type: String,
        required: true,
        default: "Pending"
    },
    userid: {
        type: String,
        required: true
    },
    noOfTroops: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('UserRequest', userSchema);