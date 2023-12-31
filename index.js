const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const data = require("./data.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("The server is running.");
});
app.get("/data", (req, res) => {
  res.send(data);
});
app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const chefId = data.find((chef) => parseInt(chef.id) === parseInt(id));
  res.send(chefId);
});
app.listen(port, () => {
  console.log(`Chef Master Sever Running on ${port}`);
});
