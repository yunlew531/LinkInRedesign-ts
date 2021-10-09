// normal
import { getUser } from './Index/user_profile';

// auth
import { logout, checkLogin, register, signIn } from './Index/login';
// import { register, signIn, logout, checkLogin } from './Index/login';
import { getProfile, createProject, updateProject, deleteProject,
  getPhoto, uploadPhoto, uploadBackgroundImg, updateDescription, updateAbout } from './Index/profile';
// import { getProfile,
//    createProject, updateProject, deleteProject } from './Index/profile';

// normal
export const apiGetUser = getUser;

// auth
export const apiRegister = register;
export const apiSignIn = signIn;
export const apiLogout = logout;
export const apiCheckLogin = checkLogin;
export const apiGetProfile = getProfile;
export const apiUploadPhoto = uploadPhoto;
export const apiUploadBackgroundImg = uploadBackgroundImg;
export const apiUpdateDescription = updateDescription;
export const apiUpdateAbout = updateAbout;
export const apiGetPhoto = getPhoto;
export const apiCreateProject = createProject;
export const apiUpdateProject = updateProject;
export const apiDeleteProject = deleteProject;
