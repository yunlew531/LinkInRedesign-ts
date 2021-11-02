import { readonly, ref } from 'vue';
import { apiRemoveSentConnect, apiSentConnect, apiAcceptConnect } from '@/api';
import store from '@/composition/store';

const user = ref<User>();

const { updateUserProfile } = store;

const submitConnect = async (connectUid: string) => {
  try {
    const { data } = await apiSentConnect(connectUid!);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};

const removeSentConnect = async (connectUid: string) => {
  try {
    const { data } = await apiRemoveSentConnect(connectUid!);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};

const acceptConnect = async (connectUid: string) => {
  try {
    const { data } = await apiAcceptConnect(connectUid);
    console.log('data log => ', data);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};

const updateOrderSideUser = (userProfile: User) => user.value = userProfile;

export default {
  user: readonly(user),
  removeSentConnect,
  submitConnect,
  updateOrderSideUser,
  acceptConnect,
};
