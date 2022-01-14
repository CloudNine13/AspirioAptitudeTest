import { socket } from './helpers/Socket'

export const getBooks = () => {
    socket.emit('get books')
    return socket;
}

export const updateEntry = (id, name, author, description) => {
    socket.emit('edit entry', {id: id, name: name, author: author, description: description})
}
