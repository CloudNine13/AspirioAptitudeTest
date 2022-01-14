const express = require('express');
const { findBooks, editEntry } = require('../db/Db');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)

server.listen(8080, () => {
    console.log("Server is on")
})

app.get('/', (req, res) => {
    res.status(200).send("CODE: 200")
})

io.on('connection', (socket) => {
    socket.on('get books', () => {
        findBooks().then(data => {
            socket.emit('return books', data)
        })
    })

    socket.on('edit entry', (data) => {
        editEntry(data).then(_=> {
            socket.emit('update components')
        })
    })
})





