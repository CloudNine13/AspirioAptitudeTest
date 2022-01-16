import React from "react";

/**
 * Summary.
 * This function is used to define and use the socket connection
 * 
 * @author Igor Dzichkovskii <Igordzich@gmail.com>
 * @memberof helpers
 * 
 */
export const socket = () => {
    const SERVER = "http://localhost:8080/"
    const io = require("socket.io-client")
    return io.connect(SERVER)
}

export const SocketContext = React.createContext();