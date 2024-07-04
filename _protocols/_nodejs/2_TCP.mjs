import net from 'node:net';

const server = net.createServer((socket) => {
  console.log(`TCP Handshake Successful with ${socket.remoteAddress}:${socket.remotePort}`);

  socket.write('Hello Client!')

  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`)
  })
})

server.on('error', (err) => console.error(err));

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.listen(5000, '127.0.0.1')
