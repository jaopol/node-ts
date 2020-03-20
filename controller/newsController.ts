import * as HttpStatus from 'http-status';

import NewsService from '../services/newsService';
import Helper from '../infra/helper';

class NewsController{

    get( req, res ){
        NewsService.get()
            .then( news => Helper.sendResponse( res, HttpStatus.OK, news ) )
            .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

    getById( req, res ){

        const _id = req.params.id;

        NewsService.getById( _id )
            .then( news => Helper.sendResponse( res, HttpStatus.OK, news ) )
            .catch( error => console.error.bind( console, `Error ${error}` ) );

    }

    create( req, res ){

        let vm = req.body;

        NewsService.create( vm )
            .then( news => Helper.sendResponse( res, HttpStatus.OK, 'Noticia cadastrado com sucesso!' ) )
            .catch( error => console.error.bind( console, `Error ${error}` ) )

    }

    update( req, res ){

        const _id = req.params.id;
        let body = req.body;

        NewsService.update( _id, body )
            .then( news => 
                Helper.sendResponse( res, HttpStatus.OK, `${body.title} foi atualizada com sucesso!` ) )
            .catch( error => console.error.bind( console, `Error ${error}` ) );
    }

    delete( req, res ){

        const _id = req.params.id; 

        NewsService.delete( _id )
            .then( () => {
                return Helper.sendResponse(res, HttpStatus.OK, `Registro excluido com sucesso!`);
            } )
            .catch( error => console.error.bind( console, `Error ${error}` ) );

    }


}

export default new NewsController;