import { apiRemoveSentConnect, apiSentConnect, apiAcceptConnect, apiRemoveConnected,
  apiRefuseConnect
} from '@/api';
import store from '@/composition/store';

const { updateUserProfile } = store;

export const submitConnect = async (connectUid: string) => {
  try {
    const { data } = await apiSentConnect(connectUid!);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};

export const removeSentConnect = async (connectUid: string) => {
  try {
    const { data } = await apiRemoveSentConnect(connectUid!);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};

export const acceptConnect = async (connectUid: string) => {
  try {
    const { data } = await apiAcceptConnect(connectUid);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};

export const removeConnected = async (connectUid: string) => {  
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await apiRemoveConnected(connectUid);
      const { connections } = data;
      updateUserProfile({ connections });
      resolve(connections);
    } catch (err) { reject(err); }
  });
};

export const refuseConnect = async (connectUid: string) => {
  try {
    const { data } = await apiRefuseConnect(connectUid);
    console.log('data log => ', data);
    const { connections } = data;
    updateUserProfile({ connections });
  } catch (err) { console.dir(err); }
};
