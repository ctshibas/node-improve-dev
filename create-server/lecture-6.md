# Module Summary: Debugging
- - - - - - - - - - - - - - - - 

## NPM
- - - - - - - - - - - - - - - -
* Stands for node package manager and manages the project & dependencies. Also adds to the ```package.json``` file and can include scripts/shortcuts to help with running the node project:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js",
    "start-server": "node app.js"
  }, ...
```
* You initialise the node project with ```npm init``` + ```package.json``` file.

* npm helps to install 3rd party packages that aren't _core modules_ **(http, fs, etc)**.

* You can differentiate between production ```--save``` (express), development ```--save-dev``` (nodemon) & global dependencies ```-g```.

## Types of errors
- - - - - - - - - - - - - - - -
* Syntax, runtime & logical error can break your app.
* Syntax, and runtime errors throw (helpful) error messages with line numbers.
* Logical errors can be fixed with testing and the help of the debugger.

## Debugging
- - - - - - - - - - - - - - - -
* Using the VS Code Node debugger to step through code (line-by-line).
* Breakpoints to help analyse variable values at runtime.
* Can also use breakpoints to analyse and track event-driven code & async nature of node.js.