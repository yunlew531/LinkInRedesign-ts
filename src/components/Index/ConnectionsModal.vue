<script lang="ts" setup>
import { PropType, ref, inject, computed, Ref, defineAsyncComponent, DefineComponent } from 'vue';
import getImageUrl from '@/mixins/getImageUrl';
import handleUser from '@/composition/handleUser';
import { stateSymbol } from '@/Symbol';

const ConfirmModal = defineAsyncComponent(() => import('@/components/ConfirmModal.vue'));

defineProps({
  connections: {
    type: Object as PropType<Connections>,
    default: () => ({}),
    required: true,
  },
  consoleBtn: Boolean,
});

const { removeConnected } = handleUser();
const state: Ref<State> = inject(stateSymbol)!;
const ownUid = computed(() => state.value.user.uid);
const ownConnected = computed(() => state.value.user.connections?.connected);

const checkIsFriend = (targetUid: string) =>
  ownConnected.value?.some((connectUser) => connectUser.uid === targetUid);

const isModalShow = ref(false);
const showModal = () => isModalShow.value = true;
const hideModal = () => isModalShow.value = false;

const confirmModalEl = ref<DefineComponent>();
const tempFriendUid = ref<string>();
const showConfirmModal = (friend: ConnectUser) => {
  tempFriendUid.value = friend.uid;
  const content = `Do you want to remove the connections with ${friend.name} ?`;
  confirmModalEl.value!.showModal(content);
};

const handleRemoveConnected = async () => {
  if (!tempFriendUid.value) return;

  try {
    await removeConnected(tempFriendUid.value);
    confirmModalEl.value!.hideModal();
  } catch (err) { console.dir(err); }
};

defineExpose({
  isModalShow,
  showModal,
  hideModal,
});
</script>

<template>
  <div class="modal-container" :class="{ show: isModalShow }"
    @click.self="hideModal">
    <ConfirmModal ref="confirmModalEl" @clickYes="handleRemoveConnected" />
    <div data-simplebar class="modal">
      <div class="modal-header">
        <h3 class="modal-title">
          <span>connections</span>
          <span>({{ connections.connected?.length || 0 }})</span>
        </h3>
        <router-link v-if="consoleBtn" to="/network/connections">go console</router-link>
      </div>
      <ul class="connections-list">
        <li v-for="connection in connections.connected" :key="connection.uid" 
          class="connections-item">
          <router-link :to="`/@${connection.uid}`" class="connected-item-link">
            <img :src="connection.photo || getImageUrl('user')" :alt="connection.name" class="connected-item-img">
          </router-link>
          <div class="connected-item-contents">
            <h3 class="connected-item-name">
              <router-link :to="`/@${connection.uid}`">{{ connection.name }}</router-link>
              <span v-if="connection.uid === ownUid">you</span>
            </h3>
            <h4 class="recent-connections-job">{{ connection.job }}</h4>
          </div>
          <button v-if="checkIsFriend(connection.uid)" @click="showConfirmModal(connection)"
            type="button" class="friend-btn">
            <span>friend</span>
            <span class="material-icons">done</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';

.modal-container {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: visibility 0.3s, opacity 0.3s;
  &.show {
    visibility: visible;
    opacity: 1;
  }
}
.modal {
  width: 500px;
  height: 800px;
  border-radius: 10px;
  background: $white;
  box-shadow: 10px 10px 10px rgba($dark-100, 0.1);
  border: 1px solid rgba($blue-400, 0.1);
  padding: 30px;
}
.modal-header {
  display: flex;
  border-bottom: 1px solid $gray-300;
  padding-bottom: 10px;
  margin-bottom: 10px;
  > a {
    text-transform: uppercase;
    color: $blue-200;
    font-size: $fs-6;
    transition: 0.3s transform;
    &:hover {
      transform: translateX(5px);
    }
  }
}
.modal-title {
  text-transform: uppercase;
  font-size: $fs-5;
  margin-right: auto;
  > span {
    &:first-child {
    display: inline-block;
    margin-right: 5px;
    }
  }
}
.connections-list {
  margin-bottom: -10px;
}
.connections-item {
  display: flex;
  align-items: center;
  border: 1px solid rgba($blue-400, 0.15);
  box-shadow: 20px 20px 20px rgba($blue-400, 0.05);
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.connected-item-link {
  flex-shrink: 0;
  display: block;
  margin-right: 15px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
}
.connected-item-contents {
  flex-grow: 1;
}
.connected-item-img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.connected-item-name {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  > a {
    transition: color 0.2s;
    margin-right: 5px;
    &:hover {
      color: rgba($blue-200, 1.3);
    }
    &:active {
      color: rgba($blue-200, 0.9);
    }
  }
  > span {
    text-transform: uppercase;
    font-weight: normal;
    font-size: $fs-7;
    color: $gray-400;
  }
}
.recent-connections-job {
  font-weight: lighter;
  font-size: $fs-6;
}
.friend-btn {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: $white;
  font-size: $fs-6;
  background: $blue-400;
  border-radius: 3px;
  border: 1px solid $blue-200;
  cursor: pointer;
  padding: 5px 10px;
  transition: filter 0.3s;
  :first-child {
    display: inline-block;
    margin-right: 5px;
  }
  .material-icons {
    font-size: $fs-6;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.9);
  }
}
</style>
