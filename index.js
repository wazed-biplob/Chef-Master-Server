const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("./data.json");
app.get("/", (req, res) => {
  res.send("The server is running.");
});
app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
