<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { apiGetUserArticles } from '@/api';
import { useRoute } from 'vue-router';

const route = useRoute();
const uid = computed(() => route.params.uid);

const articles = ref<Article[]>();

const getUserArticles = async (uid: string) => {
  try {
    const { data } = await apiGetUserArticles(uid);
    articles.value = data.articles;
  } catch (err) { console.dir(err); }
};

watch(uid, (v) => getUserArticles(<string>v), { immediate: true });
</script>

<template>
  <section class="profile-nav">
    <div class="profile-nav-container">
      <router-link :to="`/@${uid}/profile`" exact-active-class="active"
        class="profile-nav-link">Profile</router-link>
      <router-link :to="`/@${uid}/profile/interests`" exact-active-class="active"
        class="profile-nav-link">Activity & interests</router-link>
      <router-link :to="`/@${uid}/profile/articles`" exact-active-class="active"
        class="profile-nav-link">Articles
        <span class="articles-num">({{ articles?.length || 0 }})</span>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';

.profile-nav {
  margin: 35px 0 20px;
}
.profile-nav-container {
  display: flex;
  border-bottom: 1px solid #E7E7E7;
  height: 50px;
}
.profile-nav-link {
  text-align: center;
  background: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: $fs-6;
  border: 1px solid #E7E7E7;
  border-bottom: none;
  margin-right: -1px;
  margin-top: 10px;
  transition: background-color 0.2s 0.5s, margin-top 0.3s ease-in, color 0.2s 0.5s;
  &:last-of-type {
    border-radius: 0 4px 0 0;
  }
  &:first-of-type {
    border-radius: 4px 0 0 0;
  }
  &.active {
    background: $blue-200;
    margin-top: 0;
    color: $white;
    border-radius: 4px 4px 0 0;
    &:hover {
      color: $white;
    }
  }
}
.articles-num {
  margin-left: 5px;
}
</style>