const jsonServer = require('json-server');
const path = require('path');
const chalk = require('chalk');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, './db/db.json'));
const middlewares = jsonServer.defaults();
const PORT = 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use(router);

server.listen(PORT, (err) => {
  if (err) {
    console.error(chalk.red('JSON Server failed'));
    console.log(chalk.blue(err));
  } else {
    console.log(chalk.green(`JSON Server is running on port ${PORT}`));
  }
});