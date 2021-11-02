import authReq from '../auth_req';

export const sentConnect = (userUid: string) => authReq.post(`/self/user/connect/${userUid}`);
export const removeSentConnect = (userUid: string) => authReq.post(`/self/user/connect/remove_sent/${userUid}`);
