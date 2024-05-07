const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World! testing 1 2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = require("./Routes/Router");
app.use("/api", router);
