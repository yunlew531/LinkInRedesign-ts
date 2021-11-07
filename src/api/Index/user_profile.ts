import userReq from '../user_req';

export const getUser = (id: string): Promise<Response> => userReq.get(`/user/${id}`);