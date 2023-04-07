import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/comments';

export const commentServiceFactory = (token) => {
    const request = requestFactory(token);

    
    const getAll = async (commentId) => {
        const searchQuery = encodeURIComponent(`commentId="${commentId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);

        const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
        const comments = Object.values(result);

        return comments;
    };

    const create = async (commentId, comment) => {
        const result = await request.post(`${baseUrl}/create`, { commentId, comment });

        return result;
    };

}