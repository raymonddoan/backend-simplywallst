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

app.get("/scores/:companyScoreId", async (req, res) => {
  const companyScore = await companyDb.getCompanyScore(req.params.companyScoreId);
  res.status(200).json({ companyScore });
})

app.get("/prices", async (req, res) => {
  const prices = await companyDb.getAllPrices();
  res.status(200).json({ prices });
});

app.get("/prices/:companyPriceId", async (req, res) => {
  const companyPrices = await companyDb.getCompanyPrices(req.params.companyPriceId);
  res.status(200).json({ companyPrices });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
