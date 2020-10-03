const express = require("express");

let userOne = (req, res, next) => {
  let headers = req.headers;
  if (headers.user == 1) return next();
  res.statusCode = 403;
  return res.json("NOT AUTHORIZED!!");
};

let notFound = (req, res, next) => {
  res.statusCode = 404;
  return res.json("404 NOT FOUND !!!!");
};

module.exports.userOne = userOne;
module.exports.notFound = notFound;
