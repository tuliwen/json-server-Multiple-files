var jsonServer = require('json-server');
var server = jsonServer.create();
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api1', jsonServer.router('users.json'));
server.use('/api2', jsonServer.router('posts.json'));
// server.use(router);
server.listen(3000, function () {
  console.log('JSON Server is running');
});
