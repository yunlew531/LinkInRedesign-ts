<script lang="ts" setup>
import { ref, defineAsyncComponent, DefineComponent, inject } from 'vue';
import { Articles } from '@/composition/createArticles';
import { ownArticles } from '@/Symbol';

const Article = defineAsyncComponent(() => import('@/components/Index/Article.vue'));

const articles: Articles = inject(ownArticles)!;

const articleRefs = ref<DefineComponent[]>([]);

const handlePostComment = async (emitData: EmitSubmitCommentData) => {
  const { articleIdx } = emitData;

  try {
    await articles.postComment(emitData);
    articleRefs.value[articleIdx].resetCommentInput(articleIdx);
  } catch (err) { console.log(err); }
};

const handleDeleteComment = (emitData: EmitDeleteCommentData) => articles.deleteComment(emitData);
</script>

<template>
  <ul>
    <li v-for="(article, index) in articles.articles.value" :key="article.id">
      <Article :ref="(el: any) => articleRefs[index] = el"
        :article="article" :index="index"
        @thumbsUp="articles.thumbsUpArticle(article, index)"
        @removeThumbsUp="articles.removeThumbsUpArticle(article, index)"
        @postComment="handlePostComment"
        @deleteComment="handleDeleteComment"
        @deleteArticle="articles.deleteArticle(article.id!)"
        @addArticleFavorite="articles.addArticleFavorite(article, index)"
        @removeArticleFavorite="articles.removeArticleFavorite(article, index)"
      />
    </li>
  </ul> 
</template>
