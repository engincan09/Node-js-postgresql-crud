const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({message:"Node js crud işlemleri"});
});

const PORT = process.env.PORT || 8080;
require("./app/routes/book.routes")(app);
app.listen(PORT, ()=>{
    console.log("Server başladı!");
});
