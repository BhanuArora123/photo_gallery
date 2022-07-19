const { getGallery, addImage, getImageById, editImage, deleteImage } = require("../controllers/gallery");

const router = require("express").Router();
router.post("/addImage",addImage);
router.get("/getImages",getGallery);
router.get("/getImageById",getImageById);
router.put("/editImage",editImage);
router.delete("/deleteImage",deleteImage);
module.exports = {router};