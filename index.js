const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const backup = require("./backup");
const headers = require("./headers");

server.use(middlewares, backup, headers, router);
server.listen(8080, () => {
  console.log("API server now running");
});
