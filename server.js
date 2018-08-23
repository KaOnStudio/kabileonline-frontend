const express = require('express');
const serveStatic = require('serve-static');
const secure = require('express-force-https');
const path = require('path');

// create the express app
const app = express();

// add force-https layer to the middleware
app.use(secure);

// create middleware to handle the serving the app
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) );

// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

// Create default port to serve the app on
const port = process.env.PORT || 5000;
app.listen(port);

console.log('Your castle is ready my lord at port ' + port);
