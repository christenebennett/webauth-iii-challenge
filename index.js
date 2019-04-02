const server = require('./api/server');

const port = process.env.PORT || 9090;

server.listen(port, () => console.log(`The server is listening on port ${port}`));