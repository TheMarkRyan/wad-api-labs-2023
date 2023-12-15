// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

// Retrieve the port number from environment variables
// eslint-disable-next-line no-undef
const port = process.env.PORT;

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello WAD2!');
});

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

  
});
