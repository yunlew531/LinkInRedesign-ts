<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { apiGetOwnArticle } from '@/api';
import handleArticles from '@/composition/handleArticles';

const Article = defineAsyncComponent(() => import('@/components/Index/Article.vue'));

const { articles, getArticles } = handleArticles(apiGetOwnArticle);

type CurrentDisplay = 'post' | 'favorites';
const currentDisplay = ref<CurrentDisplay>('post');
const handleCurrentDisplay = (display: CurrentDisplay) => currentDisplay.value = display;

const init = () => getArticles();
init();
</script>

<template>
  <section>
    <div class="page-title-container">
      <h2 class="page-title">articles</h2>
      <div class="btns-container">
        <button type="button" class="page-btn"
          :class="{ active: currentDisplay === 'post' }"
          @click="handleCurrentDisplay('post')">
          <span>post</span>
        </button>
        <button type="button" class="page-btn"
          :class="{ active: currentDisplay === 'favorites' }"
          @click="handleCurrentDisplay('favorites')">
          <span>favorites</span>
        </button>
      </div>
    </div>
    <ul>
      <li v-for="(article, index) in articles" :key="article.id">
        <Article :article="article" :index="index" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.page-title-container {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #E7E7E7;
  margin-bottom: 20px;
}
.page-title {
  text-transform: uppercase;
  font-size: $fs-4;
  color: $dark-200;
  letter-spacing:0.05rem;
  padding-bottom: 10px;
  margin-right: auto;
}
.btns-group {
  > button {
    @include button;
    height: 100%;
    padding: 5px 10px;
    &:first-child {
      margin-right: 5px;
    }
  }
}
.btns-container {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid $gray-300;
}
.page-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  text-transform: uppercase ;
  font-weight: bold;
  background: $white;
  border: 1px solid $gray-300;
  border-bottom: none;
  cursor: pointer;
  transition: margin-top 0.3s ease-in, color 0.2s, background-color 0.2s;
  margin: 0 0 -1px -1px;
  &:first-of-type {
    margin-left: 0;
    border-radius: 8px 0 0 0;
  }
  &:last-of-type {
    border-radius: 0 8px 0 0;
  }
  &.active {
    color: $white;
    background: $blue-400;
  }
}
</style>
