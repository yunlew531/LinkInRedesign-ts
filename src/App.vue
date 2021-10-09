<script lang="ts" setup>
import { provide } from 'vue';
import store from '@/composition/store';

const { state } = store;
provide('state', state);
</script>

<template>
  <router-view />
</template>