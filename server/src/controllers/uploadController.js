const streamifier = require("streamifier");

const cloudinary = require("../utils/cloudinary");

// UPLOAD IMAGE

const uploadImage = async (req, res) => {

    try {

        // check file exists
        if (!req.file) {
            return res.status(400).json({
                message: "No Image Upload",
            });
        }

        // Upload to cloudinary 
        const streamUpload = (fileBuffer) => {
            return new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "food-delivery",
                    }, (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                )
                streamifier.createReadStream(fileBuffer).pipe(stream);
            });
        };

        const result = await streamUpload(req.file.buffer);
        res.status(200).json({
            message: "Image Upload Successfully",
            imageUrl: result.secure_url,
        })


    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


module.exports = {
    uploadImage,
}