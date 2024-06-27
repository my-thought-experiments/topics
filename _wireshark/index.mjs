// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n App 1 ' + process.env.PORT);
});

// starts a simple http server locally on port
server.listen(process.env.PORT, '127.0.0.1', () => {
  console.log(`Listening on 127.0.0.1:${process.env.PORT}`);
});

// run with `node server.mjs`
