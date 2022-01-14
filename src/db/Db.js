require('dotenv').config()
const mongoose = require('mongoose');
const Book = require('../models/Book')


async function findBooks() {
    await mongoose.connect(process.env.DB_URL).then(_=>console.log("connected"));
    return await Book.find().exec()
}

async function editEntry(data) {
    await mongoose.connect(process.env.DB_URL).then(_=>console.log("connected"));
    const query = {'_id': data.id}
    delete data.id

    return await Book.findOneAndUpdate(query, data)
}

module.exports = {
    editEntry,
    findBooks
}