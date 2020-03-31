import * as HttpStatus from 'http-status';

import NewsService from '../services/newsService';
import Helper from '../infra/helper';

class NewsController{

    async get( req, res ){
        try {
            let result = await NewsService.get();
            Helper.sendResponse( res, HttpStatus.OK, result );
        } catch (error) {
            console.log( error );
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, error);
        }
    }

    async getById( req, res ){
    
        try {
            const _id = req.params.id;
            let result = await NewsService.getById( _id )
            if( result != null ){
                Helper.sendResponse( res, HttpStatus.OK, result );
            }
            else{
                Helper.sendResponse(res, HttpStatus.NOT_FOUND, `Registro ${_id} não encontrado`);      
            }
            
        } catch (error) {
            console.log( error );  
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, error);      
        }
    }

    async create( req, res ){

        try {
            let vm = req.body;
            await NewsService.create( vm );
            Helper.sendResponse( res, HttpStatus.OK, 'Noticia cadastrado com sucesso!' );
        } catch (error) {
            console.log( error );
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, error);
        }

    }

    async update( req, res ){

        try {
            const _id = req.params.id;
            let body = req.body;
            await NewsService.update( _id, body );
            Helper.sendResponse( res, HttpStatus.OK, `${body.title} foi atualizada com sucesso!` );          

        } catch (error) {
            console.log( error );
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, error);
        }
    }

    async delete( req, res ){

        try {
            const _id = req.params.id; 
            await NewsService.delete( _id )
            Helper.sendResponse(res, HttpStatus.OK, `Registro excluido com sucesso!`);    
            
        } catch (error) {
            Helper.sendResponse(res, HttpStatus.BAD_REQUEST, error);
            console.log( error );
        }
    }

}

export default new NewsController;