module.exports = () => {
  const controller = require("../controllers/charactersInfo")();

  app.route("/api/v1/charactersInfo").get(controller.listCharactersInfo);
};
