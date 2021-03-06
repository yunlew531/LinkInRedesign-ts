// normal
import { getUser } from './Index/user_profile';

// auth
import { logout, checkLogin, register, signIn } from './Index/login';
import { getProfile, createProject, updateProject, deleteProject, getPhoto, uploadPhoto,
  uploadBackgroundImg, updateDescription, updateAbout, createExperience, updateExperience,
  updateExperienceImg, deleteExperience, updateEducation, createArticle, getArticles,
  thumbsUpArticle, cancelThumbsUpArticle, postComment, deleteComment, getOwnArticle
} from './Index/profile';
import { addArticleFavorite, removeArticleFavorite, deleteArticle } from './Index/feed';
import { sentConnect, removeSentConnect, removeConnected, getUserArticles } from './Index/user';
import { acceptConnect, refuseConnect, getFavoritesArticles } from './Index/network';
import { getNotice } from './Index/notice';

// normal
export const apiGetUser = getUser;
export const apiGetUserArticles = getUserArticles;

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
export const apiCreateExperience = createExperience;
export const apiUpdateExperience = updateExperience;
export const apiUploadExperienceImg = updateExperienceImg;
export const apiDeleteExperience = deleteExperience;
export const apiUpdateEducation = updateEducation;
export const apiCreateArticle = createArticle;
export const apiGetArticles = getArticles;
export const apiThumbsUpArticle = thumbsUpArticle;
export const apiCancelThumbsUpArticle = cancelThumbsUpArticle;
export const apiPostComment = postComment;
export const apiDeleteComment = deleteComment;
export const apiAddArticleFavorite = addArticleFavorite;
export const apiRemoveArticleFavorite = removeArticleFavorite;
export const apiDeleteArticle = deleteArticle;
export const apiGetOwnArticle = getOwnArticle;
export const apiSentConnect = sentConnect;
export const apiRemoveSentConnect = removeSentConnect;
export const apiAcceptConnect = acceptConnect;
export const apiRemoveConnected = removeConnected;
export const apiRefuseConnect = refuseConnect;
export const apiGetFavoritesArticles = getFavoritesArticles;
export const apiGetNotice = getNotice;
