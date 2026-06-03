// src/middleware/uploadMiddleware.js

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(
            null,
            Date.now() +
            path.extname(file.originalname)
        );
    },
});

const fileFilter = (
    req,
    file,
    cb
) => {
    const allowed =
        /jpg|jpeg|png|webp/;

    const ext =
        allowed.test(
            path.extname(
                file.originalname
            ).toLowerCase()
        );

    const mime =
        allowed.test(
            file.mimetype
        );

    if (ext && mime) {
        return cb(null, true);
    }

    cb(
        new Error(
            "Only image files are allowed"
        )
    );
};

const upload = multer({
    storage,
    fileFilter,
});

module.exports = upload;