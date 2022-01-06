import authReq from '../auth_req';

export const getNotice = (): Promise<Response> => authReq.get('/self/user/notice');
