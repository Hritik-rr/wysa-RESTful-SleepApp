const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { json } = require("express/lib/response");
const Sleep = require("./model/user");

const app = express()

// connecting to mongoDB database
mongoose.connect("mongodb://localhost:27017/wysa", {useNewUrlParser: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))


app.use(express.json());

app.post("/store_user", async (req, res) => {
    var newRecord;
    try {
        newRecord = await Sleep.create(req.body);
    } catch (error) {
        res.send({ response: "FAIL", message: error.message });
    }
    res.send({ response: "OK", payload: newRecord });
});

app.get("/", async (req, res) => {
  var allRecords = await Sleep.find({});
  res.send({ response: "OK", payload: allRecords });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

