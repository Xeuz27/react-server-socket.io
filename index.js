const Server = require("./models/server");
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }
const server = new Server();

server.exe()
