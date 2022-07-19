const gallery = require("../models/gallery");
exports.addImage = async (req,res,next) => {
    try {
        let {imageUrl, imageDesc, imageName} = req.body;
        let galleryData = await gallery({
            imageDesc,
            imageName,
            imageUrl
        });
        await galleryData.save();
        return res.status(200).json({
            message : "image added successfully :)"
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message : error.message
        });
    }
    
}
exports.getGallery = async (req,res,next) => {
    try {
        let galleriesData = await gallery.find();
        return res.status(200).json({
            message : "images fetched successfully",
            galleriesData
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
exports.getImageById = async (req,res,next) => {
    try {
        let {id} = req.query;
        let imageData = await gallery.findOne({
            _id:id
        });
        return res.status(200).json({
            message : "success",
            imageData
        });
    } catch (error) {
        return res.status(500).json(
            {message:error.message}
        )
    }
}
exports.editImage = async (req,res,next) => {
    try {
        let {id,imageDesc,imageName,imageUrl} = req.body;
        let imageData = await gallery.findByIdAndUpdate(id,{
            $set:{
                imageDesc,
                imageName,
                imageUrl
            }
        })
        return res.status(200).json({
            message :"image edited successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message : "image data edited successfully"
        })
    }
}
exports.deleteImage = async (req,res,next) => {
    try {
        let {id} = req.query;
        console.log(id);
        await gallery.findOneAndDelete({
            _id:id
        });
        return res.status(200).json({
            message : "image deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}