import authReq from '../auth_req';

export const getProfile = (): Promise<Response> => authReq.get('/self/profile');
export const getPhoto = (): Promise<Response> => authReq.get('/self/photo');
export const uploadPhoto = (formData: FormData): Promise<Response> => authReq.post('/self/photo', formData);
export const uploadBackgroundImg = (formData: FormData): Promise<Response> => authReq.post('/self/background', formData);
export const updateDescription = (description: Object): Promise<Response> =>
  authReq.put('/self/description/update', { description });
export const updateAbout = (about: Object): Promise<Response> => authReq.put('/self/about/update', { about });
export const createProject = (project: Project): Promise<Response> => authReq.post('/self/project/create', { project });
export const updateProject = (project: Project, id: string): Promise<Response> =>
  authReq.put(`/self/project/${id}`, { project });
export const deleteProject = (id: string): Promise<Response> => authReq.delete(`/self/project/${id}`);
export const updateExperienceImg = (formData: FormData): Promise<Response> =>
  authReq.post(`/self/experience/image`, formData);
export const createExperience = (experience: Experience): Promise<Response> =>
  authReq.post(`/self/experience/create`, experience);
export const updateExperience = (id: string, experience: Experience): Promise<Response> =>
  authReq.put(`/self/experience/${id}`, experience);
export const deleteExperience = (id: string): Promise<Response> => authReq.delete(`/self/experience/${id}`);
export const updateEducation = (education: Education): Promise<Response> => authReq.post('/self/education', education);
export const createArticle = (article: Article): Promise<Response> =>
  authReq.post('/self/article/create', article);
export const getArticles = (): Promise<Response> => authReq.get(`/self/articles/all`);
export const thumbsUpArticle = (user: User, articleId: string): Promise<Response> =>
  authReq.post(`/self/article/like/${articleId}`, user);
export const cancelThumbsUpArticle = (articleId: string): Promise<Response> =>
  authReq.post(`/self/article/dislike/${articleId}`);
export const postComment = (commentData: CommentData, articleId: string): Promise<Response> =>
  authReq.post(`/self/article/comment/${articleId}`, commentData);
export const deleteComment = (articleId: string, commentId: string): Promise<Response> =>
  authReq.delete(`/self/article/${articleId}/comment/${commentId}`);
export const getOwnArticle = (): Promise<Response> => authReq.get('/self/articles?filter=own');
