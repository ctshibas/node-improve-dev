# Fixing errors in your code-base
- - - -  - - - - - - - - - - - - - - 

There are different types of errors are:

* **Syntax errors** (typos, missing parentheses, etc.). Easy to fix
* **Runtime errors** (you try to execute some code that breaks when you try to run it)
* **Logical errors** (hardest one where the error is not necessarily shown and needs debugging).

## Syntax error example:
- - - - - - - - - - - - - - -

We remove the 't' in _const_ in our Javascript code.

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

