<script lang="ts" setup>
import { ref, watch, computed, defineAsyncComponent, provide } from 'vue';
import { useRoute } from 'vue-router';
import { apiGetUser } from '@/api';
import getImageUrl from '@/mixins/getImageUrl';
import { userSymbol } from '@/Symbol';

const ProfileNav = defineAsyncComponent(() => import('@/components/Index/Profile/ProfileNav.vue'));
const MiniDashboard = defineAsyncComponent(() => import('@/components/Index/MiniDashboard.vue'));
const AsideCard = defineAsyncComponent(() => import('../../components/Index/AsideCard.vue'));

const route = useRoute();

const user = ref<User>();
provide(userSymbol, user);

const getUser = async (uid: string) => {
  try {
    const { data } = await apiGetUser(uid);
    user.value = data.user;
  } catch (err) { console.dir(err); }
};

watch(() => route.params.uid, (v) => {
  const inUserRoute = route.matched.some((match) => match.name === 'User');
  if (inUserRoute) getUser(<string>v);
}, { immediate: true });


const bgCover = computed(() =>
  `url(${user.value?.background_cover || getImageUrl('Rectangle 3')})`);

const visitors = ref([
  {
    name: 'Darlene Black',
    fileName: 'visitor-1',
    description: 'HR-manager, 10 000 connec...',
  },
  {
    name: 'Theresa Steward',
    fileName: 'visitor-2',
    description: 'iOS developer',
  },
  {
    name: 'Brandon Wilson',
    fileName: 'visitor-3',
    description: 'Senior UX designer',
  },
  {
    name: 'Kyle Fisher',
    fileName: 'visitor-4',
    description: 'Product designer at Com...',
  },
  {
    name: 'Audrey Alexander',
    fileName: 'visitor-5',
    description: 'Team lead at Google',
  },
]);

const courses = ref([
  {
    title: 'UX Foundations: Prototyping',
    fileName: 'courses-may-like-1',
    viewers: '27959',
  },
  {
    title: 'Designing with Adobe XD and pro',
    fileName: 'courses-may-like-2',
    viewers: '9122',
  },
  {
    title: 'UX Foundations: Styles and GUIs',
    fileName: 'courses-may-like-3',
    viewers: '13858',
  },
]);
</script>

