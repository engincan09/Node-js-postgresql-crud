module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "sa123*",
  DB: "test_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};