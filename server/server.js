const jsonServer = require('json-server');

const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router('server/db.json');

server.use(jsonServer.defaults);
server.use(router);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at "http://localhost:${PORT}"`);
});
