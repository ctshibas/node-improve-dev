# NPM & Packages

For the local project it would include:
- - - - - - - - - - - - - - - - - - - -

(a) <Your Code>
(b) Core Node Packages **(_fs_, _http_, etc.)**
(c) 3rd Party Packages **(dependencies like _express_, _body-parser_, etc.)**

The 3rd party packages are available on the ___npm repository___ (cloud package repo), where all these packages live and you can install them using npm.

A package that handles auto-restarts and does not need you to quit the server on change of your code-base.

The solution: ***nodemon*** (can be found on the npm site).
We can install nodemon by the following: 
	
```zsh
npm install nodemon
``` 

But we can save it a different way. We can divide the dependencies into:

* Development Packages (nodemon is that as we use it in the dev process)
* Production Packages

We distinguish the development dependencies by:

### Development dependency
- - - - - - - - - - - - - -
```zsh
npm install nodemon --save-dev
```

### Production dependency
- - - - - - - - - - - - - -
```zsh
npm install nodemon --save
```

### Global dependency _(anywhere on your machine...)_
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
```zsh
npm install nodemon -g
```

On installing of the module your project now includes:

* node_modules folder
* package-lock.json
* dependency inclusion in the package.json file

```json
"devDependencies": {
	"nodemon": "^1.18.3"
}
```