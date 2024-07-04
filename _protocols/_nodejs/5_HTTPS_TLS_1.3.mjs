import https from 'node:https';
import fs from 'node:fs';

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem'),
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.3'
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening ${address.address}:${address.port}`);
});

server.on('error', (err) => console.error(err));

server.listen(5000, '127.0.0.1')
