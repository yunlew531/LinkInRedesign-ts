import { ref, readonly, Ref } from 'vue';
import { apiGetProfile } from '@/api';

const state = ref<State>({
  isLogin: false,
  user: {},
  isOffcanvasShow: false,
});

const getProfile = async () => {
  try {
    const { data } = await apiGetProfile();
    state.value.user = data.user;
  } catch(err) {}
};

const setOffcanvasDisplay = (boolean = true) => state.value.isOffcanvasShow = boolean;
const setLogin = (boolean = true) => state.value.isLogin = boolean;
const setUserProfile = (payload: User) => state.value.user = payload;
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
};