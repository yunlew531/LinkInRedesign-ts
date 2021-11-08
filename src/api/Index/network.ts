import authReq from '../auth_req';

export const acceptConnect = (userUid: string) => authReq.post(`/self/user/connect/accept/${userUid}`);
export const refuseConnect = (userUid: string) => authReq.post(`/self/user/connect/refuse/${userUid}`);
export const getFavoritesArticles = (): Promise<Response> => authReq.get('/self/articles?filter=favorites');
