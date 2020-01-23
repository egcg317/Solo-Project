const { Pool } = require('pg');

const URI = 'postgres://rtoywgwh:N_9QyGeeT8PZr8KOFNrpP45Uu8yNRwAD@rajje.db.elephantsql.com:5432/rtoywgwh';

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
