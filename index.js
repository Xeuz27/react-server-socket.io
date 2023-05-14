const cors = require('cors');
const Server = require("./models/server");
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
  }

const server = new Server();
// Enable CORS
server.use(cors());
server.exe()
