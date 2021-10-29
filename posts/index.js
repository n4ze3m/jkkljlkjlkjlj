const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const posts = {};

app.get("/posts", async (req, res) => {
  return res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  return res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
  console.log(`Post server running at http://localhost:${PORT}`);
});
