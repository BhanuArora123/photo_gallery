const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { router } = require("./routes/gallery");
require("dotenv").config("./.env");
const app = express();

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(router);

mongoose.connect(process.env.DB_URL)
.then(result => {
    app.listen(8080);
})
.catch(err => console.log(err));