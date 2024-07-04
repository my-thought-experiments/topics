import tls from 'node:tls';
import fs from 'node:fs';

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),

  // This is necessary only if using client certificate authentication.
  requestCert: true,

  // This is necessary only if the client uses a self-signed certificate.
  ca: [ fs.readFileSync('client-cert.pem') ],
};

const server = tls.createServer(options, (socket) => {
  console.log('Server connected: ', socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('Hello Client!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.on('error', (err) => console.error(err));

server.listen(5000, '127.0.0.1')
