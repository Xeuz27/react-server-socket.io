const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");
const Socket = require('./sockets')

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //http.server
    this.server = http.createServer(this.app);

    //config de sockets
    this.io = socketIO(this.server, {
      /*config de socket server*/
    });
  }

  middlewares() {
    //desplegar directorio publico
    this.app.use( express.static( path.resolve( __dirname, "../public" ) ) );
  }

  socketsConfig(){
    //config de sockets
    new Socket(this.io);
  }

  exe() {
    //init middlewares
    this.middlewares();
    //init sockets
    this.socketsConfig();
    //init server
    this.server.listen(this.port, () => {
      console.log("Server listening on port: ", this.port);
    });
  }
}
module.exports = Server;