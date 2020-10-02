const express = require("express");
const app = express();
const port = 5000;
const { getArticles , getOneArticle } = require("./controllers");
const {defaultMiddleware, lastMiddleware} = require("./middleware");

// to get access to bind smth at the body of front-end page
app.use(express.json());
// midlleware
app.use(defaultMiddleware);

// route handller
// all
app.get("/v1/articles", getArticles);
// one

app.get("/v1/article/:id", getOneArticle);

app.post("/v1/article", (req, res) => {
  // get the req body
  let body = req.body;
  // check the request body
  if (!body.title || !body.athor || !body.text) {
    res.statusCode = 400;
    return res.json("Please send the full");
  }
  // save the data (not today)
  let data = {
    ...body,
  };
  // return the res
  data.id = 1;
  return res.json(data);
});

app.use(lastMiddleware);

app.listen(port, () => {
  console.log(`Run on ${port}`);
});