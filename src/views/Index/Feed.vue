<script lang="ts" setup>
import { ref, defineAsyncComponent, computed, inject, Ref } from 'vue';
import { apiCreateArticle } from '@/api';
import getImageUrl from '@/mixins/getImageUrl';
import store from '@/composition/store';

const { getProfile } = store;

getProfile();

const FeedAside = defineAsyncComponent(() => import('@/components/Index/Feed/FeedAside.vue'));
const Editor = defineAsyncComponent(() => import('@/components/Editor.vue'));

const state: Ref<State> = inject('state')!;
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
const showBtnsList = (feedId: string, event: Event) => {
  if(event.type === 'mouseenter') 
    activeBtnsList.value.push(feedId);
  else if(event.type === 'mouseleave') {
    const idx = activeBtnsList.value.indexOf(feedId);
    if(idx === -1) return;
    activeBtnsList.value.splice(idx, 1)
  }
};

const articles = ref<Article[]>();

const createArticle = async () => {
  const article = {
    content: editorEl.value.getContents(),
  };
  
  try {
    const { data } = await apiCreateArticle(article);
    console.log('data log => ', data);
    const { articles } = data;
    articles.value = articles;
  } catch (err) {
    console.dir(err);
  }
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
        {{ articles }}
      </section>
      <div class="divide">
        <span class="divide-text">
          Sort by: <span class="emphasize">trending</span>
        </span>
      </div>
      <ul class="feeds-list">
        <li v-for="feed in feeds" class="feed-card">
          <div class="feed-card-header">
            <ul class="liked-list">
              <li v-for="(user, userKey) in feed.likes" :key="user.uid">
                {{ (userKey === feed.likes.length - 1) && (userKey > 0) ?  '&nbsp and ' : '' }}
                <router-link :to="`@${user.uid}`">{{ user.name }}</router-link>
                {{ userKey < feed.likes.length - 2 ?  ',&nbsp' : '' }}
                {{ userKey === feed.likes.length - 1 ?  ' liked this' : '' }}
              </li>
            </ul>
            <div class="card-btns-group" :class="{ show: activeBtnsList.includes(feed.id) }"
              @mouseleave="showBtnsList(feed.id ,$event)"
              @mouseenter="showBtnsList(feed.id, $event)">
              <button type="button"
                class="feed-card-more-btn">
                <img v-show="!activeBtnsList.includes(feed.id)"
                  src="@/assets/images/Other.png" alt="more button">
                <img v-show="activeBtnsList.includes(feed.id)"
                  src="@/assets/images/chevron-down.png" alt="more button">
              </button>
              <ul>
                <li>
                  <button type="button">delete</button>
                </li>
                <li>
                  <button type="button">收藏</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="feed-card-body">
            <div class="feed-card-user">
              <router-link :to="`/@${feed.uid}`" class="user-link">
                <img :src="getImageUrl(feed.user_photo)" :alt="feed.name">
              </router-link>
              <div>
                <router-link :to="`/@${feed.uid}`" class="user-link">{{ feed.name }}</router-link>
                <h4>{{ feed.profession }}</h4>
              </div>
            </div>
            <p>{{ feed.content }}</p>
          </div>
          <ul class="feed-card-footer">
            <li>
              <button type="button" class="feed-card-footer-btn">
                <img v-if="feed.likes.length"
                  src="@/assets/images/thumbs-up-active.png" alt="thumbs-up button">
                <img v-else src="@/assets/images/thumbs-up.png"
                  alt="thumbs-up button">
                <span>{{ feed.likes.length }}</span>
              </button>
            </li>
            <li>
              <button type="button" class="feed-card-footer-btn">
                <img src="@/assets/images/message-circle.png" alt="comments button">
                <span>{{ feed.comments.length }}</span>
              </button>
            </li>
            <li>
              <button type="button" class="feed-card-footer-btn">
                <img src="@/assets/images/share-2.png" alt="share button">
                <span>share</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </main>
    <FeedAside />
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
  > li > a {
    text-decoration: none;
    color: $blue-400;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.3);
    }
  }
}
.card-btns-group {
  position: relative;
  text-align: center;
  > ul {
    background: transparent !important;
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
        font-weight: bold;
        text-transform: uppercase;
        color: $white;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 10px 20px;
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
    margin: 0 15px 5px 0;
    transition: color  0.2s, filter 0.2s;
    &:hover {
      color: $blue-200;
      filter: brightness(0.8);
    }
  }
  h4 {
    font-size: $fs-6;
    font-weight: lighter;
  }
}
.feed-card-footer {
  display: flex;
  align-items: center;
  padding: 0 30px;
  li:last-child {
    margin-left: auto;
  }
  > li {
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
    margin-right: 5px;
  }
  &:hover {
    background: $white-100;
  }
  &:active {
    background: $white-400;
  }
}
</style>
