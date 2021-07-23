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

const getCompanyPrices = (id) => {
  return sqliteKnex("swsCompanyPriceClose").select("*").where("company_id", id);
};

module.exports = {
  getAllCompanies,
  getAllScores,
  getAllPrices,
  getCompanyPrices,
};
