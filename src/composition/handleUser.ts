import { readonly, ref } from 'vue';
import { apiRemoveSentConnect, apiSentConnect, apiAcceptConnect, apiRemoveConnected,
  apiRefuseConnect
} from '@/api';
import store from '@/composition/store';

export default () => {
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
      const { connections } = data;
      updateUserProfile({ connections });
    } catch (err) { console.dir(err); }
  };
  
  const removeConnected = async (connectUid: string) => {  
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await apiRemoveConnected(connectUid);
        const { connections } = data;
        updateUserProfile({ connections });
        resolve(connections);
      } catch (err) { reject(err); }
    });
  };
  
  const refuseConnect = async (connectUid: string) => {
    try {
      const { data } = await apiRefuseConnect(connectUid);
      console.log('data log => ', data);
      const { connections } = data;
      updateUserProfile({ connections });
    } catch (err) { console.dir(err); }
  };
  
  const updateOrderSideUser = (userProfile: User = {}) => user.value = userProfile;
  
  return {
    user: readonly(user),
    removeSentConnect,
    submitConnect,
    updateOrderSideUser,
    acceptConnect,
    removeConnected,
    refuseConnect,
  };
}
