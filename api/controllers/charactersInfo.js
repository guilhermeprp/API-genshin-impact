module.exports = () => {
  const chacartersInfoDB = require("../data/charactersInfo.json");
  const controller = {};

  controller.listCharactersInfo = (req, res) =>
    res.status(200).json(chacartersInfoDB);
  return controller;
};
