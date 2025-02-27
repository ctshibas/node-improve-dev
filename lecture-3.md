# Fixing errors in your code-base
- - - -  - - - - - - - - - - - - - - 

There are different types of errors are:

* **Syntax errors** (typos, missing parentheses, etc). Easy to fix.
* **Runtime errors** (you try to execute some code that breaks when you try to run it).
* **Logical errors** (hardest one where the error is not necessarily shown and needs debugging).

## Syntax error example:
- - - - - - - - - - - - - - -

(a) Typo, we remove the 't' in _const_ in our Javascript code.

```javascript
// create consts for modules
const http = require('http');
const dotenv = require('dotenv');

/* Custom module */
const routes =  require('./routes');

// used to bring in environment variables in a particular path
dotenv.config({ path: './config/config.env' });

// make port for your server to listen to
cons PORT = process.env.PORT || 3000;

// runs for every request that reaches the server
// access the methods of the modules - pass the name of the module
// tells node js to please exec the function stored in the routes for incoming requests
const server = http.createServer(routes);

// take the content of the server and listen for incoming requests
server.listen(PORT);
``` 
The response we get on ``` npm start ``` is:

```zsh
> create-server@1.0.0 start /Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server
> nodemon app.js

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
/Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server/app.js:17
cons server = http.createServer(routes);
     ^^^^^^

SyntaxError: Unexpected identifier
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
[nodemon] app crashed - waiting for file changes before starting...
```
(b) Missing parentheses, leave out a curly brace in our Javascript code.

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
                return res.end(); // end of the response
        
        // missing parentheses (ending curly brace)

        if (url === '/message' && method === 'POST') {
               // do something
        }
...

} // end of requestHandler
```
The response we get on ``` npm start ``` is:

```zsh
> create-server@1.0.0 start /Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server
> nodemon app.js

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
/Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server/routes.js:49
module.exports = requestHandler;
                                

SyntaxError: Unexpected end of input
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server/app.js:6:17)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
[nodemon] app crashed - waiting for file changes before starting...
```
It points to the ``` route.js ``` file, line 49, ending thrown off due to missing curly brace.