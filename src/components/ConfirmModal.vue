<script lang="ts" setup>
import { ref } from 'vue';

const emits = defineEmits(['clickYes', 'modalHide']);
const handleClickYes = () => emits('clickYes');

const isModalShow = ref(false);
const bodyContent = ref('');

const showModal = (content: string) => {
  bodyContent.value = content;
  isModalShow.value = true;
};

const hideModal = () => isModalShow.value = false;

const handleCleanContent = (event: TransitionEvent) => {
  const { propertyName } = event;
  if (propertyName !== 'visibility' || isModalShow.value) return;
  cleanContent();
  emits('modalHide');
};

const cleanContent = () => bodyContent.value = '';

defineExpose({
  showModal,
  hideModal,
});
</script>

<template>
  <div class="modal-container" :class="{ show: isModalShow }"
    @click.self="hideModal" @transitionend.self="handleCleanContent($event)">
    <div class="modal">
      <div class="modal-header">
        <h3>Confirm</h3>
      </div>
      <div class="modal-body">
        <p>{{ bodyContent }}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="accept-btn" @click="handleClickYes">yes</button>
        <button type="button" @click="hideModal">no</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.modal-container {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  transition: 0.3s opacity, 0.3s visibility;
  &.show {
    visibility: visible;
    opacity: 1;
    .modal {
      transform: translateX(-50%) translateY(0);
    }
  }
}
.modal {
  min-width: 350px;
  border-radius: 5px;
  box-shadow: 20px 20px 10px rgba($dark-100, 0.1);
  border: 1px solid rgba($dark-100, 0.1);
  position: absolute;
  left: 50%;
  top: 100px;
  background: $white;
  transform: translateX(-50%) translateY(-100%);
  transition: transform 0.3s;
}
.modal-header {
  > h3 {
    text-transform: uppercase;
  }
}
.modal-header, .modal-body {
  padding: 20px;
  border-bottom: 1px solid #E7E7E7;
}
.modal-footer {
  text-align: end;
  padding: 20px;
  > button {
    @include button;
    background: $blue-200;
    color: $white;
    transition: 0.3s filter;
    &:hover {
      filter: brightness(1.2);
    }
    &:active {
      filter: brightness(0.9);
    }
  }
  .accept-btn {
    margin-right: 10px;
  }
}
</style>
