const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', ()=> console.log("appelle"))

app.listen(PORT , () => {console.log(`The server is up and running on ${PORT}`)});