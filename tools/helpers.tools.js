const { response } = require("express");

let helpers = {};
/**
 *
 * @param {*} res
 * @param {*} error
 * @param {*} statusCode
 * 
 * */ module.exports.ReE = helpers.ReE = (res, error, statusCode = 400) => {
  let response = { status: false , error};
  res.statusCode = statusCode;
  return res.json(response);
};
/**
 *
 * @param {*} res
 * @param {*} error
 * @param {*} statusCode
 * 
 * */ module.exports.ReS = helpers.ReS = (res, data, statusCode = 200) => {
  let response = { status: true };
  res.statusCode = statusCode;
  //the error/data statement can be written like this also
  response.data = data;
  return res.json(response);
};
