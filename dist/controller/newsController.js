"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status");
const newsService_1 = require("../services/newsService");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield newsService_1.default.get();
                helper_1.default.sendResponse(res, HttpStatus.OK, result);
            }
            catch (error) {
                console.log(error);
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let result = yield newsService_1.default.getById(_id);
                if (result != null) {
                    helper_1.default.sendResponse(res, HttpStatus.OK, result);
                }
                else {
                    helper_1.default.sendResponse(res, HttpStatus.NOT_FOUND, `Registro ${_id} não encontrado`);
                }
            }
            catch (error) {
                console.log(error);
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let vm = req.body;
                yield newsService_1.default.create(vm);
                helper_1.default.sendResponse(res, HttpStatus.OK, 'Noticia cadastrado com sucesso!');
            }
            catch (error) {
                console.log(error);
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                let body = req.body;
                yield newsService_1.default.update(_id, body);
                helper_1.default.sendResponse(res, HttpStatus.OK, `${body.title} foi atualizada com sucesso!`);
            }
            catch (error) {
                console.log(error);
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _id = req.params.id;
                yield newsService_1.default.delete(_id);
                helper_1.default.sendResponse(res, HttpStatus.OK, `Registro excluido com sucesso!`);
            }
            catch (error) {
                helper_1.default.sendResponse(res, HttpStatus.BAD_REQUEST, error);
                console.log(error);
            }
        });
    }
}
exports.default = new NewsController;
