<script lang="ts" setup>
import { computed, inject, Ref } from 'vue';
import getImageUrl from '@/mixins/getImageUrl';
import { stateSymbol } from '@/Symbol';
import dayjs from '@/mixins/dayjs';
import connectComposition from '@/composition/connections';

const state: Ref<State> = inject(stateSymbol)!;

const { acceptConnect, refuseConnect } = connectComposition;
// const receivedUsers = ref([
//   {
//     name: 'Brandon Wilson',
//     uid: 'regrg',
//     content: 'Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?',
//     profession: 'Senior UX designer',
//     connections_qty: 30,
//     img: 'feed-user-3',
//   },
//   {
//     name: 'Theresa Steward',
//     uid: 'ergergr',
//     content: '',
//     profession: 'Senior UX designer',
//     connections_qty: 5,
//     img: 'feed-user-1',
//   },
// ]);

const connections = computed(() => state.value.user.connections);
</script>

<template>
  <div data-name="received-connections">
    <div style="height: 1px; margin-bottom: -1px;"></div>
    <div class="divide">
      <span class="divide-text">
        you have <span class="emphasize">{{ connections?.received.length || 0 }} new connections</span>
      </span>
    </div>
    <ul v-if="connections?.received.length">
      <li v-for="user in connections?.received" :key="user.uid" class="received-card">
        <router-link :to="`/@${user.uid}`" class="received-card-img-link">
          <img :src="user.photo || getImageUrl('user')" :alt="user.name" class="received-card-img">
        </router-link>
        <div class="received-card-contents">
          <h3 class="received-card-name">
            <router-link :to="`/@${user.uid}`">{{ user.name }}</router-link>
          </h3>
          <h4 class="received-card-profession">{{ user.job }}</h4>
          <button type="button" class="received-card-connections-qty">
            {{ user.connections_qty }} connections
          </button>
        </div>
        <div class="received-card-content">
          <h3>YOUR MESSAGE</h3>
          <p>{{ user.content || 'empty' }}</p>
        </div>
        <div>
          <button type="button" class="received-card-accept-btn" @click="acceptConnect(user.uid)">accept</button>
          <button type="button" class="received-card-decline-btn" @click="refuseConnect(user.uid)">decline</button>
          <span class="received-card-time">
            {{ user.timestamp ? dayjs(user.timestamp * 1000).format('YYYY/MM/DD HH:mm:ss') : '' }}
          </span>
        </div>
      </li>
    </ul>
    <div v-else class="empty-received">
      <p>empty</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

@mixin card {
  display: flex;
  align-items: center;
  background: $white;
  border-radius: 4px;
  padding: 20px 30px;
  margin-bottom: 10px;
}

.divide {
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #E7E7E7;
  text-transform: uppercase;
  font-size: $fs-6;
  font-weight: bold;
  position: relative;
  margin: 30px 0;
  .emphasize {
    color: $blue-200
  }
}
.divide-text {
  display: block;
  background: $white-200;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.received-card {
  @include card;
  &:last-child {
    margin-bottom: 0;
  }
}
.received-card-contents {
  flex: 1 0;
  width: 135px;
}
.received-card-img-link {
  flex-shrink: 0;
  display: block;
  margin-right: 15px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
}
.received-card-img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.received-card-name, .received-card-profession {
  margin-bottom: 5px;
}
.received-card-name {
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
.received-card-profession, .received-card-connections-qty {
  font-weight: lighter;
  font-size: $fs-6;
}
.received-card-connections-qty {
  color: $blue-400;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  &:hover {
    filter: brightness(1.3);
  }
  &:active {
    filter: brightness(0.9);
  }
}
.received-card-content {
  flex-grow: 1;
  border-left: 2px solid $blue-400;
  line-height: 1.5;
  font-size: $fs-6;
  font-weight: lighter;
  color: rgba($dark-100, 0.6);
  padding-left: 15px;
  margin: 0 50px;
}
.received-card-time {
  font-size: $fs-6;
  text-align: end;
  display: block;
  color: rgba($dark-100, 0.6);
  margin-top: 10px;
}
.received-card-accept-btn, .received-card-decline-btn {
  @include button;
  width: inherit;
  padding: 10px 20px;
  transition: filter 0.2s;
}
.received-card-accept-btn {
  color: $white;
  background: $blue-400;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    filter: brightness(0.9);
  }
}
.received-card-decline-btn {
  color: #B7B7B7;
  border: 1px solid $gray-300;
  background: transparent;
  margin-left: 15px;
  transition: background-color 0.2s, filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    background: $white;
  }
}
.empty-received {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 101px;
}
</style>