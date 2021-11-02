<script lang="ts" setup>
import { provide } from 'vue';
import store from '@/composition/store';
import { stateSymbol } from '@/Symbol';
import ConfirmModal from '@/components/ConfirmModal.vue';

const { state } = store;
provide(stateSymbol, state);
</script>

<template>
  <ConfirmModal />
  <router-view />
</template>
