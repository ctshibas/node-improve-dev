# Logical Errors
- - - - - - - - - - - - 

## Example: parse body of the data in route.js

We change the key of the element that is parsed to the .txt file.
```javascript
...
return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split('=')[0]; // contains message text, changed from 1 to 0
        fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
        });
});
...
```

When you restart the server, open the page and submit data in the form of the web page, the contents of the _message.txt_ will contain the word "message" rather than the user's input. This is a logical error, we get no message but the behaviour of the app is not as intended. 

### Question: How do you work on these kind of errors?

**Answer: Node.js debugger!**
- - - - - - - - - - - - - - - - 

It has an integration into VS Code. Set VS to listen to code on debug mode and set breakpoints.