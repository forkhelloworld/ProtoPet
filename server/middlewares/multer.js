const multer = require("multer");
const path = require("path");

const STATIC_PATH = path.resolve(__dirname, "../public/images");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, STATIC_PATH);
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage });

module.exports = upload;
