#Week 2 Tasks Documentation
---
**Server.js** file contains the setup of the webserver that used to serve index.html on port 3000. 
The simple HTML page can be served by running command `node server.js` and clicking on the link [localhost](http://localhost:3000/).

**Server_get.js**, on the other hand, contains a microservice that is able to accept parameters through request (i.e. all the content after the question mark in the url) and execute arithmetic operations with a function call.
The function **addTwoNumber()** accepts two parameters **n1** and **n2**, and returns the sum of those two numbers. The final result will be shown in JSON format on the screen as `{statuscode: 200, data: xxx}`. 

The **package.json** contains information about the current project and a list of all dependencies used in this project. Dependencies can be installed using command `npm i` or `npm install`.
