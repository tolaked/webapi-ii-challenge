const { newPost } = require("./controller/requests");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/posts", newPost);

app.get("*", (req, res) => {
  res.send("Hello there");
});

app.listen(4000, () => console.log("API running on port 4000"));
