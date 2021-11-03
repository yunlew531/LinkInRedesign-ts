<script lang="ts" setup>
import { ref, inject, computed, Ref } from 'vue';
import Article from '@/components/Index/Article.vue';
import { apiGetOwnArticle, apiThumbsUpArticle, apiCancelThumbsUpArticle, apiPostComment, apiDeleteArticle,
  apiDeleteComment
} from '@/api';
import { stateSymbol } from '@/Symbol';

const state: Ref<State> = inject(stateSymbol)!;
const user = computed(() => state.value.user);

const articles = ref<Article[]>([]);
const getOwnArticle = async () => {
  try {
    const { data } = await apiGetOwnArticle();
    articles.value = data.articles;
  } catch (err) { console.dir(err); }
};

const updateArticle = (articleIdx: number, newArticle: Article) =>
  articles.value[articleIdx] = newArticle;

const deleteArticle = async (articleId: string) => {
  try {
    await apiDeleteArticle(articleId);
    getOwnArticle();
  } catch (err) { console.dir(err); }
};

const thumbsUpArticle = async (article: Article, articleIdx: number) => {
  const tempArticle: Article = JSON.parse(JSON.stringify(article));
  const userData = {
    name: user.value.name,
    photo: user.value.photo,
    job: user.value.job,
  };

  try {
    const { data } = await apiThumbsUpArticle(userData, article.id!);
    const { likes } = data;
    tempArticle.likes = likes;
    updateArticle(articleIdx, tempArticle);
  } catch (err) { console.dir(err); }
};

const removeThumbsUpArticle = async (article: Article, articleIdx: number) => {
  const tempArticle: Article = JSON.parse(JSON.stringify(article));

  try {
    const { data } = await apiCancelThumbsUpArticle(article.id!);
    const { likes } = data;
    tempArticle.likes = likes;
    updateArticle(articleIdx, tempArticle);
  } catch (err) { console.dir(err); }
};

const updateComments = (articleIdx: number, comments: ArticleComment[]) =>
  articles.value[articleIdx].comments = comments;

const articlesRef = ref<any[]>([]);

const isCommentLimit = ref(false);
const submitComment = async (emitData: EmitSubmitCommentData) => {
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

  const commentData: CommentData = {
    name: user.value.name!,
    photo: user.value.photo || '',
    comment,
  };

  try {
    const { data } = await apiPostComment(commentData, articleId);
    const { comments } = data;
    updateComments(articleIdx, comments);
    articlesRef.value[articleIdx].resetCommentInput(articleIdx);
  } catch (err) { console.dir(err); }
  setTimeout(() => {
    isCommentLimit.value = false;
  }, 30 * 1000);
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

const init = () => {
  getOwnArticle();
};
init();
</script>

<template>
  <ul>
    <li v-for="(article, index) in articles" :key="article.id">
      <Article :ref="(el: any) => articlesRef[index] = el" :article="article" :index="index"
        @thumbsUp="thumbsUpArticle(article, index)"
        @removeThumbsUp="removeThumbsUpArticle(article, index)"
        @submitComment="submitComment"
        @deleteArticle="deleteArticle(article.id!)"
        @deleteComment="deleteComment" />
    </li>
  </ul> 
</template>