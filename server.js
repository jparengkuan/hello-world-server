const http = require('http');

const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Send JSON response
    res.end(JSON.stringify({ message: 'Hello World!' }));
});

// Listen on port 80
server.listen(8080, () => {
    console.log('Server running at http://localhost:80/');
});