const express = require("express");

module.exports = function(server) {
  
  const router = express.Router();
  server.use("/api", router);

  const TodoService = require("../api/todo/service");
  TodoService.register(router, "/todos");
};