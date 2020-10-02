let defaultMiddleware = (req, res, next) => {
    console.log("I am a middleware =))");
    return next();
  };
  let lastMiddleware=(req, res, next) => {
    res.statusCode = 404;
    return res.json("404 not found!!");
  }
  
  module.exports.defaultMiddleware = defaultMiddleware;
  module.exports.lastMiddleware = lastMiddleware;