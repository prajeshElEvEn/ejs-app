const indexController = async (req, res) => {
  const data = {
    text: "EJS",
  };
  res.render("index", data);
};

module.exports = {
  indexController,
};
