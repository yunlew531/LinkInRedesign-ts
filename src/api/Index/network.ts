import authReq from '../auth_req';

export const acceptConnect = (userUid: string) => authReq.post(`/self/user/connect/accept/${userUid}`);