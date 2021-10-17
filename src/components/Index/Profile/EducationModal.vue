<script lang="ts">

</script>

<template>
  <div class="education-modal-container"></div>
</template>

<style lang="scss">
@import '@/assets/styleSheets/variables';

.education.modal-container {
  visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba($dark-100, 0.5);
  transition: visibility 0.2s, opacity 0.2s;
  &.show {
    visibility: visible;
    opacity: 1;
  }
}
</style>
