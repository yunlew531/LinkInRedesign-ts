import authReq from '../auth_req';

export const sentConnect = (userUid: string) => authReq.post(`/self/user/connect/${userUid}`);
export const removeSentConnect = (userUid: string) =>
  authReq.post(`/self/user/connect/remove_sent/${userUid}`);
export const removeConnected = (userUid: string) =>
  authReq.delete(`/self/user/connect/remove/${userUid}`);
export const getUserArticles = (userUid: string) => authReq.get(`/articles/user/${userUid}`);
