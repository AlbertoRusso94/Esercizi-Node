// import { createServer } from "node:http";

const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    console.log("request received");

    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    response.end("<html><body><p>Es-09 with Node.js!</p></body></html>");
  });
}
module.exports = createApp;

// const server = createServer((request, response) => {
//   console.log("request received");

//   response.statusCode = 200;

//   response.setHeader("Content-Type", "text/html");

//   response.end("<html><body><p>Es-09 with Node.js!</p></body></html>");
// });

// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000`);
// });
