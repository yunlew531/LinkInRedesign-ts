<script lang="ts" setup>
import { ref, onMounted, computed, PropType } from 'vue';
import Quill from 'quill';

interface Options {
  modules?: {
    toolbar?: any[];
  };
  placeholder?: string;
}

const props = defineProps({
  options: {
    type: Object as PropType<Options>,
    default: () => ({}),
  },
  theme: {
    type: String,
    default: 'snow',
  },
  height: {
    type: String,
    default: '100px',
  },
  toolbar: {
    type: Boolean,
    default: false,
  },
  marginY: {
    type: String,
    default: '0px',
  },
  deleteBtn: {
    type: Boolean,
    default: false,
  }
});
const { options, theme, height, toolbar, marginY } = props;
const deleteBtnStyle = computed(() => props.deleteBtn ? 'inline-block' : 'none');

const editorEl = ref(null);
let quill: any = null;
onMounted(() => {
  quill = new Quill(editorEl.value, {
    theme,
    ...options,
  });
});

const emits = defineEmits(['cancel', 'update', 'delete']);

const cancelEdit = () => emits('cancel');
const update = () => emits('update');
const deleteArticle = () => emits('delete');

const getText = () => quill.getText().trim();
const setText = (text = '') => quill.setText(text);
const getContents = () => quill.getContents();
const setContents = (content: any) => quill.setContents(content);
const checkEmpty = () => !quill.getText().trim().length;

const isFocusAnimeInProgress = ref(false);
const focus = () => {
  quill.focus();
  isFocusAnimeInProgress.value = true;
};

defineExpose({
  getText,
  setText,
  getContents,
  setContents,
  focus,
  checkEmpty,
});
</script>

<template>
  <div class="editor-container">
    <div class="editor" :class="{ 'toolbar-show' : toolbar, focus: isFocusAnimeInProgress }"
      @transitionend="isFocusAnimeInProgress = false">
      <div ref="editorEl"></div>
    </div>
    <slot name="buttons">
      <div class="buttons">
        <button type="button" class="delete-btn" @click="deleteArticle">delete</button>
        <button type="button" class="cancel-edit-btn"
          @click="cancelEdit">cancel</button>
        <button type="button" class="save-btn"
          @click="update">post</button>
      </div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.editor {
  white-space: pre-wrap;
  margin: v-bind(marginY) 0;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: border-color 0.5s;
  &.toolbar-show {
    ::v-deep(.ql-toolbar.ql-snow) {
      display: block;
    }
    ::v-deep(.ql-toolbar.ql-snow + .ql-container.ql-snow) {
      border-radius: 0 0 5px 5px;
      border-top: none;
    }
    ::v-deep(.ql-toolbar.ql-snow) {
      border-radius: 5px 5px 0 0;
      border-bottom: #ccc 1px solid;
    }
  }
  &.focus {
    border: 1px solid rgb(255, 73, 73);
  }
}
::v-deep(.ql-toolbar.ql-snow + .ql-container.ql-snow) {
  border-radius: 5px;
  font-size: $fs-5;
  border-top: 1px solid #ccc;
}
::v-deep(.ql-toolbar.ql-snow) {
  display: none;
}
::v-deep(.ql-editor) {
  min-height: v-bind(height);
  flex-grow: 1;
}
.buttons {
  text-align: end;
  margin-top: 20px;
  display: flex;
}
.save-btn, .cancel-edit-btn, .delete-btn {
  @include button;
  &:active {
    filter: brightness(0.95);
  }
}
.delete-btn {
  display: v-bind(deleteBtnStyle);
  background: $red-100;
  color: $white;
  border: none;
  margin: 0 auto 0 0;
  &:hover {
    filter: brightness(1.1);
  }
}
.save-btn {
  background: $blue-200;
  color: $white;
  margin: 0 0 0 15px;
  &:hover {
    background: $white;
    color: $blue-200;
  }
}
.cancel-edit-btn {
  background: $white;
  color: $blue-200;
  margin-left: auto;
   &:hover {
    background: $blue-200;
    color: $white;
  }
}
</style>