const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host:"localhost",
    database: "myPet",
    password: "536050",
    port: 5432,
});

module.exports = pool;