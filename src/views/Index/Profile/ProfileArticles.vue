<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import { apiGetOwnArticle } from '@/api';
import handleArticles from '@/composition/handleArticles';

const Article = defineAsyncComponent(() => import('@/components/Index/Article.vue'));

const { articles, getArticles, thumbsUpArticle, removeThumbsUpArticle, deleteArticle, postComment, deleteComment } =
  handleArticles(apiGetOwnArticle);

const ArticleRefs = ref<any[]>([]);

const handlePostComment = async (emitData: EmitSubmitCommentData) => {
  const { articleIdx } = emitData;

  try {
    await postComment(emitData);
    ArticleRefs.value[articleIdx].resetCommentInput(articleIdx);
  } catch (err) { console.log(err); }
};

getArticles();
</script>

<template>
  <ul>
    <li v-for="(article, index) in articles" :key="article.id">
      <Article :ref="(el: typeof ref) => ArticleRefs[index] = el" :article="article" :index="index"
        @thumbsUp="thumbsUpArticle(article, index)"
        @removeThumbsUp="removeThumbsUpArticle(article, index)"
        @postComment="handlePostComment"
        @deleteComment="deleteComment"
        @deleteArticle="deleteArticle(article.id!)"
      />
    </li>
  </ul> 
</template>
