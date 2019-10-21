const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if (request.url === '/cars') {
        fs.readFile('./views/index.html', 'utf8', (errors, contents) => {
            console.log(contents);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/index2.html', 'utf8', (errors, contents) => {
            console.log(contents);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/index3.html', 'utf8', (errors, contents) => {
            console.log(contents);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/download.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/download.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/cat2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/download_1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/download_1.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/css' });
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/download_2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/download_2.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-type': 'image/jpeg' });
            response.write(contents);
            response.end();
        })
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");
