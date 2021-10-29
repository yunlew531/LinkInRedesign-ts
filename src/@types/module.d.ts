/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/api' {
  export function apiGetUser(id: string): Promise<any>;
  export function apiGetProfile(): Promise<any>;
  export function apiUploadPhoto(formData: FormData): Promise<any>;
  export function apiUploadBackgroundImg(formData: FormData): Promise<any>;
  export function apiUpdateDescription(description: Object): Promise<any>;
  export function apiUpdateAbout(about: Object): Promise<any>;
  export function apiGetPhoto(): Promise<any>;
  export function apiCheckLogin(): Promise<any>;
  export function apiRegister(registerObject: RegisterForm): Promise<any>;
  export function apiSignIn(signInForm: SignInForm): Promise<any>;
  export function apiCreateProject(project: Project, id: string): Promise<any>;
  export function apiUpdateProject(project: Project, id: string): Promise<any>;
  export function apiDeleteProject(id: string): Promise<any>;
  export function apiLogout(): Promise<any>;
  export function apiCreateExperience(experience: Experience): Promise<any>;
  export function apiUpdateExperience(id: string, experience: Experience): Promise<any>;
  export function apiUploadExperienceImg(formData: FormData): Promise<any>;
  export function apiDeleteExperience(id: string): Promise<any>;
  export function apiUpdateEducation(education: Education): Promise<any>;
  export function apiCreateArticle(article: Article): Promise<any>;
  export function apiGetArticles(page: number): Promise<any>;
  export function apiThumbsUpArticle(user: User, articleId: string): Promise<any>;
  export function apiCancelThumbsUpArticle(articleId: string): Promise<any>;
  export function apiPostComment(commentData: CommentData, articleId: string): Promise<any>;
  export function apiDeleteComment(articleId: string, commentId: string): Promise<any>;
  export function apiAddArticleFavorite(articleId: string): Promise<any>;
  export function apiRemoveArticleFavorite(articleId: string): Promise<any>;
  export function apiDeleteArticle(articleId: string): Promise<any>;
}

declare module '@/composition/store' {
  import { Ref } from 'vue';
  export const state: Ref<State>;
  export function getProfile(): void;
  export function setOffcanvasDisplay(display: boolean): void;
  export function setLogin(status?: boolean): void;
  export function setUserProfile(profile: User): void;
  export function updateUserProfile(profile: User): void;
  export function setArticles(articles: Article[]): void;
  export function getArticles(page: number): void;
  export function setArticle(articleIdx: number, article: Article): void;
  export function setArticleComments(comments: ArticleComment[], idx: number): void;
}

declare module '@/api/user_req' {
  import { AxiosInstance } from 'axios';
  const userReq: AxiosInstance;
  export default userReq;
}

declare module '@/api/auth_req' {
  // import { AxiosInstance } from 'axios';
  const authReq: any;
  export default authReq;
}

declare module '@/mixins/getImageUrl' {
  function getImageUrl(fileName: string): string;
  export default getImageUrl;
}

declare module '@/mixins/handleTextLength' {
  function handleTextLength(text: string, length?: number): string;
  export default handleTextLength;
}

declare module '@/mixins/dayjs' {
  import { ConfigType, Dayjs } from 'dayjs';
  function dayjs(day?: ConfigType): Dayjs;
  export default dayjs;
}

declare module 'vue3-persian-datetime-picker';

declare module 'quill';
declare module 'quill-delta-to-html';

declare module '@/Symbol' {
  export const stateSymbol: Symbol;
  export const userSymbol: Symbol;
}

declare module '@/mixins/getSrcFolder' {
  export default function(): string;
}