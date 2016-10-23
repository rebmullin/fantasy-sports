var express = require('express');

var app = express();
const PORT = process.env.PORT || 3055;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('express server is up on port ' + PORT);
})
