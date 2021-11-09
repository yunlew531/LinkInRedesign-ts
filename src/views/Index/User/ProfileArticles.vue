<script lang="ts" setup>
import { ref, defineAsyncComponent, DefineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetUserArticles } from '@/api';
import handleArticles from '@/composition/handleArticles';

const Article = defineAsyncComponent(() => import('@/components/Index/Article.vue'));

const route = useRoute();

const { articles, getArticles, thumbsUpArticle, removeThumbsUpArticle, deleteArticle, postComment, deleteComment,
  addArticleFavorite, removeArticleFavorite
} = handleArticles(apiGetUserArticles);

const init = () => getArticles(<string>route.params.uid);
init();

const articleRefs = ref<DefineComponent[]>([]);

const handlePostComment = async (emitData: EmitSubmitCommentData) => {
  const { articleIdx } = emitData;

  try {
    await postComment(emitData);
    articleRefs.value[articleIdx].resetCommentInput(articleIdx);
  } catch (err) { console.log(err); }
};
</script>

<template>
  <ul>
    <li v-for="(article, index) in articles" :key="article.id">
      <Article :ref="(el: any) => articleRefs[index] = el"
        :article="article" :index="index"
        @thumbsUp="thumbsUpArticle(article, index)"
        @removeThumbsUp="removeThumbsUpArticle(article, index)"
        @postComment="handlePostComment"
        @deleteComment="deleteComment"
        @deleteArticle="deleteArticle(article.id!)"
        @addArticleFavorite="addArticleFavorite(article, index)"
        @removeArticleFavorite="removeArticleFavorite(article, index)"
      />
    </li>
  </ul>
</template>
