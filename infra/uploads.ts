import * as multer from "multer";
// grava em um diretório local no projeto
const storage = multer.diskStorage({

    destination: function(req, file, cb){
        cb( null, "uploads/" ); // diretório no projeto
    },
    filename: function(req, file, cb){
        cb( null, file.originalname );
    }
});

const uploads = multer({ storage: storage });

export default uploads;