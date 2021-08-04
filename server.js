const http = require("http");
const router = require("./router");

const PORT = process.env.port || 5000;

const server = http.createServer((req, res) => {
  router.routeMethod(req, res);
});
server.listen(PORT);
console.log(`SERVER listening on port: ${PORT}`);
