import express from "express";

const server = express();

server.use(
  express.static("./dist"),
  express.static(".")
);

server.listen(3000, () => {
  console.log("Server is up on port 3000.");
});