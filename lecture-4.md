# Runtime Errors
- - - - - - - - - - - - - 

## Example: res.write() method in routes.js
```javascript
...
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
                ~~return~~ res.end(); // end of the response, prevents execution of subsequent statements
        }
...
```

Then after returning 
```javascript
return res.end();
```

It will execute the rest of this code
```javascript
// attach header to response, meta-data: type of data, html
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title></head>');
res.write('<body><h1>Hello from my Node.js server!</h1></body>');
res.write('</html>');
res.end(); // end of the response
```

