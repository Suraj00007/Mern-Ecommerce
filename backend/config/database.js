const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://eraf9120:AQ6P52Da0RGtD3QL@jobchahiye.pkeoa60.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected}`);
    });
};

module.exports = connectDatabase;
