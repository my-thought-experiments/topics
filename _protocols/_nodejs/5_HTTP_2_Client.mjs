import http2 from 'node:http2';
import fs from 'node:fs';

let data = '';

const client = http2.connect('https://127.0.0.1:5000', {
  ca: fs.readFileSync('public-cert.pem'),
});

client.on('error', (err) => console.error(err));

const req = client.request({ ':path': '/' });
req.setEncoding('utf8');

req.on('response', (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.on('data', (chunk) => {
  data += chunk;
});

req.on('end', () => {
  console.log(`\n${data}`);
  client.close();
});

req.end();
