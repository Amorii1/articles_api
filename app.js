const express = require("express");
const app = express();
const port = 5000;
const {userOne, notFound} = require("./middleware");
const v1=require("./routes")

// to get access to bind smth at the body of front-end page
app.use(express.json());

// midlleware
app.use(userOne);

// route handller
app.use("/v1",v1)


//handling middleware
app.use(notFound);
app.listen(port, () => {
  console.log(`Run on ${port}`);
});