const db = require('./database/index.js');
const server = require('./server/index.js');

const port = 8080;

server.listen(port).on('error', (err) => {
  console.log('Error starting server');
  console.error(err);
  process.exit(0);
}).on('listening', () => {
  console.log('Server successfully started. Listening on port ' + port + '.');
});