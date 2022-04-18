const multer = require("multer");

const partnerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./p-files/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "-" + fileName);
  },
});

const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./u-files/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "-" + fileName);
  },
});

exports.partnerStorage = partnerStorage;
exports.userStorage = userStorage;
