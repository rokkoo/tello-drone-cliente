import React from 'react'
import socket from './SocketConnection'

const context =  React.createContext({
    droneData: {},
    name: 'prueba',
    sendCommand: command => {
        socket.emit('command', command)
        console.log('Send command', command)
    }
})

export default context