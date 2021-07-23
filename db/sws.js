const sqliteKnex = require("./knex");

const getAllCompanies = () => {
  return sqliteKnex("swsCompany").select("*");
};

const getAllScores = () => {
  return sqliteKnex("swsCompanyScore").select("*");
};

const getAllPrices = () => {
  return sqliteKnex("swsCompanyPriceClose").select("*");
};

module.exports = {
  getAllCompanies,
  getAllScores,
  getAllPrices
};
