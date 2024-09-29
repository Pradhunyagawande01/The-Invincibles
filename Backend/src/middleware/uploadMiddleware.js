const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Specify the destination folder for uploaded files
        cb(null, 'uploads/'); // Save the uploaded files in the 'uploads' folder
    },
    filename: (req, file, cb) => {
        // Set the filename (current date and file original name)
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

// Check file type
const checkFileType = (file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/; // Accepted file types
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Check the file extension
    const mimetype = filetypes.test(file.mimetype); // Check the MIME type

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Images only!'); // Reject if file is not an image
    }
};

// Initialize upload middleware
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        checkFileType(file, cb);
    }
});

module.exports = upload;
