<script setup>
import Editor from '@/components/Editor.vue';
</script>

<template>
  <div class="form-modal-container">
    <div class="form-modal">
      <h3 class="modal-title">experience</h3>
      <label>
        <span>experience title</span>
        <input type="text">
      </label>
      <label>
        <span>work place</span>
        <input type="text">
      </label>
      <label>
        <span>work time</span>
        <input type="text">
      </label>
      <label>
        <span class="content">content</span>
        <Editor />
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';

::v-deep(.editor) {
  cursor: text;
}
.form-modal-container {
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
}
.form-modal {
  background: $white-100;
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba($white-100, 0.3);
  padding: 20px;
  label {
    display: block;
    text-transform: uppercase;
    margin: 10px 0;
    input {
      width: 100%;
      background-color: inherit;
      font-size: $fs-5;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 8px 15px;
      margin-top: 5px;
    }
    span {
      font-size: $fs-6;
      color: $gray-100;
      letter-spacing: 0.05rem;
    }
  }
}
.modal-title {
  text-transform: uppercase;
}
.content {
  display: block;
  margin-bottom: 5px;
}
</style>