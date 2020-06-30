module.exports = function(app) {
  // for <Upload> example
  app.use('/upload', (req, res) => {
    res.sendStatus(200);
  });
};
