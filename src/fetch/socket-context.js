import React, {useState} from 'react'
import socket from './SocketConnection'

const Context =  React.createContext({
    droneData: [],
    name: 'prueba',
    sendCommand: command => {
        socket.emit('command', command)
        console.log('Send command', command)
    },
})

//TODO: hacer un state para las informacion del dron
class GlobalState extends React.Component {
    state =  {
        dronData: [{battery: 'battery'}]
    }
    render() {
        socket.on('droneInformation', (data) => {
            console.log(data)
        })

        socket.on('droneInformation', function(data) {
            console.log(data)
        })
        return (
            <Context.Provider
            value={{
                droneData: this.state.dronData
            }}
            >
            {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context