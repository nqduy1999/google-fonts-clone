var path = require('path');
var express = require('express');

var DIST_DIR = path.join(__dirname, 'build');
var PORT = 3333;
var app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get('*', function (req, res) {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

function listen(port) {
  app.portNumber = port;
  app
    .listen(port, () => {
      console.log('Server is running on port ' + app.portNumber);
      console.log('http://localhost:' + app.portNumber);
    })
    .on('error', function (err) {
      if (err.errno === 'EADDRINUSE') {
        listen(port + 1);
      } else {
      }
    });
}

listen(PORT);
