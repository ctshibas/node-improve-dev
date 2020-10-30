# Nodemon package
 - - - - - - - - - - 

Since the package has been locally imported to the project,  if we tried to call it from terminal like so:

```zsh
foo@bar:~$ nodemon app.js
```
It wouldn't find the command since it's not globally available (only locally in this case). The only way this can be used in the local project is to use the command ```nodemon app.js``` in the ```"scripts"``` section of the ```package.json``` file. Since on trigger, will search locally in the project for the ```nodemon``` package.

Start node server and has extra output when you run:

```zsh
npm start
```

And will update on the terminal log on change of any code in your project.

## Example:

```zsh
Corneilles-MacBook-Pro:create-server corneilletshibasu$ npm start

> create-server@1.0.0 start /Users/corneilletshibasu/Documents/GitHub/node-improve-dev/create-server
> nodemon app.js

[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`

```