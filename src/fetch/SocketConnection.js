import io from 'socket.io-client'

const PORT = 3020
const endpoint =  `http://localhost:${PORT}`

const socket = io(endpoint)

export default socket