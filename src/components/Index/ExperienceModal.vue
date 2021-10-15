<script lang="ts" setup>
import { PropType, ref, watch, computed } from 'vue';
import { apiCreateExperience, apiUpdateExperience, apiUploadExperienceImg, apiDeleteExperience
} from '@/api';
import getImageUrl from '@/mixins/getImageUrl';
import dayjs from '@/mixins/dayjs';
import Editor from '@/components/Editor.vue';
import store from '@/composition/store';

const { updateUserProfile } = store;

const props = defineProps({
  experience: {
    type: Object as PropType<Experience>,
    default: () => ({}),
  },
});

const editorEl = ref<any>(null);

const tempExperience = ref<Experience>({});
watch(() => props.experience, (value) => {
  tempExperience.value = JSON.parse(JSON.stringify(value));
  editorEl.value.setText(tempExperience.value.content);
  if (value && tempExperience.value.start_time && tempExperience.value.end_time) {
    workTime.value.workTimeStart = dayjs(tempExperience.value.start_time * 1000).format('YYYY-MM-DD');
    workTime.value.workTimeEnd = dayjs(tempExperience.value.end_time * 1000).format('YYYY-MM-DD');
  } else {
    workTime.value.workTimeStart = '';
    workTime.value.workTimeEnd = '';
  }
})

const workTime = ref({
  workTimeStart: '',
  workTimeEnd: '',
});

const today = computed(() => dayjs().format('YYYY-MM-DD'));

const isModalShow = ref(false);

const showModal = () => isModalShow.value = true;
const hideModal = () => isModalShow.value = false;

type Status = 'create' | 'update';
const status = ref<Status>('create');

const handlePost = () => {
  if (status.value === 'create') createExperience();
  else if (status.value === 'update') updateExperience();
};

const createExperience = async () => {
  const experienceData: Experience = {
    title: tempExperience.value.title,  
    start_time: Math.floor(dayjs(workTime.value.workTimeStart).valueOf() / 1000), 
    end_time: Math.floor(dayjs(workTime.value.workTimeEnd).valueOf() / 1000), 
    image_url: tempExperience.value.image_url, 
    place: tempExperience.value.place, 
    content: editorEl.value.getText(),
  };

  try {
    const { data } = await apiCreateExperience(experienceData);
    const { experience } = data;
    updateUserProfile({ experience });
    hideModal();
  } catch (err) { alert('create failed') }
};

const updateExperience = async () => {
  const { id } = tempExperience.value;
  if (!id) return;

  const experienceData: Experience = {
    title: tempExperience.value.title,  
    start_time: Math.floor(dayjs(workTime.value.workTimeStart).valueOf() / 1000), 
    end_time: Math.floor(dayjs(workTime.value.workTimeEnd).valueOf() / 1000), 
    image_url: tempExperience.value.image_url, 
    place: tempExperience.value.place, 
    content: editorEl.value.getText(),
  };

  try {
    const { data } = await apiUpdateExperience(id, experienceData);
    const { experience } = data;
    updateUserProfile({ experience });
    hideModal();
  } catch (err) { alert('update failed') }
};

const deleteExperience = async () => {
  const { id } = tempExperience.value;
  if (!id) return;

  try {
    const { data } = await apiDeleteExperience(id);
    const { experience } = data;
    updateUserProfile({ experience });
    hideModal();
  } catch (err) {
    console.dir(err);
  }
};

const emits = defineEmits(['setTempExperience']);

watch(isModalShow, (value) => {
  if (value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    emits('setTempExperience', {});
  }
});

const setStatus = (value: Status) => status.value = value;

const handleImgDisplay = () => {
  if (tempExperience.value.image_url) {
    return tempExperience.value.image_url;
  } else {
    return getImageUrl('upload_cloud');
  }
};

const uploadExpImg = async (e: Event) => {
  const file = (<HTMLInputElement>e.target).files![0];
  const formData = new FormData();
  formData.append('img-file', file);

  try {
    const { data } = await apiUploadExperienceImg(formData);
    const { imgUrl } = data;
    tempExperience.value.image_url = imgUrl;
  } catch (err) { alert('upload failed'); }
};

defineExpose({
  showModal,
  setStatus,
})
</script>

<template>
  <div class="experience-modal-container" :class="{ show: isModalShow }"
    @click.self="hideModal">
    <div class="experience-modal">
      <h3 class="modal-title">experience</h3>
      <label>
        <span>image</span>
        <div class="img-upload-group">
          <img :src="handleImgDisplay()" alt="experience">
          <input type="file" @change="uploadExpImg($event)">
        </div>
      </label>
      <label>
        <span>experience title</span>
        <input type="text" v-model="tempExperience.title">
      </label>
      <label>
        <span>work place</span>
        <input type="text"  v-model="tempExperience.place">
      </label>
      <label>
        <span>work time</span>
        <div class="time-group">
          <input type="date" v-model="workTime.workTimeStart"> - 
          <input type="date" :max="today"
            v-model="workTime.workTimeEnd">
        </div>
      </label>
      <label>
        <span class="content">content</span>
        <Editor ref="editorEl" :deleteBtn="true"
          @cancel="hideModal" @update="handlePost" @delete="deleteExperience" />
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';

::v-deep(.editor) {
  cursor: text;
}
.experience-modal-container {
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
.experience-modal {
  width: 600px;
  background: $white-100;
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba($white-100, 0.3);
  padding: 20px;
  label {
    display: block;
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
      text-transform: uppercase;
      color: $gray-100;
      letter-spacing: 0.05rem;
    }
  }
}
.modal-title {
  text-transform: uppercase;
}
.experience-modal .img-upload-group {
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  margin-top: 5px;
  > input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    opacity: 0;
  }
  > img {
    margin: 8px 15px;
    width: 54px;
  }
}
.content {
  display: block;
  margin-bottom: 5px;
}
.time-group {
  display: flex;
  align-items: center;
  margin: 0 -10px;
  input {
    margin: 0 10px;
  }
}
</style>