# Nodemon package
 - - - - - - - - - - 

Since the package has been locally imported to the project,  if we tried to call it from terminal like so:

```bash
foo@bar:~$ nodemon app.js
```
It wouldn't find the command since it's not globally available (only locally in this case). The only way this can be used in the local project is to use the command ```nodemon app.js``` in the ```"scripts"``` section of the ```package.json``` file. Since on trigger, will search locally in the project for the ```nodemon``` package.