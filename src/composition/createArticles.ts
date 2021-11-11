import { ref } from 'vue';
import { apiThumbsUpArticle, apiCancelThumbsUpArticle, apiDeleteArticle, apiDeleteComment, apiPostComment,
  apiGetOwnArticle, apiGetUserArticles, apiAddArticleFavorite, apiRemoveArticleFavorite, apiGetArticles
} from '@/api';
import store from '@/composition/store';

const { state } = store;

type ApiFunc = typeof apiGetOwnArticle
  | typeof apiGetUserArticles
  | typeof apiGetArticles;

export class Articles {
  apiMethod: ApiFunc;
  isCommentLimit = false;
  articles = ref<Article[]>([]);
  
  constructor(apiFunc: ApiFunc) {
    this.apiMethod = apiFunc;
  }

  public async getArticles(uid?: string) {
    try {
      const { data } = await this.apiMethod(uid!);
      const { articles } = data;
      this.setArticles(articles);
    } catch (err) { console.dir(err); }
  }

  public async thumbsUpArticle(article: Article, articleIdx: number) {
    const tempArticle = JSON.parse(JSON.stringify(article));
    const { id: articleId } = tempArticle;
    const { name, photo, job } = state.value.user;
    const profile = { name, photo, job };
  
    try {
      const { data } = await apiThumbsUpArticle(profile, articleId);
      const { likes } = data;
      tempArticle.likes = likes;
      this.updateArticle(articleIdx, tempArticle);
    } catch (err) { console.log(err); }
  };

  public async removeThumbsUpArticle(article: Article, articleIdx: number) {
    const tempArticle: Article = JSON.parse(JSON.stringify(article));

    try {
      const { data } = await apiCancelThumbsUpArticle(article.id!);
      const { likes } = data;
      tempArticle.likes = likes;
      this.updateArticle(articleIdx, tempArticle);
    } catch (err) { console.log(err); }
  };

  public async deleteArticle(articleId: string) {
    try {
      await apiDeleteArticle(articleId);
      this.getArticles();
    } catch (err) { console.dir(err); }
  };

  public async postComment(emitData: EmitSubmitCommentData): Promise<void> {
    const { articleId, articleIdx, comment } = emitData;

    if (this.isCommentLimit) {
      alert('Please wait 30 seconds for each message')
      return;
    }

    this.isCommentLimit = true;

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
        this.updateComments(articleIdx, comments);
        resolve();
      } catch (err) { reject(err); }
      setTimeout(() => {
        this.isCommentLimit = false;
      }, 30 * 1000);
    });
  };

  public async deleteComment(emitData: EmitDeleteCommentData) {
    const { article, articleIdx, commentId } = emitData;
    const tempArticle: Article = JSON.parse(JSON.stringify(article));

    try {
      const { data } = await apiDeleteComment(article.id!, commentId);
      const { comments } = data;
      tempArticle.comments = comments;
      this.updateComments(articleIdx, comments);
    } catch (err) { console.dir(err); }
  };

  public async addArticleFavorite(article: Article, articleIdx: number) {
    const tempArticle = JSON.parse(JSON.stringify(article));

    try {
      const { data } = await apiAddArticleFavorite(article.id!);
      const { favorites } = data;
      tempArticle.favorites = favorites;
      this.setArticle(articleIdx, tempArticle);
      alert('add success');
    } catch (err) { console.log(err); }
  };

  public async removeArticleFavorite(article: Article, articleIdx: number) {
    const tempArticle = JSON.parse(JSON.stringify(article));

    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await apiRemoveArticleFavorite(article.id!);
        const { favorites } = data;
        tempArticle.favorites = favorites;
        this.setArticle(articleIdx, tempArticle);
        alert('remove success');
        resolve(favorites);
      } catch (err) { reject(err); }
    });
  };

  public setArticle(articleIdx: number, articleData: Article) {
    this.articles.value![articleIdx] = articleData;
  }

  public setArticles(articlesData: Article[]) {
    this.articles.value = articlesData;
  }

  public updateArticle(articleIdx: number, newArticle: Article) {
    this.articles.value![articleIdx] = newArticle;
  }

  public updateComments (articleIdx: number, comments: ArticleComment[]) {
    this.articles.value![articleIdx].comments = comments;
  }
}

export default (apiFunc: ApiFunc) => new Articles(apiFunc);
