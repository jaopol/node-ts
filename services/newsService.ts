import NewsRepository from '../repository/newsRepository';

class NewsService{

    async get(){
        return NewsRepository.find({});
    }
    
    async getById( _id: any ){
        return await NewsRepository.findById( _id );
    }

    async create( news ){
        return await NewsRepository.create( news );
    }   

    async update( _id, news ){
        return await NewsRepository.findOneAndUpdate( _id, news );
    }

    async delete( _id ){
        return await NewsRepository.findByIdAndDelete( _id );
    }

}

export default new NewsService();