import authReq from '../auth_req';

export const register = (registerForm: RegisterForm): Promise<Response> => authReq.post('/register', registerForm);
export const signIn = (signInForm: SignInForm): Promise<Response> => authReq.post('/signin', signInForm);
export const logout = (): Promise<Response> => authReq.post('/logout');
export const checkLogin = (): Promise<Response> => authReq.post('/user/check');