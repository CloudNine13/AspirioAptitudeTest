require('dotenv').config()
const mongoose = require('mongoose');
const Book = require('../models/Book')

module.exports = {
    findBooks: async function(){
        await mongoose.connect(process.env.DB_URL).then(_=>console.log("connected"));
        const result = await Book.find().exec()
        return result
    }
}
