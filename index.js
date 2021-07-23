const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const companyDb = require("./db/company");

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/companies", async (req, res) => {
  const companies = await companyDb.getAllCompanies();
  res.status(200).json({ companies });
});

app.get("/scores", async (req, res) => {
  const scores = await companyDb.getAllScores();
  res.status(200).json({ scores });
});

app.get("/prices", async (req, res) => {
  const prices = await companyDb.getAllPrices();
  res.status(200).json({ prices });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
