<script lang="ts" setup>
import { ref } from 'vue';
import Article from '@/components/Index/Article.vue';
import { apiGetOwnArticle } from '@/api';

const articles = ref<Article[]>();
const getOwnArticle = async () => {
  try {
    const { data } = await apiGetOwnArticle();
    articles.value = data.articles;
  } catch (err) { console.dir(err); }
};

const init = () => {
  getOwnArticle();
};
init();
</script>

<template>
  <ul>
    <Article v-for="(article, index) in articles" :key="article.id" :article="article" :index="index" />
  </ul> 
</template>