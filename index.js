const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const methodOverride = require("method-override");

require("./database/db.js");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const clientRoutes = require("./routes/client.route")
const consultantRoutes = require("./routes/consultant.route")
const moodclientRoutes = require("./routes/moodclient.route")
const authentificationRoutes = require("./routes/auth.route")


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/v1/auth/signin', authentificationRoutes);
app.use('/api/v1/client', clientRoutes)
app.use('/api/v1/consultant', consultantRoutes)
app.use('/api/v1/moodclient', moodclientRoutes)

app.listen(PORT , () => {console.log(`The server is up and running on ${PORT}`)});