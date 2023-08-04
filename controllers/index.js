const indexController = async (req, res) => {
  const text = {
    text: "EJS",
  };
  res.render("index", text);
};

module.exports = {
  indexController,
};
