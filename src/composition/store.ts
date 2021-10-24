import { ref, readonly, Ref } from 'vue';
import { apiGetProfile, apiGetArticles } from '@/api';

const state = ref<State>({
  isLogin: false,
  user: {},
  isOffcanvasShow: false,
  articles: [],
});

const getProfile = async () => {
  try {
    const { data } = await apiGetProfile();
    state.value.user = data.user;
  } catch(err) {}
};

const getArticles = async (page: number = 1) => {
  try {
    const { data } = await apiGetArticles(page);
    const { articles } = data;
    setArticles(articles);
  } catch (err) {}
};

const setOffcanvasDisplay = (boolean = true) => state.value.isOffcanvasShow = boolean;
const setLogin = (boolean = true) => state.value.isLogin = boolean;
const setUserProfile = (payload: User) => state.value.user = payload;
const setArticles = (articles: Article[]) => state.value.articles = articles;
const setArticle = (articleIdx: number, articleData: Article) =>
  state.value.articles[articleIdx] = articleData;
const updateUserProfile = (options: any) => {
  const optionsKeys = Object.keys(options);
  const optionsValues: Array<string> = Object.values(options);
  optionsKeys.forEach((key, idx) => (state.value.user as any)[key] = optionsValues[idx]);
};

export default {
  state: readonly(state) as Ref<State>,
  getProfile,
  setOffcanvasDisplay,
  setLogin,
  setUserProfile,
  updateUserProfile,
  setArticles,
  setArticle,
  getArticles,
};