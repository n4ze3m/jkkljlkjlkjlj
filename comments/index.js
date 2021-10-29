const express = require("express");
const cors = require("cors");
const { randomBytes } = require("crypto");

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

const commentsByPostId = {};

app.get("/posts/:id/comments", async (req, res) => {
  const comments = commentsByPostId[req.params.id] || [];
  return res.send({ length: comments.length, comments });
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  return res.status(201).send(comments);
});

app.listen(PORT, () => {
  console.log(`comment service running at http://localhost:${PORT}`);
});
