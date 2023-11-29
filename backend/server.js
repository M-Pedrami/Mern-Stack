const express = require("express");
const app = express();
require("dotenv/config");
const PORT = process.env.PORT || 8001;
const router = require('./Routes/goalRoutes')

app.use('/goals', router);

app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);