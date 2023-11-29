const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send({ message: "You have hit the homepage" });
});

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
