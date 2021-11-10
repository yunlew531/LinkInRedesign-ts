<script lang="ts" setup>
import { ref, computed, inject, Ref, defineAsyncComponent, DefineComponent } from 'vue';
import { stateSymbol } from '@/Symbol';
import getImageUrl from '@/mixins/getImageUrl';
import dayjs from '@/mixins/dayjs';
import { removeConnected } from '@/mixins/handleConnections';

const ConfirmModal = defineAsyncComponent(() => import('@/components/ConfirmModal.vue'));

const state: Ref<State> = inject(stateSymbol)!;
const connections = computed(() => state.value.user.connections);

const tempRemoveConnectUid = ref<string>();
const confirmModalEl = ref<DefineComponent>();
const showConfirmModal = (connectedUid: string) => {
  tempRemoveConnectUid.value = connectedUid;
  const content = 'Do you want to remove the connections ?';
  confirmModalEl.value!.showModal(content);
};

const handleRemoveConnected = () => {
  if (!tempRemoveConnectUid.value) return;
  removeConnected(tempRemoveConnectUid.value);
  confirmModalEl.value!.hideModal();
};

const cleanTempConnectUid = () => tempRemoveConnectUid.value = '';
</script>

<template>
  <section>
    <ConfirmModal ref="confirmModalEl" @clickYes="handleRemoveConnected" @modalHide="cleanTempConnectUid" />
    <h2 class="page-title">connections<span class="connected-qty">({{ connections?.connected.length }})</span></h2>
    <ul class="connected-list">
      <li v-for="connectedUser in connections?.connected" :key="connectedUser.uid" class="connected-item">
        <router-link :to="`/@${connectedUser.uid}`" class="connected-item-link">
          <img :src="connectedUser.photo || getImageUrl('user')" :alt="connectedUser.name" class="connected-item-img">
        </router-link>
        <div class="connected-item-contents">
          <h3 class="connected-item-name">
            <router-link :to="`/@${connectedUser.uid}`">{{ connectedUser.name }}</router-link>
          </h3>
          <h4 class="recent-connections-job">{{ connectedUser.job }}</h4>
        </div>
        <div v-if="connectedUser.connected_time" class="connected-time-container">
          <button type="button" class="connected-btn" @click="showConfirmModal(connectedUser.uid)">
            <span>connected</span>
            <span class="material-icons connected-btn-decoration">done</span>
          </button>
          <span v-if="dayjs(connectedUser.connected_time * 1000).isToday()" class="connections-time">
            {{ dayjs(connectedUser.connected_time * 1000).fromNow() }}
          </span>
          <span v-else class="connections-time">
            {{ dayjs(connectedUser.connected_time * 1000).format('YYYY/MM/DD') }}
          </span>
        </div>
      </li>
    </ul>
  </section>    
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.page-title {
  text-transform: uppercase;
  font-size: $fs-4;
  color: $dark-200;
  letter-spacing:0.05rem;
  border-bottom: 1px solid #E7E7E7;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.connected-qty {
  margin-left: 5px;
}
.connected-list {
  display: flex;
  margin-right: -2%;
}
.connected-item {
  @include card;
  width: 48%;
  margin: 0 2% 20px 0;
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
  margin-bottom: 5px;
  > a {
    transition: color 0.2s;
    &:hover {
      color: rgba($blue-200, 1.3);
    }
    &:active {
      color: rgba($blue-200, 0.9);
    }
  }
}
.recent-connections-job {
  font-weight: lighter;
  font-size: $fs-6;
}
.connected-time-container {
  flex-shrink: 0;
  text-align: end;
}
.connections-time {
  font-size: $fs-6;
  color: rgba($dark-100, 0.3);
}
.connected-btn {
  @include button;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-7;
  font-weight: normal;
  color: $white;
  background: rgba($blue-400, 0.9);
  transition: 0.2s filter;
  padding: 4px 8px;
  margin-bottom: 5px;
  &:hover {
    filter: brightness(1.2);
  }
  &:active {
    filter: brightness(0.9);
  }
}
.connected-btn-decoration {
  font-size: $fs-4;
  margin-left: 5px;
}
</style>
