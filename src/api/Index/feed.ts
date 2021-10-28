import authReq from '@/api/auth_req';

export const addArticleFavorite = (articleId: string) => authReq.post(`/self/article/favorites/${articleId}`);
export const removeArticleFavorite = (articleId: string) => authReq.delete(`/self/article/favorites/${articleId}`);
export const deleteArticle = (articleId: string) => authReq.delete(`/self/article/${articleId}`);
