# Runtime Errors
- - - - - - - - - - - - - 

## Example: res.write() method in routes.js

We remove the ```return``` in the last line, ```res.end()```.

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
                res.end(); // end of the response, prevents execution of subsequent statements
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
When re-running the project, you get an error on the page that the site can't be reached and then a message appears on the terminal:

```zsh
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
_http_outgoing.js:558
    throw new ERR_HTTP_HEADERS_SENT('set');
    ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (_http_outgoing.js:558:11)
    at Server.requestHandler (/Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server/routes.js:39:13)
    at Server.emit (events.js:315:20)
    at parserOnIncoming (_http_server.js:874:12)
    at HTTPParser.parserOnHeadersComplete (_http_common.js:126:17) {
  code: 'ERR_HTTP_HEADERS_SENT'
}
[nodemon] app crashed - waiting for file changes before starting...
```

The error code tells that it involves that the headers being set when they've already been sent to the client. Adding the _return_ will ensure that if it enters the _if_ statement it, the execution will be done and will then be returned by the function _requestHandler_.