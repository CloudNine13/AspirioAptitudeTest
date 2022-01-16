require('dotenv').config()
const mongoose = require('mongoose');
const Book = require('../models/book')

/**
 * Summary.
 * findBooks function is used to get all the books
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof db
 * 
 */
async function findBooks() {
    await mongoose.connect(process.env.DB_URL);
    return await Book.find()
}

/**
 * Summary.
 * addEntry function is used to add a book to books' collection
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof db
 * 
 * @param data is used to pass the data to add
 */
async function addEntry(data) {
    await mongoose.connect(process.env.DB_URL);
    const book = new Book({
        name: data.name,
        author: data.author,
        description: data.description
    })
    return await book.save()
}

/**
 * Summary.
 * addEntry function is used to add a book to books' collection
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof db
 * 
 * @param data is used to pass the data to edit
 */
async function editEntry(data) {
    await mongoose.connect(process.env.DB_URL);
    const query = {'_id': data.id}
    return await Book.findOneAndUpdate(query, data)
}


module.exports = {
    findBooks,
    addEntry,
    editEntry
}