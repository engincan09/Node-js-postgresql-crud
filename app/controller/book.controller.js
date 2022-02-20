const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name && !req.body.description && !req.body.pageCount) {
    res.status(400).send({
      message: "Zorunlu alanları doldurunuz!",
    });
  }
  const book = {
    name: req.body.name,
    description: req.body.description,
    pageCount: req.body.pageCount,
  };

  Book.create(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Bir hata gerçekleşti!",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Book.findAll({ where: condition })
    .then((data) => {
      if (data.length > 0) {
        res.send(data);
      }else{
        res.status(400).send({
          message: "Henüz kitap eklenmemiş",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Bir hata gerçekleşti!",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Book.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Gönderilen id ye göre bir kayıt bulunamadı id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Book.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Kitap başarılı bir şekilde güncellendi",
        });
      } else {
        res.send({
          message: `Güncellenecek kitap bulunamadı`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Bir hata gerçekleşti!",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Kitap başarılı bir şekilde silindi",
        });
      } else {
        res.send({
          message: `Silinecek kitap bulunamadı!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Bir hata gerçekleşti!",
      });
    });
};
