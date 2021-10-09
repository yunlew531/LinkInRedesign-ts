import userReq from '../user_req';

export const getUser = (id: string) => userReq.get(`/user/${id}`);