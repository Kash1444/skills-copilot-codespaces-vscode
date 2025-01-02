// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request was made: ${req.url}`);

  if (req.url === '/comments') {
    const filePath = path.join(__dirname, 'comments.html');
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    readStream.pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Run the comments.js file and access the server using http://localhost:3000/comments. You should see the comments.html file.
