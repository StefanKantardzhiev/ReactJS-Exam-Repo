import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/offers';

export const offerServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(`${baseUrl}`);
        const offers = Object.values(result);

        return offers;
    };

    const getRecent = async () => {
        const result = await request.get(`${baseUrl}/recent`);
        const offers = Object.values(result);

        return offers;
    };


    const getOne = async (offerId) => {
        const result = await request.get(`${baseUrl}/${offerId}`);

        return result;
    };

    const create = async (offerData) => {

        const result = await request.post(`${baseUrl}/create`, offerData);

        return result;
    };

    const edit = (offerId, data) => request.put(`${baseUrl}/${offerId}`, data);

    const deleteOffer = (offerId) => request.delete(`${baseUrl}/${offerId}`);


    return {
        getAll,
        getRecent,
        getOne,
        create,
        edit,
        delete: deleteOffer,
    };
}