<template>
  <div class="profile-container">
    <main class="profile-main">
      <section class="profile-header">
        <div class="profile-cover"></div>
        <div class="profile-header-content">
          <div class="user-photo">
            <img :src="user?.photo || getImageUrl('user')" alt="user photo">
          </div>
          <div class="user-content-container">
            <p class="user-content">
              <span class="user-name-group">
                <span class="user-name">{{ user?.name }}</span>
                <img class="user-name-logo" src="@/assets/images/in-logo.png" alt="LinkIned logo">
              </span>
              <router-link :to="`/${user?.city}`"
                class="user-position-group">
                <img src="@/assets/images/Vector.png" alt="position mark">
                <span>{{ user?.city }}</span>
              </router-link>
            </p>
            <p class="user-description">
              {{ user?.description || 'This user did not write anything.' }}</p>
            <div class="btns-group">
              <button class="contact-btn" type="button">Contact info</button>
              <button class="connections-btn" type="button">
                {{ user?.connections_qty || 0 }} connections</button>
            </div>
          </div>
        </div>
      </section>
      <ProfileNav />
      <router-view />
    </main>
    <aside class="aside">
      <ul>
        <li class="aside-card">
          <MiniDashboard :profileViews="user?.profile_views" />
        </li>
        <li class="aside-card">
          <AsideCard title="visitors" :headLink="{ title: 'view all', path: '/' }">
            <template v-slot:card-body>
              <ul class="visitor-cards-list">
                <li v-for="visitor in visitors" :key="visitor.fileName" class="visitor-card">
                  <router-link to="/">
                    <img :src="getImageUrl(visitor.fileName)" :alt="visitor.name" class="visitor-img">
                    <p>{{ visitor.description }}</p>
                  </router-link>
                </li>
              </ul>
            </template>
          </AsideCard>
        </li>
        <li class="aside-card">
          <AsideCard title="You may like these courses">
            <template v-slot:card-body>
              <ul class="course-cards-list">
                <li v-for="course in courses" :key="course.fileName" class="course-card">
                  <router-link to="/" class="course-link">
                    <div class="course-img-group">
                      <img src="@/assets/images/play.png" alt="play video" class="play-video-btn">
                      <img :src="getImageUrl(course.fileName)" :alt="course.title" class="course-img">
                    </div>
                    <div>
                      <h2 class="course-title">{{ course.title }}</h2>
                      <span class="course-viewers">{{ course.viewers }} viewers</span>
                    </div>
                  </router-link>
                </li>
              </ul>
            </template>
          </AsideCard>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.profile-container {
  display: flex;
  position: relative;
}
.profile-main {
  flex-grow: 1;
  margin-right: 40px;
}
.profile-header {
  flex-grow: 1;
  border-radius: 4px;
  overflow: hidden;
}
.profile-header-content {
  display: flex;
  background: $white;
  padding: 25px 45px 35px;
}
.profile-cover {
  height: 180px;
  background: v-bind(bgCover) no-repeat center;
  background-size: cover;
  padding: 20px 30px;
}
.upload-photo-btn {
  background: $blue-100;
  padding: 10px;
  border: none;
  box-shadow: 0px 10px 30px rgba(113, 123, 133, 0.05);
  border-radius: 4px;
  cursor: pointer;
  animation: heart 2s infinite;
  position: absolute;
  right: 10px;
  bottom: 0;
}
@keyframes heart {
  0%   {
    transform: translateY(0px);
  }
  50%  {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.user-photo {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  transform: translateY(-50px);
  margin: 0 30px -50px 0;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  > img {
    height: 100%;
    border: 10px solid $white;
    background: $white;
    border-radius: 100%;
    transition: border-radius 0.2s, border-width 0.2s;
  }
  &:hover {
    > .user-photo-hover {
      opacity: 0.5;
      border-radius: 5px;
    }
    > img {
      border-radius: 5px;
      border: 0px solid $white;
    }
  }
}
.upload-photo-input {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px dashed blue;
  z-index: 1;
  opacity: 0;
}
.user-photo-hover {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 100%;
  top: 0;
  left: 0;
  background: $dark-100;
  transition: opacity 0.2s, border-radius 0.2s;
  > img {
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
.user-content-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.user-content {
  display: flex;
  align-items: center;
}
.user-name-group {
  display: flex;
  align-items: center;
  margin: 0 auto 0 0;
  font-size: $fs-4;
  font-weight: bold;
}
.user-name {
  margin-right: 6px;
}
.user-name-logo {
  width: 16px;
  height: 16px; 
}
.user-position-group {
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: $blue-300;
  filter: brightness(1);
  transition: filter 0.2s;
  > img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  > span {
    font-size: $fs-6;
  }
  &:hover {
    filter: brightness(1.3);
  }
}
.user-description {
  margin: 10px 0 auto;
  line-height: 1.5;
  white-space: pre-wrap;
}
.btns-group {
  margin-top: 20px;
  display: flex;
}
.contact-btn, .connections-btn {
  @include button;
  &:active {
    filter: brightness(0.95);
  }
}
.contact-btn {
  color: $white;
  background: $blue-200;
  margin-right: 15px;
  &:hover {
    color: $blue-200;
    background: $white;
  }
}
.connections-btn {
  color: $blue-200;
  background: $white;
  &:hover {
    color: $white;
    background: $blue-200;
  }
}
.aside {
  flex-shrink: 0;
  width: 290px;
}
.dashboard-num {
  display: block;
  font-size: $fs-1;
  color: $blue-400;
  margin-top: 20px;
}
.dashboard-title {
  font-weight: normal;
  margin-top: 10px;
}
.visitor-cards-list {
  margin-bottom: -15px;
}
.visitor-card {
  > a {
    display: flex;
    align-items: center;
    margin: 15px 0;
    text-decoration: none;
    color: inherit;
    transition: color 0.2s, transform 0.2s;
    &:hover {
      color: $blue-400;
      transform: translateX(3px);
    }
  }
}
.visitor-img {
  margin-right: 15px;
}
.course-cards-list {
  margin-bottom: -15px;
}
.course-card {
  margin: 15px 0;
}
.course-link {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  &:hover {
    color: $blue-200;
    transform: translateX(3px);
    .play-video-btn {
      transform: rotate3d(0, 1, 0, 180deg) translateX(50%) translateY(-50%);
    }
  }
}
.course-title {
  margin-bottom: 5px;
}
.course-img {
  height: 100%;
  border-radius: 5px;
}
.course-viewers {
  font-size: $fs-6;
  color: rgba($dark-100, 0.5);
  font-weight: bold;
}
.course-img-group {
  min-width: 80px;
  height: 52px;
  border-radius: 5px;
  margin-right: 15px;
  position: relative;
}
.play-video-btn {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  transition: transform 1s;
}
.aside-card {
  margin-bottom: 20px;
}
</style>