<script lang="ts" setup>
import { ref, watch, computed, defineAsyncComponent, provide, inject, Ref, DefineComponent } from 'vue';
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router';
import { apiGetUser } from '@/api';
import { removeSentConnect, submitConnect, acceptConnect, removeConnected } from '@/mixins/handleConnections';
import getImageUrl from '@/mixins/getImageUrl';
import { stateSymbol, orderSideUserSymbol } from '@/Symbol';

const ProfileNav = defineAsyncComponent(() => import('@/components/Index/User/ProfileNav.vue'));
const MiniDashboard = defineAsyncComponent(() => import('@/components/Index/MiniDashboard.vue'));
const AsideCard = defineAsyncComponent(() => import('@/components/Index/AsideCard.vue'));
const ConfirmModal = defineAsyncComponent(() => import('@/components/ConfirmModal.vue'));
const ConnectionsModal = defineAsyncComponent(() => import('@/components/Index/ConnectionsModal.vue'));

const route = useRoute();
const router = useRouter();
const state: Ref<State> = inject(stateSymbol)!;
const ownConnections = computed(() => state.value.user.connections);
const ownUid = computed(() => state.value.user.uid);
const isLogin = computed(() => state.value.isLogin);

const user = ref<User>();
provide(orderSideUserSymbol, user);

const getUser = async (uid: string) => {
  try {
    const { data } = await apiGetUser(uid);
    user.value = data.user;
    // updateOrderSideUser(data.user);
  } catch (err) { 
    console.dir(err);
    alert('not found');
    router.go(-1);
  }
};

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

const confirmModalEl = ref<DefineComponent>();
const showConfirmModal = () => {
  const content = 'Do you want to remove the connections ?';
  confirmModalEl.value!.showModal(content);
};

const handleRemoveConnected = () => {
  if (!user.value || !user.value.uid) return;
  removeConnected(user.value.uid);
  confirmModalEl.value!.hideModal();
};

const isConnected = computed(() => {
  const isConnected = 
    ownConnections.value?.connected?.some((connectUser) => connectUser.uid === user.value?.uid);
  return isConnected;
});
const isConnectSent = computed(() => {
  const isSentConnect =
    ownConnections.value?.sent?.some((connectUser) => connectUser.uid === user.value?.uid);
  return isSentConnect;
});
const isReceivedConnect = computed(() =>
  ownConnections.value?.received?.some((connectUser) => connectUser.uid === route.params.uid));
const isOwnProfile = computed(() => route.params.uid === ownUid.value);

const connectionsModalEl = ref<DefineComponent>();
const showConnectionsModal = () => {
  connectionsModalEl.value!.showModal();
};

watch(() => route.params.uid, (v) => {
  const inUserRoute = route.meta.othersProfile;

  if (connectionsModalEl.value?.isModalShow) {
    connectionsModalEl.value.hideModal();
  }
  
  if (inUserRoute) getUser(<string>v);
}, { immediate: true });

onBeforeRouteLeave((to, from, next) => {
  user.value = {};
  next();
});
</script>

<template>
  <div class="profile-container">
    <ConfirmModal ref="confirmModalEl" @clickYes="handleRemoveConnected" />
    <ConnectionsModal ref="connectionsModalEl" :connections="user?.connections as Connections" />
    <main class="profile-main">
      <section class="profile-header">
        <div class="profile-cover">
          <div v-if="!isOwnProfile && isLogin && !isReceivedConnect" class="profile-cover-btns">
            <button v-if="isConnected" type="button" class="connected-btn" @click="showConfirmModal">
              <span>connected</span>
              <span class="material-icons connected-btn-decoration">done</span>
            </button>
            <button v-if="!isConnected && !isConnectSent" type="button" @click="submitConnect(user?.uid!)">connect</button>
            <button v-if="isConnectSent" type="button" class="wait-for-connect-btn"
              @click="removeSentConnect(user?.uid!)">wait for connect</button>
          </div>
          <div v-if="!isOwnProfile && isLogin && isReceivedConnect" class="profile-cover-btns">
            <button type="button" class="accept-connect-btn" @click="acceptConnect(user?.uid!)">accept connect</button>
            <button type="button" class="refuse-connect-btn">refuse connect</button>
          </div>
        </div>
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
              <button class="connections-btn" type="button" @click="showConnectionsModal">
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
  display: flex;
  justify-content: end;
  align-items: end;
  height: 180px;
  background: v-bind(bgCover) no-repeat center;
  background-size: cover;
  padding: 20px 30px;
}
.profile-cover-btns {
  > button {
    @include button;
    background: rgba($blue-400, 0.9);
    color: $white;
    transition: 0.2s filter;
    &:hover {
      filter: brightness(1.2);
    }
    &:active {
      filter: brightness(0.9);
    }
  }
  .wait-for-connect-btn {
    background: rgba($gray-100, 0.6);
  }
  .accept-connect-btn {
    margin-right: 10px;
  }
  .refuse-connect-btn {
    background: rgba($red-100, 0.8);
    border: 1px solid $red-100;
  }
}
.connected-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.connected-btn-decoration {
  font-size: $fs-4;
  margin-left: 5px;
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