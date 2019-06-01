let config = {};

if (process.env.DEV) {
  config = require("./private");
} else {
  const {
    DB_USERNAME,
    DB_NAME,
    DB_PASS,
    DB_PORT,
    DB_URL,
    SERVER_PORT
  } = process.env;
  if (DB_NAME && DB_USERNAME && DB_PASS && DB_URL && DB_PORT && SERVER_PORT) {
    config = {
      db_pass: DB_PASS,
      db_username: DB_USERNAME,
      db_url: DB_URL,
      db_port: Number(DB_PORT),
      db_name: DB_NAME,
      server_port: SERVER_PORT
    };
  } else {
    throw new Error(
      "MUST Enter Environment Variables Correctly =>  DB_USERNAME, DB_NAME, DB_PASS, DB_PORT, DB_URL and SERVER_PORT"
    );
  }
}

module.exports = config;
