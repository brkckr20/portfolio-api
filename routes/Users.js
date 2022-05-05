const express = require("express");
const router = express.Router();

const Users = require("../models/Users.js");

router.get('/',(req,res) => {
    Users.find().then(data => {
        res.json(data)
        console.log(data);
    }).catch(err=>console.log(err))
})

module.exports = router;