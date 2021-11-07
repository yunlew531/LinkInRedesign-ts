<script lang="ts" setup>
import { computed, inject, Ref, PropType, ref } from 'vue';
import { useRouter } from 'vue-router';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import getImageUrl from '@/mixins/getImageUrl';
import dayjs from '@/mixins/dayjs';
import { stateSymbol } from '@/Symbol';

defineProps({
  article: {
    type: Object as PropType<Readonly<Article>>,
    default: () => ({}),
    required: true,
  },
  index: {
    type: Number,
    default: 0,
    required: true,
  },
});

const emits = defineEmits(['thumbsUp', 'removeThumbsUp', 'deleteArticle', 'addArticleFavorite',
  'removeArticleFavorite', 'deleteComment', 'postComment']);

const thumbsUpArticle = () => emits('thumbsUp');
const cancelThumbsUpArticle = () => emits('removeThumbsUp');
const deleteArticle = () => emits('deleteArticle');
const addArticleFavorite = () => emits('addArticleFavorite');
const removeArticleFavorite = () => emits('removeArticleFavorite');
const postComment = (articleId: string, articleIdx: number) => {
  const data = {
    articleId,
    articleIdx,
    comment: articleInputs.value[articleIdx],
  };
  emits('postComment', data);
};
const deleteComment = (article: Article, articleIdx: number, commentId: string) => {
  const data = {
    article,
    articleIdx,
    commentId,
  };
  emits('deleteComment', data);
};

const router = useRouter();

const state: Ref<State> = inject(stateSymbol)!;

const user = computed(() => state.value.user);

const checkAiticleThumbsUp = (article: Article): boolean => {
  if (!article.likes?.length) return false;

  const isThumbsUpActive = article.likes.some((like) => like.uid === user.value.uid);
  return isThumbsUpActive;
};

const handleLikesDisplayQty = (articleLikes: ArticleLike[]) => {
  if (!articleLikes || articleLikes && !articleLikes.length) return;

  return articleLikes.filter((like, idx) => idx < 5);
};

const handleLikedUserModalShow = (e: Event) => {
  const target = e.target as Element;

  if (e.type === 'mouseenter') target.classList.add('show');
  else target.classList.remove('show');
};

const goProfilePage = (uid: string) => router.push(`/@${uid}/profile`);

const handleCommentsDisplay = (e: Event) => {
  const target = (<Element>e.target).closest('.article-card')!;

  target.classList.toggle('show');
};

const showBtnsList = (event: Event) => {
  const target = event.target as Element;
  if(event.type === 'mouseenter')
    target.classList.add('show');
  else if(event.type === 'mouseleave')
    target.classList.remove('show');
};

const checkFavorite = (favorites: string[]) => {
  if (!favorites?.length || !user.value.uid) return;
  return favorites.includes(user.value.uid);
}

const convertArticle = (content: any) => {
  const converter = new QuillDeltaToHtmlConverter(content.ops);
  return converter.convert();
};

const articleInputs = ref<string[]>([]);

const resetCommentInput = (articleIdx: number) => articleInputs.value[articleIdx] = '';

defineExpose({
  resetCommentInput,
});
</script>

