<script lang="ts" setup>
import { ref, defineAsyncComponent, computed, Ref, inject } from 'vue';
import { apiCreateArticle, apiThumbsUpArticle, apiCancelThumbsUpArticle, apiPostComment,
  apiDeleteComment, apiAddArticleFavorite, apiRemoveArticleFavorite, apiDeleteArticle
} from '@/api';
import dayjs from '@/mixins/dayjs';
import getImageUrl from '@/mixins/getImageUrl';
import getSrcFolder from '@/mixins/getSrcFolder';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import store from '@/composition/store';
import { stateSymbol } from '@/Symbol';

const { getProfile, getArticles, setArticles, setArticle, setArticleComments } = store;

getProfile();
getArticles(1);

const FeedAside = defineAsyncComponent(() => import('@/components/Index/Feed/FeedAside.vue'));
const Editor = defineAsyncComponent(() => import(`${getSrcFolder()}/components/Editor.vue`));

const state: Ref<State> = inject(stateSymbol)!;
const articles = computed(() => state.value.articles);
const user = computed(() => state.value.user);

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
const editorEl = ref<any>(null);

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

const activeBtnsList = ref<string[]>([]);
const showBtnsList = (event: Event) => {
  const target = event.target as Element;
  if(event.type === 'mouseenter')
    target.classList.add('show');
  else if(event.type === 'mouseleave')
    target.classList.remove('show');
};

