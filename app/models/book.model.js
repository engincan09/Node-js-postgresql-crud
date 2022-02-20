module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define("book", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    pageCount: {
      type: Sequelize.INTEGER,
    },
  });
  return Books;
};
