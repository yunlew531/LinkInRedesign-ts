<script lang="ts" setup>
import { computed, inject, Ref } from 'vue';
import getImageUrl from '@/mixins/getImageUrl';
import handleTextLength from '@/mixins/handleTextLength';

const state: Ref<State> = inject('state')!;

const user = computed(() => state.value.user);

const emits = defineEmits(['focus']);
const focusEditor = () => emits('focus');
</script>

<template>
  <aside class="aside">
    <ul>
      <li class="aside-card">
        <img :src="user?.background_cover || getImageUrl('Rectangle-aside')" alt="Rectangle"
          class="aside-bg-cover">
        <div class="aside-card-body">
          <img :src="user?.photo" alt="username" class="aside-card-user-photo">
          <h3>
            <span>{{ user?.name }}</span>
            <img src="@/assets/images/in-logo.png" alt="member level">
          </h3>
          <p>{{ user?.description }}</p>
        </div>
      </li>
      <li class="aside-card">
        <button type="button" class="write-article-btn" @click="focusEditor">write new article</button>
      </li>
      <li class="aside-card">
        <div class="aside-card-header">
          <h3>my groups</h3>
          <button type="button" class="aside-edit-list-btn">edit list</button>
        </div>
        <ul class="groups-list">
          <li class="group-card">
            <router-link to="/feed">
              <img src="@/assets/images/Group-1.png" alt="Moscow State Linguistical University">
              <h3>Moscow State Linguistical University</h3>
            </router-link>
          </li>
          <li class="group-card">
            <router-link to="/feed">
              <img src="@/assets/images/Group-2.png" alt="Digital freelancers group">
              <h3>Digital freelancers group</h3>
            </router-link>
          </li>
          <li class="group-card">
            <router-link to="/feed">
              <img src="@/assets/images/Group-3.png" alt="Interaction design association">
              <h3>Interaction design association</h3>
            </router-link>
          </li>
        </ul>
        <button type="button" class="show-all-btn">Show all (8)</button>
      </li>
      <li class="aside-card">
        <div class="aside-card-header">
          <h3>Followed hashtags</h3>
        </div>
        <ul class="hashtags-list">
          <li class="hashtag-item">#work</li>
          <li class="hashtag-item">#workgrg</li>
          <li class="hashtag-item">#wr</li>
          <li class="hashtag-item">#work</li>
          <li class="hashtag-item">#woggrk</li>
          <li class="hashtag-item">#work r</li>
        </ul>
      </li>
      <li class="aside-card">
        <div class="aside-card-header">
          <h3>Trending articles</h3>
        </div>
        <ul class="trending-article-list">
          <li class="trending-article-card">
            <router-link to="/feed">
              <img src="@/assets/images/Photo.png" alt="How I make cool designs?"
                class="trending-article-card-img">
              <div class="trending-article-content">
                <h3>How I make cool designs?</h3>
                <span class="trending-article-card-viewers">1,305 viewers</span>
              </div>
            </router-link>
          </li>
          <li class="trending-article-card">
            <router-link to="/feed">
              <img src="@/assets/images/Photo-1.png" alt="Advices for young HR-manage"
                class="trending-article-card-img">
              <div class="trending-article-content">
                <h3>{{ handleTextLength('Advices for young HR-manage') }}</h3>
                <span class="trending-article-card-viewers">760 viewers</span>
              </div>
            </router-link>
          </li>
          <li class="trending-article-card">
            <router-link to="/feed">
              <img src="@/assets/images/Photo-2.png" alt="A little about usability testing"
                class="trending-article-card-img">
              <div class="trending-article-content">
                <h3>A little about usability testing</h3>
                <span class="trending-article-card-viewers">610 viewers</span>
              </div>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.aside {
  flex-shrink: 0;
  width: 290px;
}
.aside-card {
  @include feed-card;
  overflow: hidden;
  margin-bottom: 20px;
  &:first-of-type {
    padding: 0;
  }
}
.aside-bg-cover {
  height: 120px;
  width: 100%;
}
.aside-card-header {
  font-size: $fs-6;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  padding-bottom: 20px;
  border-bottom: 1px solid $white-100;
}
.write-article-btn {
  @include button;
  width: 100%;
  color: $white;
  background: $blue-200;
  padding: 10px;
  &:hover {
    color: $blue-200;
    background: $white;
  }
  &:active {
    filter: brightness(0.95);
  }
}
.aside-edit-list-btn, .show-all-btn {
  color: $blue-200;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  font-weight: bold;
  background: transparent;
  transition: transform 0.2s, filter 0.2s;
  &:hover {
    transform: translateX(5px);
  }
  &:active {
    filter: brightness(0.6);
  }
}
.aside-card-body {
  text-align: center;
  padding: 0 30px 25px;
  > h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    > img {
      margin: 0 5px 2px;
    }
  }
  > p {
    white-space: pre-wrap;
    font-size: $fs-6;
    font-weight: lighter;
    line-height: 1.3;
  }
}
.aside-card-user-photo {
  margin: auto;
  width: 100px;
  height: 100px;
  border: 5px solid $white;
  background: $white;
  border-radius: 50%;
  transform: translateY(-50%);
  margin-bottom: -34px;
}
.groups-list {
  padding: 20px 0 25px;
  margin-bottom: -10px;
}
.group-card {
  margin-bottom: 10px;
  > a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    font-size: $fs-6;
    line-height: 1.2;
    background: $white;
    border: 1px solid $white-100;
    border-radius: 6px;
    box-shadow: 1px 1px 10px rgba($blue-400, 0.05);
    padding: 15px;
    transition: box-shadow 0.2s;
    > img {
      width: 52px;
      height: 52px;
      margin-right: 15px;
    }
    &:hover {
      box-shadow: 5px 5px 30px rgba($blue-400, 0.15);
    }
    &:active {
      box-shadow: 1px 1px 10px rgba($blue-400, 0.03);
    }
  }
}
.hashtags-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -10px -10px 0;
}
.hashtag-item {
  background: $blue-100;
  border-radius: 4px;
  cursor: pointer;
  padding: 7px 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
}
.trending-article-list {
  margin-bottom: -15px;
}
.trending-article-card {
  margin: 15px 0;
  > a {
    display: flex;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      transform: translateX(3px);
    }
  }
}
.trending-article-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.trending-article-card-img {
  width: 80px;
  height: 52px;
  margin-right: 15px;
}
.trending-article-card-viewers {
  font-size: $fs-6;
  font-weight: lighter;
  margin-top: 5px;
}
</style>