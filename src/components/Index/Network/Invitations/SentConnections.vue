<script lang="ts" setup>
import { inject, computed, Ref } from 'vue';
import getImageUrl from '@/mixins/getImageUrl';
import { stateSymbol } from '@/Symbol';
import dayjs from '@/mixins/dayjs';
import handleUser from '@/composition/handleUser';

const { removeSentConnect } = handleUser();

const state: Ref<State> = inject(stateSymbol)!;

const connections = computed(() => state.value.user.connections);
</script>

<template>
  <div data-name="sent-connections">
    <div style="height: 1px; margin-bottom: -1px;"></div>
    <div class="divide">
      <span class="divide-text">
        you have <span class="emphasize">{{ connections?.sent.length || 0 }} request wait for reply</span>
      </span>
    </div>
    <ul v-if="connections?.sent.length">
      <li v-for="user in connections.sent" :key="user.uid" class="sent-card">
        <router-link :to="`/@${user.uid}`" class="sent-card-img-link">
          <img :src="user.photo || getImageUrl('user')" :alt="user.name" class="sent-card-img">
        </router-link>
        <div class="sent-card-contents">
          <h3 class="sent-card-name">
            <router-link :to="`/@${user.uid}`">{{ user.name }}</router-link></h3>
          <h4 class="sent-card-profession">{{ user.job }}</h4>
          <button type="button" class="sent-card-connections-qty">{{ user.connections_qty }} connections</button>
        </div>
        <div class="sent-card-content">
          <h3>YOUR MESSAGE</h3>
          <p>{{ user.content || 'empty' }}</p>
        </div>
        <div class="btn-container">
          <button type="button" class="cancel-sent-connetion-btn" @click="removeSentConnect(user.uid)">cancel</button>
          <span class="sent-card-time">
              {{ user.timestamp ? dayjs(user.timestamp * 1000).format('YYYY/MM/DD HH:mm:ss') : '' }}
          </span>
        </div>
      </li>
    </ul>
    <div v-else class="empty-sent">
      <p>empty</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

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
.sent-card {
  @include card;
  &:last-child {
    margin-bottom: 0;
  }
}
.sent-card-contents {
  flex-shrink: 0;
  width: 135px;
}
.sent-card-img-link {
  flex-shrink: 0;
  display: block;
  margin-right: 15px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
}
.sent-card-img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.sent-card-name, .sent-card-profession {
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
.sent-card-profession, .sent-card-connections-qty {
  font-weight: lighter;
  font-size: $fs-6;
}
.sent-card-connections-qty {
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
.sent-card-content {
  flex-grow: 1;
  border-left: 2px solid $blue-400;
  line-height: 1.5;
  font-size: $fs-6;
  font-weight: lighter;
  padding-left: 15px;
  margin: 0 50px;
  > p {
    color: rgba($dark-100, 0.6);
  }
}
.sent-card-time {
  font-size: $fs-6;
  text-align: end;
  display: block;
  color: rgba($dark-100, 0.6);
  margin-top: 10px;
}
.btn-container {
  text-align: end
}
.cancel-sent-connetion-btn {
  @include button;
  width: inherit;
  color: $white;
  background: $blue-200;
  transition: filter 0.2s;
  padding: 10px 20px;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    filter: brightness(0.9);
  }
}
.empty-sent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 101px;
}
</style>