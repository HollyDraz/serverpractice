const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url); // Log the requested URL for debugging purposes

    if (req.url === '/about') {
        res.end('The About Page');
    } else if (req.url === '/contact') {
        res.end('The Contact Page');
    } else if (req.url === '/') {
        res.end('The Home Page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

server.listen(3005, () => {
    console.log('Server is running on http://localhost:3005');
});
