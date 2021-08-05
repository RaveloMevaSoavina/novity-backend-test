const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://127.0.0.1:27017/novity", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("DB connection established !");
  const db = require("../models");
  const User = db.user;
  User.estimatedDocumentCount((error, count) => {
    if (!error && count === 0) {
      new User({username: process.env.USERNAME ,password: bcrypt.hashSync(process.env.PASSWORD, 8)})
      .save((error) => {
        if (error) {
          console.log("error", error);
        }
        console.log("added novity admin to user collection");
      });
    }
  });
});
mongoose.set("useFindAndModify", false);
