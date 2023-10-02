const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientsSchema = new Schema({
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
    password: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    ConfirmPassword: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    adresse: {
        city: {
            type: String,
            required: [true, 'Ce champs est obligatoire'],
        },
        state: {
            type: String,
            required: [true, 'Ce champs est obligatoire'],
        },
        CodePostale: {
            type: String,
            required: [true, 'Ce champs est obligatoire'],
        }
    },
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Clients', ClientsSchema)