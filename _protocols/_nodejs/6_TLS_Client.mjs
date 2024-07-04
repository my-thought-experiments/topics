import tls from 'node:tls';
import fs from 'node:fs';

const options = {
  // Necessary only if the server requires client certificate authentication.
  key: fs.readFileSync('client-key.pem'),
  cert: fs.readFileSync('client-cert.pem'),

  // Necessary only if the server uses a self-signed certificate.
  ca: [ fs.readFileSync('server-cert.pem') ],

  // Necessary only if the server's cert isn't for "localhost".
  checkServerIdentity: () => { return null; },
};

const socket = tls.connect(5000, options, () => {
  console.log('Client connected: ', socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();
});

socket.setEncoding('utf8');

socket.on('data', (data) => {
  console.log(data);
});

socket.on('end', () => {
  console.log(`Server listening ${address.address}:${address.port}`);
});
