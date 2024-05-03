const mongoose = require("mongoose");
const { connectToDB } = require("./src/configs/db.config");
const app = require("./app");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

connectToDB(process.env.DB_CONNECTION);

const port = 5000;
app.listen(port, function(){
    console.log("server started on port " + port);
    });