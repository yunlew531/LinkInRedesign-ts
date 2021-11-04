import userReq from '../user_req';

export const getUser = (id: string): Promise<any> => userReq.get(`/user/${id}`);