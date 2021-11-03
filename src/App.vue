<script lang="ts" setup>
import { provide } from 'vue';
import store from '@/composition/store';
import { stateSymbol } from '@/Symbol';

const { state } = store;
provide(stateSymbol, state);
</script>

<template>
  <router-view />
</template>
