// Adds the dotenv package AKA MONGO_URI eviroment variable
require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose


const indexSchema = new Schema({
        id: {ObjectID},
        title: {type: String, required: true},
        description: {type: String, required: true},
        year: {type: Number},
        quantity: {type: Number},
        imageURL: {type: String, default: "../assets/default.png"}

})

//Renaming Schema to Books
const Books = mongoose.model('Books', indexSchema )
module.exports = indexSchema


