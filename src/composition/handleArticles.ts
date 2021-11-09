import { ref, readonly, Ref } from 'vue';
import { apiThumbsUpArticle, apiCancelThumbsUpArticle, apiDeleteArticle, apiDeleteComment, apiPostComment,
  apiGetOwnArticle, apiGetUserArticles, apiAddArticleFavorite, apiRemoveArticleFavorite, apiGetArticles
} from '@/api';
import store from '@/composition/store';

const { state } = store;

type ApiFunc = typeof apiGetOwnArticle
  | typeof apiGetUserArticles
  | typeof apiGetArticles;

export default (apiFunc: ApiFunc) => {
  const articles = ref<Article[]>([]);
  
  const getArticles = async (uid?: string) => {
    try {
      const { data } = await apiFunc(uid!);
      const { articles } = data;
      setArticles(articles);
    } catch (err) { console.dir(err); }
  };
  
  const updateArticle = (articleIdx: number, newArticle: Article) =>
    articles.value[articleIdx] = newArticle;
  
  const thumbsUpArticle = async (article: Article, articleIdx: number) => {
    const tempArticle = JSON.parse(JSON.stringify(article));
    const { id: articleId } = tempArticle;
    const { name, photo, job } = state.value.user;
    const profile = { name, photo, job };
  
      try {
        const { data } = await apiThumbsUpArticle(profile, articleId);
        const { likes } = data;
        tempArticle.likes = likes;
        updateArticle(articleIdx, tempArticle);
      } catch (err) { console.log(err); }
  };
  
  const removeThumbsUpArticle = async (article: Article, articleIdx: number) => {
    const tempArticle: Article = JSON.parse(JSON.stringify(article));
  
    try {
      const { data } = await apiCancelThumbsUpArticle(article.id!);
      const { likes } = data;
      tempArticle.likes = likes;
      updateArticle(articleIdx, tempArticle);
    } catch (err) { console.log(err); }
  };

  const setArticles = (articlesData: Article[]) => articles.value = articlesData;
  const setArticle = (articleIdx: number, articleData: Article) =>
    articles.value[articleIdx] = articleData;

  const deleteArticle = async (articleId: string) => {
    try {
      await apiDeleteArticle(articleId);
      getArticles();
    } catch (err) { console.dir(err); }
  };

  const updateComments = (articleIdx: number, comments: ArticleComment[]) =>
    articles.value[articleIdx].comments = comments;

  const isCommentLimit = ref(false);
  const postComment = (emitData: EmitSubmitCommentData): Promise<void> | void => {
    const { articleId, articleIdx, comment } = emitData;

    if (isCommentLimit.value) {
      alert('Please wait 30 seconds for each message')
      return;
    }
  
    isCommentLimit.value = true;
  
    if (!comment) {
      alert('comment required');
      return;
    };

    const { name, photo } = state.value.user;
    const commentData: CommentData = {
      name: name!,
      photo: photo || '',
      comment,
    };

    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await apiPostComment(commentData, articleId);
        const { comments } = data;
        updateComments(articleIdx, comments);
        resolve();
      } catch (err) { reject(err); }
      setTimeout(() => {
        isCommentLimit.value = false;
      }, 30 * 1000);
    });
  };

  const deleteComment = async (emitData: EmitDeleteCommentData) => {
    const { article, articleIdx, commentId } = emitData;
    const tempArticle: Article = JSON.parse(JSON.stringify(article));
    
    try {
      const { data } = await apiDeleteComment(article.id!, commentId);
      const { comments } = data;
      tempArticle.comments = comments;
      updateComments(articleIdx, comments);
    } catch (err) { console.dir(err); }
  };
  
  const addArticleFavorite =  async (article: Article, articleIdx: number) => {
    const tempArticle = JSON.parse(JSON.stringify(article));
  
    try {
      const { data } = await apiAddArticleFavorite(article.id!);
      const { favorites } = data;
      tempArticle.favorites = favorites;
      setArticle(articleIdx, tempArticle);
      alert('add success');
    } catch (err) { console.log(err); }
  };

  const removeArticleFavorite = async (article: Article, articleIdx: number) => {
    const tempArticle = JSON.parse(JSON.stringify(article));
  
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await apiRemoveArticleFavorite(article.id!);
        const { favorites } = data;
        tempArticle.favorites = favorites;
        setArticle(articleIdx, tempArticle);
        alert('remove success');
        resolve(favorites);
      } catch (err) { reject(err); }
    });
  };

  return {
    articles: readonly(articles) as Ref<Article[]>,
    getArticles,
    setArticles,
    thumbsUpArticle,
    removeThumbsUpArticle,
    deleteArticle,
    postComment,
    deleteComment,
    addArticleFavorite,
    removeArticleFavorite,
  };
};
