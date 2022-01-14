import { socket } from './helpers/Socket'


function getBooks() {
    socket.emit('get books')
    return socket;
}

export default getBooks;