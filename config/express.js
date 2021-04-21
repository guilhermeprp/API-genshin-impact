// const bodyParser = req+uire("body-parser"); DEPRECATED
const express = require("express");
const config = require("config");

module.exports = () => {
  const app = express();

  app.set("port", process.env.PORT || config.get("server.port"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  require("../api/routes/charactersInfo")(app);
  return app;
};
