import { createRouter, createWebHashHistory, NavigationGuardNext, RouteLocationNormalized,
 } from 'vue-router';
import authReq from '@/api/auth_req';
import { apiCheckLogin } from '@/api';
import store from '@/composition/store';
import Index from '@/views/Index.vue';

const { state } = store,
  { setLogin, updateUserProfile } = store;

const history = createWebHashHistory('/LinkInRedesignTypeScript/');
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/profile',
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/Index/Profile.vue'),
        meta: {
          requiresAuth: true,
          ownProfile: true,
        },
        children: [
          {
            path: '',
            name: 'ProfileIndex',
            component: () => import('@/views/Index/Profile/Index.vue'),
          },
          {
            path: 'interests',
            name: 'ProfileInterests',
            component: () => import('@/views/Index/Profile/ProfileInterests.vue'),
          },
          {
            path: 'articles',
            name: 'ProfileArticles',
            component: () => import('@/views/Index/Profile/ProfileArticles.vue'),
          }
        ],
      },
      {
        path: '@:uid',
        name: 'User',
        redirect: (to: RouteLocationNormalized) => `/@${to.params.uid}/profile`,
        component: () => import('@/views/Index/User.vue'),
        meta: {
          othersProfile: true,
        },
        children: [
          {
            path: 'profile',
            name: 'UserProfileIndex',
            component: () => import('@/views/Index/User/Index.vue'),
          },
          {
            path: 'profile/interests',
            name: 'UserProfileInterests',
            component: () => import('@/views/Index/User/ProfileInterests.vue'),
          },
          {
            path: 'profile/articles',
            name: 'UserProfileArticles',
            component: () => import('@/views/Index/User/ProfileArticles.vue'),
          }
        ],
      },
      {
        path: 'feed',
        name: 'Feed',
        component: () => import('@/views/Index/Feed.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'network',
        name: 'Network',
        component: () => import('@/views/Index/Network.vue'),
        redirect: '/network/connections',
        meta: { requiresAuth: true },
        children: [
          {
            path: 'connections',
            name: 'Connections',
            component:  () => import('@/views/Index/Network/Connections.vue'),
          },
          {
            path: 'invitations',
            name: 'Invitations',
            component:  () => import('@/views/Index/Network/Invitations.vue'),
          },
          {
            path: 'articles',
            name: 'Articles',
            component:  () => import('@/views/Index/Network/Articles.vue'),
          },
        ],
      },
      {
        path: 'jobs',
        name: 'Jobs',
        component: () => import('@/views/Index/Jobs.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'notices',
        name: 'Notices',
        component: () => import('@/views/Index/Notices.vue'),
        meta: { requiresAuth: true },
        children: [
          {
            path: '',
            name: 'NoticeIndex',
            component: () => import('@/views/Index/Notices/Index.vue'),
          }
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized,
      next: NavigationGuardNext) => {
        if (state.value.isLogin)
          next({ path: '/' });
        else {
          try {
            await checkLogin();
            next({ path: '/' });
          } catch (err) {
            next();
          }
        }
      },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from) {
    const isUidChange = to.params.uid !== from.params.uid;
    const isChangePageInPathProfile = to.meta.ownProfile && from.meta.ownProfile;
    const isChangePageInPathUserProfile = to.meta.othersProfile && from.meta.othersProfile;
    
    if (isUidChange) return { top: 0 };
    else if (isChangePageInPathProfile || isChangePageInPathUserProfile) {}
    else return { top: 0 };
  },
 });

const checkLogin = () => new Promise<void>(async (resolve, reject) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)LinkInRe\s*=\s*([^;]*).*$)|^.*$/, '$1');
  (authReq.defaults.headers as any).common.Authorization = `${token}`;
  
  try {
    const { data } = await apiCheckLogin();
    const { uid } = data;

    updateUserProfile({ uid });
    setLogin();
    resolve();
  } catch (err: any) {
    if (!err.response) alert('??????????????????');
    setLogin(false);
    reject();
  }
});

router.beforeEach(async (to, from, next) => {
  if (state.value.isLogin) next();
  else if (to.meta.requiresAuth) {
    try {
      await checkLogin();
      setLogin();
      next();
    } catch (err) {
      setLogin(false);
      next({ path: '/login' });
    }
  } else {
    try {
      await checkLogin();
      setLogin();
      next();
    } catch (err) {
      setLogin(false);
      next();
    }
  }
});

export default router;