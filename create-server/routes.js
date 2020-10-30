// bring in the fs module
const fs = require('fs');

const requestHandler = (req, res) => {
        const url = req.url;
        const method = req.method;

        // using this file for our routing logic in our existing app (app.js)
        if (url === '/') {
                // return html response of input form & button
                res.write('<html>');
                res.write('<head><title>Enter message</title></head>');
                res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
                res.write('</html>');
                return res.end(); // end of the response
        

        if (url === '/message' && method === 'POST') {
                const body = [];
                // listening to data events with .on() method
                req.on('data', (chunk) => {
                        console.log(chunk)
                        body.push(chunk);
                });
                return req.on('end', () => {
                        const parsedBody = Buffer.concat(body).toString();
                        console.log(parsedBody);
                        const message = parsedBody.split('=')[1]; // contains message text
                        fs.writeFile('message.txt', message, (err) => {
                                res.statusCode = 302;
                                res.setHeader('Location', '/');
                                return res.end();
                        });
                });
        }
        // process.exit(); - a hard exit from the event loop

        // attach header to response, meta-data: type of data, html
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js server!</h1></body>');
        res.write('</html>');
        res.end(); // end of the response

};

// export the modules of this file
module.exports = requestHandler;