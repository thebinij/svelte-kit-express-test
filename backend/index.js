const express = require("express");
const app = express();
const port = 4001;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ status: "working!" });
});

app.get("/api", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!response.ok) {
    res.status(500).end("Something went wrong");
  }

  res.json(await response.json());

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
