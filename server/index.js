const HTTP = require('http');

const server = new HTTP.Server((req, res) => {
  res.end('hello');
});

server.listen(process.env.PORT || 8080, 'localhost');
