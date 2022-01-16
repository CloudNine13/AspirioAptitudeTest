import { socket } from './helpers/Socket'

/**
 * Summary.
 * This function is used to define and use the socket connection from the controller 
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof src
 * 
 */
export const setSocket = () => {
    const s = socket()
    return s;
}

const s = setSocket()

/**
 * Summary.
 * This function is used to send get books (findAll) petition to the server
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof src
 * 
 */
export const getBooks = (s) => {
    s.emit('get books')
}

/**
 * Summary.
 * This function is used to send add entry (add) petition to the server
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof src
 * 
 */
export const addEntry = (items) => {
    s.emit('add entry', {items: items})
}

/**
 * Summary.
 * This function is used to send update entry (edit) petition to the server
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof src
 * 
 */
export const updateEntry = (items) => {
    s.emit('edit entry', {items: items})
}
