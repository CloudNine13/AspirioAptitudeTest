import React from "react";

/**
 * Summary.
 * This function is used to define and use the socket connection
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof helpers
 * 
 */

const PORT = process.env.PORT || 8080

export const socket = () => {
    const SERVER = `http://localhost:${PORT}/`
    const io = require("socket.io-client")
    return io.connect(SERVER)
}

export const SocketContext = React.createContext();