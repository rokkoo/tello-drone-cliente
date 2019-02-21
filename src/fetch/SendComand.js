import React from 'react'
import axios from 'axios';
import qs from 'qs' // Stringify library
import socket from './SocketConnection'

const sendCommand = async (command) => {
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

    // wait for response
    await axios.post(`http://localhost:3020/`, qs.stringify({
        command
    }), config)
}