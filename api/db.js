const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: "jopanogi",
  host: "localhost",
  port: 9876,
  database: "kaktotak"
});

module.exports = pool