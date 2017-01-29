app.get("/", function(req, res) {
  new API(config).for(req.query.line, req.query.station).get(function(err, data) {
    if (err) {
      return res.send(500, "API error");
    }

    new Bootstrap(data).load(function(err, responseHTML) {
      if (err) {
        return res.send(500, "Template error");
      }

      res.send(responseHTML);
    });
  });
});
