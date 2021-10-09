import authReq from '../auth_req';

export const register = (registerForm: IRegisterForm) => authReq.post('/register', registerForm);
export const signIn = (signInForm: ISignInForm) => authReq.post('/signin', signInForm);
export const logout = () => authReq.post('/logout');
export const checkLogin = () => authReq.post('/user/check');