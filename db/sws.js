const sqliteKnex = require("./knex");

const getAllCompanies = () => {
  return sqliteKnex("swsCompany").select("*");
};

const getAllScores = () => {
  return sqliteKnex("swsCompanyScore").select("*");
};

const getCompanyScore = (score_id) => {
  return sqliteKnex("swsCompanyScore").select("*").where("id", score_id);
};

const getAllPrices = () => {
  return sqliteKnex("swsCompanyPriceClose").select("*");
};

const getCompanyPrices = (id) => {
  return sqliteKnex("swsCompanyPriceClose").select("*").where("company_id", id);
};

module.exports = {
  getAllCompanies,
  getAllScores,
  getCompanyScore,
  getAllPrices,
  getCompanyPrices,
};
