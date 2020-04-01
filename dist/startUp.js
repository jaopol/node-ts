"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_1 = require("./infra/db");
const auth_1 = require("./infra/auth");
const uploads_1 = require("./infra/uploads");
const newsRouters_1 = require("./routers/newsRouters");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default;
        this._db.createConnection();
        this.middler();
        this.routes();
    }
    enableCors() {
        const options = {
            methods: "GET, OPTIONS, PUT, POST, DELETE",
            origin: "*"
        };
        this.app.use(cors(options));
    }
    middler() {
        this.enableCors();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' });
        });
        this.app.route("/uploads").post(uploads_1.default.storage().single("file"), (req, res) => {
            try {
                res.send("Arquivo enviado com sucesso!");
            }
            catch (error) {
                console.log(error);
            }
        });
        this.app.use(auth_1.default.validade);
        this.app.use("/", newsRouters_1.default);
    }
}
exports.default = new StartUp();
