const express = require("express");
const cors = require("cors") 

const app = express();
const port = process.env.PORT || 4000;

const companyDb = require("./db/sws");

app.use(cors())
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

app.get("/prices/:id", async (req, res) => {
  const prices = await companyDb.getCompanyPrices(req.params.id);
  res.status(200).json({ prices });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
