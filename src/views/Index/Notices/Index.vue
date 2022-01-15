<script lang="ts" setup>
import { ref, inject, Ref, computed, watch } from 'vue';
import getImageUrl from '@/mixins/getImageUrl';
import store from '@/composition/store';
import { stateSymbol } from '@/Symbol';
import dayjs from '@/mixins/dayjs';

const { getNotice } = store;
const state: Ref<State> = inject(stateSymbol)!;

const newNotices = ref<Notice[]>([]);
const oldNotices = ref<Notice[]>([]);
watch(() => state.value.user.notices!, (v: { [key: string]: Notice }) => {
  if (v) {
    newNotices.value = []
    oldNotices.value = []
    const notices = Object.values(v);
    notices.sort((a, b) => b.timestamp - a.timestamp);
    const currentTime = Math.floor(Date.now() / 1000);
    notices.forEach((notice) => {
      const sevenDays = 7 * 60 * 60 * 24;
      if (currentTime - notice.timestamp < sevenDays) {
        newNotices.value.push(notice);
      } else {
        oldNotices.value.push(notice);
      }
    });
  }
});

getNotice();

const activeBtnsList = ref<string[]>([]);
const showBtnsList = (noticeId: string, event: Event) => {
  if(event.type === 'mouseenter') 
    activeBtnsList.value.push(noticeId);
  else if(event.type === 'mouseleave') {
    const idx = activeBtnsList.value.indexOf(noticeId);
    if(idx === -1) return;
    activeBtnsList.value.splice(idx, 1)
  }
};
</script>

<template>
  <div class="divide">
    <h3>recent</h3>
  </div>
  <ul>
    <li v-if="newNotices.length === 0" class="notice empty">
      empty
    </li>
    <li v-for="notice in newNotices" :key="notice.id" class="notice">
      <div v-if="notice.type === 'connect'">
        <span class="material-icons notice-icon">handshake</span>
        <div class="notice-content">
          <h2 class="notice-title">
              received a connect from 
              <router-link :to="`/@${notice.uid}`" class="notice-link">{{ notice.name }}</router-link>
          </h2>
          <span class="notice-time">{{ dayjs(notice.timestamp * 1000).fromNow() }}</span>
        </div>
        <div class="more-btns-group" :class="{ show: activeBtnsList.includes(notice.id) }"
          @mouseenter="showBtnsList(notice.id, $event)" @mouseleave="showBtnsList(notice.id, $event)">
          <button type="button" class="notice-more-btn">
            <img v-show="!activeBtnsList.includes(notice.id)"
              :src="getImageUrl('Other')" alt="more options in the notice">
            <img v-show="activeBtnsList.includes(notice.id)"
              :src="getImageUrl('chevron-down')" alt="more options in the notice">
          </button>
          <ul class="more-btns-list">
            <li class="more-btn-item">
              <button type="button" class="notice-delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="notice.type === 'articleLike'">
        <span class="material-icons notice-icon">thumb_up</span>
        <div class="notice-content">
          <h2 class="notice-title">
              {{ notice.name }} thumbs up your
              <router-link :to="`/article/${notice.article_id}`" class="notice-link">Article</router-link>
          </h2>
          <span class="notice-time">{{ dayjs(notice.timestamp * 1000).fromNow() }}</span>
        </div>
        <div class="more-btns-group" :class="{ show: activeBtnsList.includes(notice.id) }"
          @mouseenter="showBtnsList(notice.id, $event)" @mouseleave="showBtnsList(notice.id, $event)">
          <button type="button" class="notice-more-btn">
            <img v-show="!activeBtnsList.includes(notice.id)"
              :src="getImageUrl('Other')" alt="more options in the notice">
            <img v-show="activeBtnsList.includes(notice.id)"
              :src="getImageUrl('chevron-down')" alt="more options in the notice">
          </button>
          <ul class="more-btns-list">
            <li class="more-btn-item">
              <button type="button" class="notice-delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div><div v-if="notice.type === 'articleComment'">
        <span class="material-icons notice-icon">chat</span>
        <div class="notice-content">
          <h2 class="notice-title">
              {{ notice.name }} commented your
              <router-link :to="`/article/${notice.article_id}`" class="notice-link">Article</router-link>
          </h2>
          <span class="notice-time">{{ dayjs(notice.timestamp * 1000).fromNow() }}</span>
        </div>
        <div class="more-btns-group" :class="{ show: activeBtnsList.includes(notice.id) }"
          @mouseenter="showBtnsList(notice.id, $event)" @mouseleave="showBtnsList(notice.id, $event)">
          <button type="button" class="notice-more-btn">
            <img v-show="!activeBtnsList.includes(notice.id)"
              :src="getImageUrl('Other')" alt="more options in the notice">
            <img v-show="activeBtnsList.includes(notice.id)"
              :src="getImageUrl('chevron-down')" alt="more options in the notice">
          </button>
          <ul class="more-btns-list">
            <li class="more-btn-item">
              <button type="button" class="notice-delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
  <div class="divide">
    <h3>Earlier</h3>
  </div>
  <ul class="earlier-notices-list">
    <li v-if="oldNotices.length === 0" class="notice empty">
      empty
    </li>
    <li v-for="notice in oldNotices" :key="notice.id" class="notice">
      <div v-if="notice.type === 'connect'">
        <span class="material-icons notice-icon">handshake</span>
        <div class="notice-content">
          <h2 class="notice-title">
              received a connect from 
              <router-link :to="`/@${notice.uid}`" class="notice-link">{{ notice.name }}</router-link>
          </h2>
          <span class="notice-time">{{ dayjs(notice.timestamp * 1000).fromNow() }}</span>
        </div>
        <div class="more-btns-group" :class="{ show: activeBtnsList.includes(notice.id) }"
          @mouseenter="showBtnsList(notice.id, $event)" @mouseleave="showBtnsList(notice.id, $event)">
          <button type="button" class="notice-more-btn">
            <img v-show="!activeBtnsList.includes(notice.id)"
              :src="getImageUrl('Other')" alt="more options in the notice">
            <img v-show="activeBtnsList.includes(notice.id)"
              :src="getImageUrl('chevron-down')" alt="more options in the notice">
          </button>
          <ul class="more-btns-list">
            <li class="more-btn-item">
              <button type="button" class="notice-delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="notice.type === 'articleLike'">
        <span class="material-icons notice-icon">thumb_up</span>
        <div class="notice-content">
          <h2 class="notice-title">
              {{ notice.name }} thumbs up your
              <router-link :to="`/article/${notice.article_id}`" class="notice-link">Article</router-link>
          </h2>
          <span class="notice-time">{{ dayjs(notice.timestamp * 1000).fromNow() }}</span>
        </div>
        <div class="more-btns-group" :class="{ show: activeBtnsList.includes(notice.id) }"
          @mouseenter="showBtnsList(notice.id, $event)" @mouseleave="showBtnsList(notice.id, $event)">
          <button type="button" class="notice-more-btn">
            <img v-show="!activeBtnsList.includes(notice.id)"
              :src="getImageUrl('Other')" alt="more options in the notice">
            <img v-show="activeBtnsList.includes(notice.id)"
              :src="getImageUrl('chevron-down')" alt="more options in the notice">
          </button>
          <ul class="more-btns-list">
            <li class="more-btn-item">
              <button type="button" class="notice-delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div><div v-if="notice.type === 'articleComment'">
        <span class="material-icons notice-icon">chat</span>
        <div class="notice-content">
          <h2 class="notice-title">
              {{ notice.name }} commented your
              <router-link :to="`/article/${notice.article_id}`" class="notice-link">Article</router-link>
          </h2>
          <span class="notice-time">{{ dayjs(notice.timestamp * 1000).fromNow() }}</span>
        </div>
        <div class="more-btns-group" :class="{ show: activeBtnsList.includes(notice.id) }"
          @mouseenter="showBtnsList(notice.id, $event)" @mouseleave="showBtnsList(notice.id, $event)">
          <button type="button" class="notice-more-btn">
            <img v-show="!activeBtnsList.includes(notice.id)"
              :src="getImageUrl('Other')" alt="more options in the notice">
            <img v-show="activeBtnsList.includes(notice.id)"
              :src="getImageUrl('chevron-down')" alt="more options in the notice">
          </button>
          <ul class="more-btns-list">
            <li class="more-btn-item">
              <button type="button" class="notice-delete-btn">Delete</button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';

