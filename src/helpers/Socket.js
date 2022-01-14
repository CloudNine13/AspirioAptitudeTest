import React from "react";
import socketio from "socket.io-client";

const SERVER = "http://localhost:8080/"

export const socket = socketio.connect(SERVER);
export const SocketContext = React.createContext();