const express = require("express");
const session = require("express-session");
const app = express();
const dotenv = require('dotenv').config()
const index = require("./routes/index");

app.set("view-engine", "ejs");
app.set('trust proxy', true);

app.use(express.urlencoded({ extended: false}))
app.use(express.static('static'));
app.use(session({
    secret: process.env.session_secret,
    resave: false,
    saveUninitialized: false
}))
app.use("/", index);

app.listen(80, ()=> {console.log("http://localhost:80")});