.divide {
  border-bottom: 1px solid $gray-300;
  position: relative;
  margin: 45px 0;
  > h3 {
    font-size: $fs-6;
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 0 40px;
    background: $white-200;
    transform: translateX(-50%) translateY(-50%);
  }
  &:first-of-type {
    margin-top: 0;
  }
}
.notice {
  align-items: center;
  padding: 20px 30px;
  background: $white;
  border-radius: 4px;
  box-shadow: 0px 20px 60px $gray-200;
  margin-bottom: 10px;
  > div {
    display:flex;
    align-items: center;
  }
  &.empty {
    text-align: center;
    color: $gray-400;
  }
}
.notice-icon {
  font-size: 30px;
  margin-right: 10px;
  color: $blue-200;
}
.notice-content {
  flex-grow: 1;
}
.notice-title {
  > button {
    font-weight: bold;
    font-size: $fs-5;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0;
    transition: color 0.2s;
    &:hover {
      color: $blue-200;
    }
  }
  margin-bottom: 5px;
}
.notice-link {
  color: $blue-200;
  &:hover {
    filter: brightness(0.8);
  }
}
.notice-time {
  font-weight: lighter;
  color: rgba($dark-100, 0.8);
  font-size: $fs-6;
}
.notice-more-btn, .notice-delete-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 10px;
  > img {
    width: 24px;
    height: 24px;
  }
}
.more-btns-group {
  position: relative;
  .more-btns-list {
    position: absolute;
    bottom: -80%;
    right: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
  }
  &.show {
    .more-btns-list {
      visibility: visible;
      opacity: 1;
    }
  }
}
.more-btn-item {
  background: $blue-200;
  transition: filter 0.2s;
  > button {
    font-weight: bold;
    color: $white;
    text-transform: uppercase;
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
}
.notice-delete-btn {
  background: transparent;
  border: none;
}
.earlier-notices-list {
  margin-bottom: -10px;
}
</style>