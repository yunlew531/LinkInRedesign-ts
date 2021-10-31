<script lang="ts" setup>
import { ref, defineAsyncComponent, computed, Ref, inject } from 'vue';
import { apiCreateArticle, apiThumbsUpArticle, apiCancelThumbsUpArticle, apiDeleteArticle,
  apiAddArticleFavorite, apiRemoveArticleFavorite, apiPostComment, apiDeleteComment
} from '@/api';
import store from '@/composition/store';
import { stateSymbol } from '@/Symbol';

const { getProfile, getArticles, setArticles, setArticle ,setArticleComments } = store;

getProfile();
getArticles(1);

const FeedAside = defineAsyncComponent(() => import('@/components/Index/Feed/FeedAside.vue'));
const Editor = defineAsyncComponent(() => import('../../components/Editor.vue'));
const Article = defineAsyncComponent(() => import('@/components/Index/Article.vue'));

const state: Ref<State> = inject(stateSymbol)!;
const user = computed(() => state.value.user);
const articles = computed(() => state.value.articles);

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


const editorEl = ref();

const feeds = ref(
  [
    {
      id: 'b61owa2CGXa70CPs',
      uid: 'QbW2SLcSr90oL9ly05U0',
      name: 'Theresa Steward',
      user_photo: 'feed-user-1',
      profession: 'iOS developer',
      content: 'What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).',
      likes: [
        { name: 'Alina', uid: '5hiP6EBTn5m7bI7Qc68t' },
        { name: 'Mike', uid: '8TmjUC59g7fn6NUJ3p5x' },
        { name: 'Jason', uid: 'wEUnj3c3FJ6kEC5W6z82' },
        { name: 'Tom', uid: 'W0dX676k7n6SDsr1QYma' },
      ],
      comments: [],
      imgs: [],
    },
    {
      id: 'UO1w88P1nG2dS2pu',
      uid: 'abB3kTo3WDS319sOC5td',
      name: 'Kyle Fisher',
      user_photo: 'feed-user-2',
      profession: 'Product designer at Commandor Corp.',
      content: 'How’s your day going, guys?',
      likes: [ { name: 'Jack', uid: '3G1Lhjnj46MlmEY5JUg4' } ],
      comments: [],
      imgs: [],
    },
  ],
);

const createArticle = async () => {
  const empty = editorEl.value.checkEmpty();
  if (empty) {
    alert('content required');
    return;
  };

  const article = {
    content: editorEl.value.getContents(),
  };
  
  try {
    const { data } = await apiCreateArticle(article);
    const { articles } = data;
    setArticles(articles);
    editorEl.value.setText();
  } catch (err) { console.dir(err); }
};

const focusEditor = () => editorEl.value.focus();

const thumbsUpArticle = async (article: Article, idx: number) => {
  const tempArticle: Article = JSON.parse(JSON.stringify(article));
  const userData = {
    name: user.value.name,
    photo: user.value.photo,
    job: user.value.job,
  };

  try {
    const { data } = await apiThumbsUpArticle(userData, article.id!);
    const { likes } = data.article;
    tempArticle.likes = likes;
    setArticle(idx, tempArticle);
  } catch (err) { console.dir(err); }
};

const removeThumbsUpArticle = async (article: Article, idx: number) => {
  const tempArticle: Article = JSON.parse(JSON.stringify(article));

  try {
    const { data } = await apiCancelThumbsUpArticle(article.id!);
    const { likes } = data.article;
    tempArticle.likes = likes;
    setArticle(idx, tempArticle);
  } catch (err) { console.dir(err); }
};

const deleteArticle = async (articleId: string) => {
  try {
    await apiDeleteArticle(articleId);
    getArticles(1);
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

const removeAriticleFavorite = async (article: Article, articleIdx: number) => {
  const tempArticle = JSON.parse(JSON.stringify(article));

  try {
    const { data } = await apiRemoveArticleFavorite(article.id!);
    const { favorites } = data;
    tempArticle.favorites = favorites;
    setArticle(articleIdx, tempArticle);
    alert('remove success');
  } catch (err) { console.dir(err); }
};

interface EmitSubmitCommentData {
  articleId: string;
  articleIdx: number;
  comment: string;
}

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
    setArticleComments(comments, articleIdx);
    articlesRef.value[articleIdx].resetCommentInput(articleIdx);
  } catch (err) { console.dir(err); }
  setTimeout(() => {
    isCommentLimit.value = false;
  }, 30 * 1000);
};

interface EmitDeleteCommentData {
  article: Article;
  articleIdx: number;
  commentId: string;
}

const deleteComment = async (emitData: EmitDeleteCommentData) => {
  const { article, articleIdx, commentId } = emitData;
  const tempArticle: Article = JSON.parse(JSON.stringify(article));
  
  try {
    const { data } = await apiDeleteComment(article.id!, commentId);
    const { comments } = data;
    tempArticle.comments = comments;
    setArticle(articleIdx, tempArticle);
  } catch (err) { console.dir(err); }
};
</script>

<template>
  <div class="feed-container">
    <main class="feed-main">
      <section class="new-post">
        <div class="new-post-header">
          <h3>new post</h3>
          <button type="button" class="new-post-submit-btn" @click="createArticle">
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
        <li v-for="(article, index) in articles" :key="article.id">
          <Article :ref="(el: any) => articlesRef[index] = el" :article="article" :index="index"
            @thumbsUp="thumbsUpArticle(article, index)" 
            @removeThumbsUp="removeThumbsUpArticle(article, index)"
            @deleteArticle="deleteArticle(article.id!)" 
            @addArticleFavorite="addArticleFavorite(article, index)"
            @removeAriticleFavorite="removeAriticleFavorite(article, index)"
            @submitComment="submitComment"
            @deleteComment="deleteComment" />
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
