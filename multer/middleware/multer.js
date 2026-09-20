const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(__dirname, "../public/upload");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const whitelistMimType =
      ("image/png", "image/jpg", "image/jpeg", "image/webp");
    if (whitelistMimType.includes(file.MimType)) {
      const fileName = Date.now() + ext;
      cb(null, fileName);
    } else {
      cb(new Error("only .png , .jpg ,.jpeg,.webp format allowed"));
    }
  },
});
const _1MB = 1 * 1000 * 1000;
const _2MB = 2 * 1000 * 1000;
const _3MB = 3 * 1000 * 1000;
const _750KB = 150000;
const uploadFile = multer({
  storage,
  limits: {
    fileSize: _1MB,
  },
});
module.exports = {
  uploadFile,
};
