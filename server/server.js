const express = require('express');
const { findBooks, editEntry, addEntry } = require('../db/db');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path');

const PORT = process.env.PORT || 8080

app.use(express.static(path.resolve(path.dirname(''), './react-ui/build')))

server.listen((PORT), () => {
    console.log(`Server running at port ${PORT}`);
})

io.sockets.on('connection', (socket) => {
    //Listening to all connections 
    socket.on('get books', () => {
        //Listening to get books 
        findBooks().then(data => {
            io.emit("ret bks", {data: data})
        })
    })

    socket.on('add entry', (data) => {
        //Listening to add a book 
        addEntry(data.items).then(_=> {
            findBooks().then(data => {
                io.emit('update components', {data: data})
            })
        })
    })

    socket.on('edit entry', (data) => {
        //Listening to edit a book 
        editEntry(data.items).then(_=> {
            findBooks().then(data => {
                io.emit('update components', {data: data})
            })
        })
    })
})





