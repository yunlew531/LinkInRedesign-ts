import authReq from '../auth_req';

export const getUser = (id: string, view: boolean = false): Promise<Response> =>
  authReq.get(`/user/${id}?view=${view}`);