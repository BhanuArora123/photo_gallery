const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    imageName:{
        type:String,
        required:true
    },
    imageDesc:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("images",imageSchema);