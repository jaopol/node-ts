"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const newsService_1 = require("../services/newsService");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newsService_1.default.get()
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsService_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, 'Noticia cadastrado com sucesso!'))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let body = req.body;
        newsService_1.default.update(_id, body)
            .then(news => helper_1.default.sendResponse(res, HttpStatus.OK, `${body.title} foi atualizada com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(() => {
            return helper_1.default.sendResponse(res, HttpStatus.OK, `Registro excluido com sucesso!`);
        })
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsController;
