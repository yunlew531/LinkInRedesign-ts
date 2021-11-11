<script lang="ts" setup>
import { ref, defineAsyncComponent, DefineComponent } from 'vue';
import { apiGetArticles, apiCreateArticle } from '@/api';
import createArticles from '@/composition/createArticles';
import store from '@/composition/store';

const FeedAside = defineAsyncComponent(() => import('@/components/Index/Feed/FeedAside.vue'));
const Editor = defineAsyncComponent(() => import('@/components/Editor.vue'));
const Article = defineAsyncComponent(() => import('@/components/Index/Article.vue'));

const { getProfile } = store;
const articles = createArticles(apiGetArticles);

const init = () => {
  getProfile();
  articles.getArticles();
};
init();

const editorOptions = {
  placeholder: 'input content',
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ],
  },
};

const editorEl = ref<DefineComponent>();

const postArticle = async () => {
  const empty = editorEl.value!.checkEmpty();
  if (empty) {
    alert('content required');
    return;
  };

  const article = {
    content: editorEl.value!.getContents(),
  };
  
  try {
    const { data } = await apiCreateArticle(article);
    const { articles: articlesData } = data;
    articles.setArticles(articlesData);
    editorEl.value!.setText();
  } catch (err) { console.dir(err); }
};

const focusEditor = () => editorEl.value!.focus();

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
  <div class="feed-container">
    <main class="feed-main">
      <section class="new-post">
        <div class="new-post-header">
          <h3>new post</h3>
          <button type="button" class="new-post-submit-btn" @click="postArticle">
            <img src="@/assets/images/Vector-white.png" alt="submit button">
          </button>
        </div>
        <Editor ref="editorEl" :options="editorOptions" :toolbar="true">
          <template v-slot:buttons><div></div></template>
        </Editor>
      </section>
      <div class="divide">
        <span class="divide-text">
          Sort by: <span class="emphasize">trending</span>
        </span>
      </div>
      <ul class="feeds-list">
        <li v-for="(article, index) in articles.articles.value" :key="article.id">
          <Article :ref="(el: any) => articleRefs[index] = el" :article="article" :index="index"
            @thumbsUp="articles.thumbsUpArticle(article, index)" 
            @removeThumbsUp="articles.removeThumbsUpArticle(article, index)"
            @deleteArticle="articles.deleteArticle(article.id!)" 
            @postComment="handlePostComment"
            @deleteComment="handleDeleteComment"
            @addArticleFavorite="articles.addArticleFavorite(article, index)"
            @removeArticleFavorite="articles.removeArticleFavorite(article, index)"
          />
        </li>
      </ul>
    </main>
    <FeedAside @focus="focusEditor" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.feed-container {
  display: flex;
}
.feed-main {
  flex-grow: 1;
  margin-right: 40px;
}
.new-post {
  @include article-card;
}
.new-post-header {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: $fs-6;
  padding-bottom: 15px;
}
.new-post-editor {
  border-radius: 0 0 8px 8px;
}
.new-post-submit-btn {
  margin-left: auto;
  cursor: pointer;
  background: $blue-400;
  border-radius: 4px;
  border: 1px solid $blue-200;
  box-shadow: 5px 5px 30px rgba($blue-200, 0.15);
  padding: 10px;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
}
.divide {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #E7E7E7;
  text-transform: uppercase;
  font-size: $fs-6;
  font-weight: bold;
  position: relative;
  margin: 30px 0;
  .emphasize {
    color: $blue-200
  }
}
.divide-text {
  display: block;
  background: $white-200;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