const createArticle = async () => {
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

const convertArticle = (content: any) => {
  const converter = new QuillDeltaToHtmlConverter(content.ops);
  return converter.convert();
};

const deleteArticle = async (articleId: string) => {
  try {
    const { data } = await apiDeleteArticle(articleId);
    console.log('data log => ', data);
    getArticles(1);
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

const cancelThumbsUpArticle = async (article: Article, idx: number) => {
  const tempArticle: Article = JSON.parse(JSON.stringify(article));

  try {
    const { data } = await apiCancelThumbsUpArticle(article.id!);
    const { likes } = data.article;
    tempArticle.likes = likes;
    setArticle(idx, tempArticle);
  } catch (err) { console.dir(err); }
};

const checkAiticleThumbsUp = (article: Article): boolean => {
  if (!article.likes?.length) return false;

  const isThumbsUpActive = article.likes.some((like) => like.uid === user.value.uid);
  return isThumbsUpActive;
};

const handleLikes = (articleLikes: ArticleLikes) => {
  if (!articleLikes || articleLikes && !articleLikes.length) return;

  return articleLikes.filter((like, idx) => idx < 5);
};

const isCommentLimit = ref(false);
const articleInputs = ref<string[]>([]);
const submitComment = async (articleId: string, key: number) => {
  if (isCommentLimit.value) {
    alert('Please wait 30 seconds for each message')
    return;
  }
  isCommentLimit.value = true;
  const comment = articleInputs.value[key];

  if (!comment) alert('comment required');

  const commentData: CommentData = {
    name: user.value.name!,
    photo: user.value.photo || '',
    comment,
  };
  try {
    const { data } = await apiPostComment(commentData, articleId);
    const { comments } = data;
    setArticleComments(comments, key);
    articleInputs.value[key] = '';
  } catch (err) { console.dir(err); }
  setTimeout(() => {
    isCommentLimit.value = false;
  }, 30 * 1000);
};

const deleteComment = async (articleIdx: number , article: Article, commentId: string) => {
  const tempArticle: Article = JSON.parse(JSON.stringify(article));
  
  try {
    const { data } = await apiDeleteComment(article.id!, commentId);
    const { comments } = data;
    tempArticle.comments = comments;
    setArticle(articleIdx, tempArticle);
  } catch (err) { console.dir(err); }
};

const addArticleFavorite =  async (articleIdx: number, article: Article) => {
  const tempArticle = JSON.parse(JSON.stringify(article));

  try {
    const { data } = await apiAddArticleFavorite(article.id!);
    const { favorites } = data;
    tempArticle.favorites = favorites;
    setArticle(articleIdx, tempArticle);
    alert('add success')
  } catch (err) { console.log(err); }
};

const removeAriticleFavorite = async (articleIdx: number, article: Article) => {
  const tempArticle = JSON.parse(JSON.stringify(article));

  try {
    const { data } = await apiRemoveArticleFavorite(article.id!);
    const { favorites } = data;
    tempArticle.favorites = favorites;
    setArticle(articleIdx, tempArticle);
    alert('remove success');
  } catch (err) { console.dir(err); }
};

const checkFavorite = (favorites: Favorite[] | undefined) => {
  if (!favorites) return;
  return favorites.some((favorite) => favorite.uid === user.value.uid);
}
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
        <li v-for="(article, key) in articles" class="feed-card">
          <div class="feed-card-header">
            <ul class="liked-list">
              <li v-for="(user, userKey) in handleLikes(article.likes!)" :key="user.uid">
                <span v-if="userKey !== 0 && (handleLikes(article.likes!)?.length! - 1) === userKey &&
                  article.likes && article.likes?.length <= 5">&nbspand&nbsp</span>
                <router-link :to="`@${user.uid}`">{{ user.name }}</router-link>
                <span v-if="
                  userKey < 4 && article.likes && 
                  ((handleLikes(article.likes)?.length! - 2) !== userKey || article.likes.length > 5) &&
                  (handleLikes(article.likes!)?.length! - 1) !== userKey">,&nbsp</span>
              </li>
              <li v-if="article.likes && article.likes.length > 5" class="like-this-text">
                and<button class="people-like-btn">more</button>people
              </li>
              <li v-if="article.likes?.length">&nbspliked this</li>
            </ul>
            <div class="card-btns-group" :class="{ show: activeBtnsList.includes(article.id!) }"
              @mouseleave="showBtnsList($event)"
              @mouseenter="showBtnsList($event)">
              <button type="button"
                class="feed-card-more-btn">
                <img v-show="!activeBtnsList.includes(article.id!)"
                  src="@/assets/images/Other.png" alt="more button">
                <img v-show="activeBtnsList.includes(article.id!)"
                  src="@/assets/images/chevron-down.png" alt="more button">
              </button>
              <ul>
                <li v-if="user.uid === article.uid">
                  <button type="button" @click="deleteArticle(article.id!)">delete</button>
                </li>
                <li v-if="!checkFavorite(article.favorites)">
                  <button type="button" @click="addArticleFavorite(key, article)">favorite</button>
                </li>
                 <li v-else>
                  <button type="button" class="un-favorite-btn" @click="removeAriticleFavorite(key, article)">UnFavorite</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="feed-card-body">
            <div class="feed-card-user">
              <router-link :to="`/@${article.uid}`" class="user-link">
                <img :src="article.photo || getImageUrl('user')" :alt="article.name">
              </router-link>
              <div>
                <router-link :to="`/@${article.uid}`" class="user-link">{{ article.name }}</router-link>
                <span v-if="user.uid === article.uid" class="user-link-notice">You</span>
                <h4>{{ article.job }}</h4>
              </div>
              <div class="article-time">
                <span class="article-create-time"> create time: 
                  {{ dayjs(article.create_time! * 1000).format('YYYY/MM/DD HH:mm:ss') }}</span>
              </div>
            </div>
            <div v-html="convertArticle(article.content)"></div>
          </div>
          <div class="feed-card-footer">
            <button v-if="checkAiticleThumbsUp(article)" type="button" @click="cancelThumbsUpArticle(article, key)"
              class="feed-card-footer-btn active">
              <img src="@/assets/images/thumbs-up-active.png" alt="thumbs-up button"
                class="thumbs-up-img">
              <span class="feed-card-likes-qty">{{ article.likes?.length }}</span>
            </button>
            <button v-else type="button" class="feed-card-footer-btn" @click="thumbsUpArticle(article, key)">
              <img src="@/assets/images/thumbs-up.png" alt="thumbs-up button" class="thumbs-up-img">
              <span class="feed-card-likes-qty">{{ article.likes?.length }}</span>
            </button>
            <button type="button" class="feed-card-footer-btn">
              <img src="@/assets/images/message-circle.png" alt="comments" class="comments-img">
              <span class="feed-card-comments-qty">{{ article.comments?.length }}</span>
            </button>
            <button type="button" class="feed-card-footer-btn">
              <img src="@/assets/images/share-2.png" alt="share button" class="share-img">
              <span>share</span>
            </button>
          </div>
          <ul class="article-messages">
            <li v-for="comment in article.comments" :key="comment.id">
              <img :src="comment.photo" alt="comment.name">
              <div class="comment-body">
                <div class="comment-header">
                  <h4>{{ comment.name || 'mike' }}</h4>
                  <span>{{ dayjs(comment.create_time * 1000).format('YYYY/MM/DD HH:mm:ss') || '2018/10/21 10:05' }}</span>
                </div>
                <p>{{ comment.comment || 'fefef5085484' }}</p>
              </div>
              <button v-if="comment.uid === user.uid" type="button" class="comment-delete-btn" @click="deleteComment(key, article, comment.id)">
                <span class="material-icons">delete_outline</span>
              </button>
            </li>
            <li class="comment-input-group">
              <img :src="user.photo" alt="comment.name">
              <input type="text" v-model="articleInputs[key]" @keyup.enter="submitComment(article.id!, key)">
              <button type="button" @click="submitComment(article.id!, key)"><span class="material-icons">send</span></button>
            </li>
          </ul>
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
  @include feed-card;
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
.feed-card {
  @include feed-card;
  padding: 0;
  margin-bottom: 20px;
}
.feed-card-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid $white-100;
  padding: 15px;
}
.liked-list {
  display: flex;
  margin-right: auto;
  li {
    line-height: 20px;
  }
  > li > a {
    text-decoration: none;
    color: $blue-400;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.3);
    }
  }
}
.people-like-btn {
  border: none;
  background: transparent;
  color: $blue-200;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    filter: brightness(1.3);
  }
}
.like-this-text {
  margin-left: 5px;
}
.card-btns-group {
  position: relative;
  text-align: center;
  > ul {
    background: $blue-100;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    box-shadow: 3px 3px 5px rgba($blue-200, 0.1);
    transition: visibility 0.2s, opacity 0.2s;
    transform: translateY(100%);
    > li {
      background: rgba($blue-200, 0.9);
      cursor: pointer;
      border-bottom: $white-400 1px solid;
      overflow: hidden;
      &:hover {
        background: rgba($blue-200, 0.8);
      }
      &:active {
        background: rgba($blue-200, 1);
      }
      &:first-child {
        margin-top: 0;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
      }
      &:last-child {
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom: none;
      }
      > button {
        width: 125px;
        font-weight: bold;
        text-transform: uppercase;
        color: $white;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 10px 20px;
      }
      .un-favorite-btn {
        background: $blue-600;
        &:hover {
          filter: brightness(0.9);
        }
        &:active {
          filter: brightness(0.8);
        }
      }
    }
  }
  &.show {
    ul {
      visibility: visible;
      opacity: 1;
    }
  }
}
.feed-card-more-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 5px 10px;
  > img {
    width: 24px;
    height: 24px;
  }
}
.feed-card-body {
  letter-spacing: 0.025rem;
  line-height: 1.5;
  border-bottom: 1px solid $white-100;
  padding: 15px 30px 20px;
}
.feed-card-user {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  .user-link {
    font-size: $fs-5;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    margin: 0 10px 5px 0;
    transition: color  0.2s, filter 0.2s;
    > img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
    &:hover {
      color: $blue-200;
      filter: brightness(0.8);
    }
  }
  .user-link-notice {
    color: $gray-400;
    font-size: $fs-7;
  }
  h4 {
    font-size: $fs-6;
    font-weight: lighter;
  }
}
.article-time {
  margin-left: auto;
  color: rgba($dark-100, 0.9);
}
.article-create-time {
  margin-bottom: 5px;
}
.feed-card-footer {
  display: flex;
  align-items: center;
  padding: 0 30px;
  button:last-child {
    margin-left: auto;
  }
  button {
    margin-left: -1px;
    border-right: 1px solid $white-100;
    border-left: 1px solid $white-100;
  }
}
.feed-card-footer-btn {
  display: flex;
  align-items: center;
  border: none;
  background: $white;
  cursor: pointer;
  padding: 15px 30px;
  transition: background-color 0.2s;
  > img {
    width: 15px;

  }
  &:hover {
    background: $white-100;
  }
  &:active {
    background: $white-400;
  }
  &.active {
    filter: brightness(0.95);
  }
}
.feed-card-likes-qty, feed-card-comments-qty {
  color: $blue-200;
}
.thumbs-up-img, .comments-img {
  margin-right: 5px;
}
.share-img {
  margin-right: 5px;
}
.article-messages {
  padding: 0 30px;
  border-top: 1px solid $white-100;
  > li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid $white-100;
    &:last-child {
      border-bottom: none;
      padding-bottom: 30px
    }
    > img {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-right: 10px;
    }
  }
}
.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  > h4 {
    margin-right: 5px;
  }
  > span {
    font-size: $fs-6;
    color: rgba($dark-100, 0.6);
  }
}
.comment-body {
  flex-grow: 1;
}
.comment-delete-btn {
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 5px;
  background: $red-100;
  color: $white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9)
  }
  &:active {
    filter: brightness(0.8)
  }
}
.comment-input-group {
  > img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
  }
  > input {
    flex-grow: 1;
    padding: 5px 10px;
    font-size: $fs-4;
    margin-right: 10px;
  }
  > button {
    @include button;
    width: auto;
    height: 37px;
    color: $white;
    background: $blue-400;
    padding: 0 10px;
    &:hover {
      filter: brightness(1.3);
    }
    &:active {
      filter: brightness(0.8);
    }
  }
}
</style>
