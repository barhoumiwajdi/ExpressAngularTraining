const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    name: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    subscribe: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    tel: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    timing: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    topics: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Accounts', AccountSchema)