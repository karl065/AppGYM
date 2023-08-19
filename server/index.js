const {conn} = require('./src/DB');
const server = require('./src/server.js');
const PORT = 3000;

conn.sync().then(() => {
  server.listen(PORT, async () => {
    console.log(`Corriendo en el puerto: ${PORT}`);
  });
});
