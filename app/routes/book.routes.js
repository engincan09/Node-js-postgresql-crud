module.exports = app => {
  const book = require("../controller/book.controller");

  var router = require("express").Router();

  // Create a new Book
  router.post("/", book.create);

  // Retrieve all Books
  router.get("/", book.findAll);

  // Retrieve a single Book with id
  router.get("/:id", book.findOne);

  // Update a Book with id
  router.put("/:id", book.update);

  // Delete a Book with id
  router.delete("/:id", book.delete);

  app.use("/api/books", router);
};