<template>
  <div class="article-card">
    <div class="article-card-header">
      <ul class="liked-list">
        <li v-for="(likedUser, userKey) in handleLikesDisplayQty(article.likes!)" :key="likedUser.uid"
          @mouseenter="handleLikedUserModalShow($event)"
            @mouseleave="handleLikedUserModalShow($event)"
            class="liked-item">
          <div class="liked-item-modal-container">
            <div class="liked-item-triangle-dicoration"></div>
            <div class="liked-item-modal">
              <img :src="likedUser.photo" :alt="likedUser.name">
              <div class="liked-item-modal-content">
                <h3>{{ likedUser.name }}</h3>
                <h4>{{ likedUser.job }}</h4>
                <div class="liked-modal-btns">
                  <button type="button" @click="goProfilePage(likedUser.uid)">profile</button>
                  <button type="button">chat</button>
                </div>
              </div>
            </div>
          </div>
          <span v-if="userKey !== 0 && (handleLikesDisplayQty(article.likes!)?.length! - 1) === userKey &&
            article.likes && article.likes?.length <= 5">&nbspand&nbsp</span>
          <router-link :to="`/@${likedUser.uid}`">{{ likedUser.name }}</router-link>
          <span v-if="
            userKey < 4 && article.likes && 
            ((handleLikesDisplayQty(article.likes)?.length! - 2) !== userKey || article.likes.length > 5) &&
            (handleLikesDisplayQty(article.likes!)?.length! - 1) !== userKey">,&nbsp</span>
        </li>
        <li v-if="article.likes && article.likes.length > 5" class="like-this-text">
          and<button class="people-like-btn">more</button>people
        </li>
        <li v-if="article.likes?.length">&nbspliked this</li>
      </ul>
      <div class="card-btns-group" @mouseleave="showBtnsList($event)"
        @mouseenter="showBtnsList($event)">
        <button type="button"
          class="article-card-more-btn">
          <img src="@/assets/images/Other.png" alt="more button">
        </button>
        <ul>
          <li v-if="user.uid === article.uid">
            <button type="button" @click="deleteArticle()">delete</button>
          </li>
          <li v-if="!checkFavorite(article.favorites!)">
            <button type="button" @click="addArticleFavorite()">favorite</button>
          </li>
          <li v-else>
            <button type="button" class="un-favorite-btn"
              @click="removeArticleFavorite()">UnFavorite</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="article-card-body">
      <div class="article-card-user">
        <router-link :to="`/@${article.uid}`" class="user-link">
          <img :src="article.photo || getImageUrl('user')" :alt="article.name">
        </router-link>
        <div>
          <router-link :to="`/@${article.uid}`" class="user-link">{{ article.name }}</router-link>
          <span v-if="user.uid === article.uid" class="user-link-notice">You</span>
          <h4>{{ article.job }}</h4>
        </div>
        <div class="article-time">
          <span class="article-create-time">
            {{ dayjs(article.create_time! * 1000).format('YYYY/MM/DD HH:mm:ss') }}</span>
        </div>
      </div>
      <div v-html="convertArticle(article.content)"></div>
    </div>
    <div class="article-card-footer">
      <button v-if="checkAiticleThumbsUp(article)" type="button"
        @click="cancelThumbsUpArticle()"
        class="article-card-footer-btn active">
        <img src="@/assets/images/thumbs-up-active.png" alt="thumbs-up button"
          class="thumbs-up-img">
        <span class="article-card-likes-qty">{{ article.likes?.length }}</span>
      </button>
      <button v-else type="button" class="article-card-footer-btn"
        @click="thumbsUpArticle()">
        <img src="@/assets/images/thumbs-up.png" alt="thumbs-up button" class="thumbs-up-img">
        <span class="article-card-likes-qty">{{ article.likes?.length }}</span>
      </button>
      <button type="button" class="article-card-footer-btn" @click="handleCommentsDisplay($event)">
        <img src="@/assets/images/message-circle.png" alt="comments" class="comments-img">
        <span class="article-card-comments-qty">{{ article.comments?.length }}</span>
      </button>
      <button type="button" class="article-card-footer-btn">
        <img src="@/assets/images/share-2.png" alt="share button" class="share-img">
        <span>share</span>
      </button>
    </div>
    <ul class="article-messages-list">
      <li v-for="comment in article.comments" :key="comment.id">
        <img :src="comment.photo" alt="comment.name" @click="goProfilePage(comment.uid)">
        <div class="comment-body">
          <div class="comment-header">
            <router-link :to="`/@${comment.uid}`">{{ comment.name }}</router-link>
            <span>
              {{ dayjs(comment.create_time * 1000).format('YYYY/MM/DD HH:mm:ss') }}
            </span>
          </div>
          <p>{{ comment.comment }}</p>
        </div>
        <button v-if="comment.uid === user.uid" type="button" class="comment-delete-btn"
          @click="deleteComment(article, index, comment.id)">
          <span class="material-icons">delete_outline</span>
        </button>
      </li>
      <li class="comment-input-group">
        <img :src="user.photo" alt="comment.name">
        <input type="text" v-model="articleInputs[index]"
          @keyup.enter="postComment(article.id!, index)">
        <button type="button" @click="postComment(article.id!, index)">
          <span class="material-icons">send</span></button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.article-card {
  @include article-card;
  padding: 0;
  margin-bottom: 20px;
  border: 1px solid rgba($blue-500, 0.15);
  &.show {
    .article-messages-list {
      display: block;
    }
  }
}
.article-card-header {
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
    cursor: pointer;
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
.liked-item {
  position: relative;
  &.show {
    .liked-item-modal-container {
      visibility: visible;
      opacity: 1;
    }
  }
}
.liked-item-modal-container {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s opacity, 0.3s visibility;
}
.liked-item-modal {
  width: 250px;
  display: flex;
  align-items: center;
  border: 1px solid $blue-100;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
  background: $white;
  transition: 0.3s box-shadow;
  box-shadow: 20px 20px 20px rgba($blue-400, 0.1);
  &::before {
    content: '';
    width: 100%;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: -20px;
    cursor: auto;
  }
  > img {
    align-self: start;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
  }
}
.liked-item-triangle-dicoration {
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  border-bottom: 2px solid $blue-100;
  border-right: 2px solid $blue-100;
  box-shadow: 20px 20px 20px rgba($blue-400, 0.1);
  background: $white;
  transform: rotate(45deg) translateX(-50%);
  z-index: 10;
}
.liked-item-modal-content {
  flex: 1 0;
  > h4 {
    font-weight: normal;
    color: rgba($dark-100, 0.7);
    font-size: $fs-6;
  }
}
.liked-modal-btns {
  display: flex;
  margin-right: -10px;
  > button {
    text-transform: uppercase;
    font-weight: bold;
    width: 48%;
    border: none;
    background: $blue-500;
    color: $white;
    border-radius: 5px;
    transition: 0.2s background-color;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 5px;
    margin-right: 10px;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.8);
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
        background: $red-100;
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
.article-card-more-btn {
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
.article-card-body {
  letter-spacing: 0.025rem;
  line-height: 1.5;
  border-bottom: 1px solid $white-100;
  padding: 15px 30px 20px;
}
.article-card-user {
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
  align-self: start;
  margin-left: auto;
  color: rgba($dark-100, 0.9);
}
.article-create-time {
  margin-bottom: 5px;
}
.article-card-footer {
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
.article-card-footer-btn {
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
.article-card-likes-qty, .article-card-comments-qty {
  color: $blue-200;
}
.thumbs-up-img, .comments-img {
  margin-right: 5px;
}
.share-img {
  margin-right: 5px;
}
.article-messages-list {
  display: none;
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
      transition: 0.3s filter;
      cursor: pointer;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
}
.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  > a {
    margin-right: 5px;
    color: $blue-200;
    transition: 0.3s filter;
    &:hover {
      filter: brightness(1.2);
    }
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
  border: none;
  color: $white;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9)
  }
  &:active {
    filter: brightness(0.8)
  }
  .material-icons {
    font-size: $fs-4;
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
