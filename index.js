const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require('dotenv').config();

const usersRouter = require("./routes/Users.js")

const PORT = process.env.SERVER_PORT || 4001;
const DB_CONN = process.env.SERVER_DB_CONN_STR;

app.use(cors());
app.use(bodyParser.json());

app.use("/users",usersRouter)
app.get('/', (req, res) => {
    res.send("Merhaba");
    console.log(PORT);
})

mongoose.connect(`${DB_CONN}`, (e)=>{
    console.log("Mongo DBS bağlantısı başarılı");
}).catch(err=>{
    console.log(err);
})

app.listen(PORT || 4001, () => {
    console.log(`http://localhost:${PORT}`);
})