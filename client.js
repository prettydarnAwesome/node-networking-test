const dgram = require('dgram')
const message = Buffer.from('hello world my name is daniel')
const client = dgram.createSocket('udp4')

const serverIP = '127.0.0.1'

client.send(message, 27015, serverIP, (err) => {
  client.close()
})