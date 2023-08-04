const { log } = require("console");
const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8001;

app.use(express.static("public"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", require("./routes"));

server.listen(port, () => {
  log(`Server running on http://localhost:${port}`);
});
