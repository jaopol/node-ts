"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
class Uploads {
    static storage() {
        // grava em um diretório local no projeto
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, "uploads/"); // diretório no projeto
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            }
        });
        return multer({ storage: storage });
    }
}
exports.default = Uploads;
