<script lang="ts" setup>
import { ref, watch, defineAsyncComponent, PropType } from 'vue';
import { apiUpdateEducation } from '@/api';
import DatePicker from 'vue3-persian-datetime-picker';
import store from '@/composition/store';
const Editor = defineAsyncComponent(() => import('@/components/Editor.vue'));

const { updateUserProfile } = store;

const props = defineProps({
  education: {
    type: Object as PropType<Education>,
    default: () => ({}),
  }
});

const editorOptions = ref({ placeholder: 'input education content' });

const education = ref<Education>({});
watch(() => props.education, (value) =>{
  education.value = { ...value };
}, { immediate: true });

const isEdit = ref(false);
const editEducation = () => {
  isEdit.value = true;
  editorEl.value.setText(education.value.content);
  if (education.value.time) {
    const [ startTime, graduateTime ] = education.value.time.split(' - ');
    yearPicker.value.start_time = startTime;
    yearPicker.value.graduate_time = graduateTime;
    startTimePicker.value.updateDates(startTime);
    graduateTimePicker.value.updateDates(graduateTime);
  }
};

const cancelEdit = () => {
  isEdit.value = false;
};

const yearPicker = ref({
  start_time: '2017',
  graduate_time: '2021',
});

const startTimePicker = ref<any>(null);
const graduateTimePicker = ref<any>(null);
watch([
  () => yearPicker.value.start_time,
  () => yearPicker.value.graduate_time],
  (newV, preV) => {
  if (yearPicker.value.start_time > yearPicker.value.graduate_time) {
    alert("start time can't greater than graduate time!");
    if (newV[0] !== preV[0]) {
      yearPicker.value.start_time = preV[0];
      startTimePicker.value.updateDates(preV[0]);
    } else if (newV[1] !== preV[1]) {
      yearPicker.value.graduate_time = preV[1];
      graduateTimePicker.value.updateDates(preV[1]);
    }
  } else {
    education.value.time = `${newV[0]} - ${newV[1]}`;
  }
});

const editorEl = ref();
const updateEdit = async () => {
  const { start_time, graduate_time } = yearPicker.value;
  const time = education.value.time || `${start_time} - ${graduate_time}`;
  const educationForm = {
    ...education.value,
    time,
    content: editorEl.value.getText(),
  };

  try {
    const { data } = await apiUpdateEducation(educationForm);
    const { education } = data;
    updateUserProfile({ education });
    isEdit.value = false;
  } catch (err: any) { alert(err.response.data.message); }
};
</script>

<template>
  <section class="profile-card">
    <div class="card-header">
      <h2 class="card-title education-title">Education</h2>
      <slot name="header-right">
        <button v-show="!isEdit" type="button" class="education-edit-btn" @click="editEducation">edit</button>
      </slot>
    </div>
    <div v-if="Object.keys(education).length && !isEdit" class="education-container">
      <img class="education-img" src="@/assets/images/education.png" alt="Moscow State Linguistic University">
      <div v-show="!isEdit" class="education-content">
        <h3 class="education-school">{{ education.school }}</h3>
        <h4 class="education-major">{{ education.major }}</h4>
        <p class="education-paragraph">{{ education.content }}</p>
        <p class="education-time">{{ education.time }}</p>
      </div>
    </div>
    <div v-if="!Object.keys(education).length && !isEdit" class="education-empty-notice">
      <slot name="empty-content">empty. please click edit button</slot>
    </div>
    <div v-show="isEdit" class="education-container">
      <div v-show="isEdit" class="education-content">
        <input v-model="education.school" type="text" placeholder="input school">
        <input v-model="education.major" type="text" placeholder="input major">
        <div class="education-date-picker-group">
          <DatePicker ref="startTimePicker" v-model="yearPicker.start_time" locale="en" type="year"
            format="YYYY" :showNowBtn="false" /> - 
          <DatePicker ref="graduateTimePicker" v-model="yearPicker.graduate_time" locale="en"
            type="year" format="YYYY" :showNowBtn="false" />
        </div>
        <Editor ref="editorEl" :options="editorOptions" @update="updateEdit" @cancel="cancelEdit"  />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styleSheets/variables';
@import '@/assets/styleSheets/mixins';

.profile-card {
  @include profile-card;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-title {
  text-transform: uppercase;
  font-size: $fs-4;
  font-weight: bold;
  margin: 0 10px 25px 0;
}
.education-title {
  height: 37px;
  margin-bottom: 0;
}
.education-edit-btn {
  @include button;
  text-transform: uppercase;
  background: $white;
  color: $blue-200;
  &:hover {
    background: $blue-200;
    color: $white;
  }
}
.education-container {
  display: flex;
}
@mixin form-input {
  width: 100%;
  font-size: $fs-5;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px 15px;
  margin-bottom: 10px;
}
.education-content {
  flex-grow: 1;
  > input {
    @include form-input;
  }
}
.education-date-picker-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -10px 10px;
}
.education-school, .education-major, .education-time, .education-paragraph {
  margin-bottom: 10px;
}
.education-paragraph {
  white-space: pre-wrap;
  line-height: 1.5;
}
.education-major {
  font-weight: normal;
  color: rgba($dark-100, 0.7);
  font-size: $fs-6;
}
.education-time {
  font-size: $fs-6;
  color: rgba($dark-100, 0.7)
}
.education-img {
  width: 54px;
  height: 54px;
  margin-right: 15px;
}
:deep(.vpd-main) {
  flex-grow: 1;
  height: 46px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 10px;
}
:deep(.vpd-input-group) {
  height: 100%;
  >label {
    background: rgb(65, 125, 244);
    text-align: center;
    width: 46px;
    height: 100%;
    border-radius: 5px 0 0 5px;
  }
  > input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
  }
}
.education-empty-notice {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-3;
  min-height: 100px;
}
</style>