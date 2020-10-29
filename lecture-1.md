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
	```console
	foo@bar:~$ npm install nodemon
	``` 