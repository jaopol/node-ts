"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
// grava em um diretório local no projeto
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // diretório no projeto
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploads = multer({ storage: storage });
exports.default = uploads;
