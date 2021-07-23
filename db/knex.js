const knex = require("knex");

const sqliteKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "./db/sws.sqlite3",
  },
});

module.exports = sqliteKnex;
