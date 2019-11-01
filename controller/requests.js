const database = require("../data/db");

module.exports = { newPost };
function newPost(req, res) {
  const title = req.body;
  console.log(title);
  database.insert(title).then(post => {
    res.status(201).json({
      success: true,
      post
    });
  });
}
