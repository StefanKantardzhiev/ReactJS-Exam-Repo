import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/offers/';

export const offerServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const offers = Object.values(result);
    
        return offers;
    };
    
    const getOne = async (gameId) => {
        const result = await request.get(`${baseUrl}/${gameId}`);
    
        return result;
    };
    
    const create = async (gameData) => {
        const result = await request.post(baseUrl, gameData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (gameId, data) => request.put(`${baseUrl}/${gameId}`, data);

    const deleteOffer = (gameId) => request.delete(`${baseUrl}/${gameId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteOffer,
    };
}