require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = 3000;
const { getSummarizeAI } = require("./controllers/news");

app.get("/ask", getSummarizeAI);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
