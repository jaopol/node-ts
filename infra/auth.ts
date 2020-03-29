import * as jwt from "jsonwebtoken";
import Configs from "./configs";

export default class Auth{

    static validade( req, res, next ){
        
        var token = req.headers[ 'x-access-token'];

        if( token ){
            jwt.verify( token, Configs.secret, function( err ){

                if( err ){
                    return res.status( 403 ).send({
                        success: false,
                        message: '403 - Token invalid'
                    })
                }else{
                    next();
                }
            })

        }else{
            return res.status( 401 ).send({
                success: false,
                message: 'Unauthorized'
            });
        }

    }

}