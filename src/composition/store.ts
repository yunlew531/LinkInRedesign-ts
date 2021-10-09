import { ref, readonly } from 'vue';
import { apiGetProfile } from '@/api';

const state = ref({
  isLogin: false,
  user: {} as IUser,
  isOffcanvasShow: false,
});

const getProfile = async () => {
  try {
    const { data } = await apiGetProfile();
    state.value.user = data.user;
  } catch(err) {}
};

interface IUser {
  name: string;
  phone: number;
}

const setOffcanvasDisplay = (boolean = true) => state.value.isOffcanvasShow = boolean;
const setLogin = (boolean = true) => state.value.isLogin = boolean;
const setUser = (payload: IUser) => state.value.user = payload;
const updateUserProfile = (options: any) => {
  const optionsKeys = Object.keys(options);
  const optionsValues: Array<string> = Object.values(options);
  optionsKeys.forEach((key, idx) => (state.value.user as any)[key] = optionsValues[idx]);
};

export default {
  state: readonly(state),
  getProfile,
  setOffcanvasDisplay,
  setLogin,
  setUser,
  updateUserProfile,
};