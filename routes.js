const express = require("express");
const router = express.Router();
const {
  getArticles,
  getOneArticle,
  postArticle,
  putArticle,
} = require("./controllers");
const { userOne } = require("./middleware");

// all
router.get("/articles", getArticles);
// one
router.get("/article/:id", getOneArticle);
// post article
//assume userOne is a middleware that works only on post and put
router.post("/article", userOne, postArticle);
//put article
router.put("/article", userOne, putArticle);

module.exports = router;
