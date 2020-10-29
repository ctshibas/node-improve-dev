// create consts for modules
const http = require('http');
const dotenv = require('dotenv');

/* Custom module */
const routes =  require('./routes');

// used to bring in environment variables in a particular path
dotenv.config({ path: './config/config.env' });

// make port for your server to listen to
const PORT = process.env.PORT || 3000;

// runs for every request that reaches the server
// access the methods of the modules - pass the name of the module
// tells node js to please exec the function stored in the routes for incoming requests
const server = http.createServer(routes);

// take the content of the server and listen for incoming requests
server.listen(PORT);
