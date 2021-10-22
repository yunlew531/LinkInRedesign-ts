<script lang="ts" setup>
import { ref, defineAsyncComponent, inject, Ref } from 'vue';
import dayjs from '@/mixins/dayjs';
import getImageUrl from '@/mixins/getImageUrl';
import { userSymbol } from '@/Symbol';

const ProjectModal = defineAsyncComponent(() => import('../../../components/Index/ProjectModal.vue'));
const ExperienceModal = defineAsyncComponent(() => import('@/components/Index/Profile/ExperienceModal.vue'));
const Education = defineAsyncComponent(() => import('../../../components/Index/Profile/Education.vue'));

const user: Ref<User> = inject(userSymbol)!;

const skillsList = ref([
  {
    title: 'User experience (UX)',
    users: [
      { fileName: 'user-experience-1' },
      { fileName: 'user-experience-2' },
      { fileName: 'user-experience-3' },
      { fileName: 'user-experience-4' },
      { fileName: 'user-experience-5' },
      { fileName: 'user-experience-6' },
    ],
  },
  {
    title: 'User interface (UI)',
    users: [
      { fileName: 'user-interface-1' },
      { fileName: 'user-interface-2' },
      { fileName: 'user-interface-3' },
      { fileName: 'user-interface-4' },
      { fileName: 'user-interface-5' },
      { fileName: 'user-interface-6' },
      { fileName: 'user-interface-7' },
    ],
  },
  {
    title: 'Brand identity',
    users: [
      { fileName: 'user-identity-1' },
      { fileName: 'user-identity-2' },
      { fileName: 'user-identity-3' },
      { fileName: 'user-identity-4' },
      { fileName: 'user-identity-5' },
    ],
  },
]);

interface SkillListUser {
  fileName: string;
}

const filterFivePerson = (users: Array<SkillListUser>) => users.filter((user, key) => key < 5);

const currentProject = ref({});
const currentProjectIdx = ref(0);
const projectModalEl = ref<any>(null);
const showProjectModal = (project: object, key: number) => {
  currentProject.value = project;
  currentProjectIdx.value = key;
  projectModalEl.value.setModalStatus('update');
  projectModalEl.value.showModal();
};
const setCurrentProject = (project: any) => currentProject.value = project;
const setCurrentIdx = (idx: number) => {
  currentProjectIdx.value = idx;
  if(!user.value?.projects) return;
  currentProject.value = user.value.projects[idx];
};

interface Op {
  insert: {
    image: string;
  }
}

const handleProjectImg = (project: any) => {
  const hasImage = project.content.ops.filter((op: Op) => op.insert.image)[0];
  return hasImage ? hasImage.insert.image : getImageUrl('image');
};

const experienceModalEl = ref<any>(null);
const createExperience = () => {
  experienceModalEl.value.setStatus('create');
  experienceModalEl.value.showModal();
};

const tempEeperience = ref<Experience>({});
const editExperience = (experience: Experience) => {
  tempEeperience.value = experience;
  experienceModalEl.value.setStatus('update');
  experienceModalEl.value.showModal();
};

const handleRelativeTime = (startTime: number | undefined, endTime: number | undefined) => {
  if (startTime && endTime) return dayjs(startTime * 1000).to(dayjs(endTime * 1000), true);
  else return '';
};

const handleStartTime = (startTime: number | undefined) => 
  startTime ? dayjs(startTime * 1000).format('D MMMM YYYY'): '';

const handleEndTime = (endTime: number | undefined) => 
  endTime ? dayjs(endTime * 1000).format('D MMMM YYYY'): '';

const handleExpImg = (experience: Experience) => {
  if (experience && experience.image_url)
    return experience.image_url;
  else
    return getImageUrl('upload_cloud');
};

const setTempExperience = (experience: Experience) => tempEeperience.value = experience;
</script>

<template>
  <section class="profile-card">
    <ProjectModal ref="projectModalEl" :projects="user?.projects"
      :currentProject="currentProject" :currentProjectIdx="currentProjectIdx"
      @setCurrentProject="setCurrentProject" @setCurrentIdx="setCurrentIdx">
      <template v-slot:project-body-header><div></div></template>  
    </ProjectModal>
    <ExperienceModal ref="experienceModalEl" :experience="tempEeperience"
      @setTempExperience="setTempExperience" />
    <h2 class="card-title">About</h2>
    <p v-if="user?.about" class="card-paragraph">
      {{ user?.about || 'This user did not write anything.' }}</p>
    <div v-else class="about-list-empty">This user did not write anything.</div>
    <button type="button" class="more-btn">see more</button>
  </section>
  <section class="profile-card">
    <div class="card-header">
      <h2 class="projects-title card-title">Projects</h2>
      <span class="projects-subtitle">3 of 12</span>
    </div>
    <ul v-if="user?.projects?.length" class="project-list">
      <li v-for="(project, key) in user?.projects" :key="project.id" class="project-card"
        @click="showProjectModal(project, key)">
        <img :src="handleProjectImg(project)" :alt="project.title" class="project-img">
        <h3 class="project-card-title">{{ project.title }}</h3>
        <span class="project-card-subtitle">
          {{ project.create_time ? dayjs(project.create_time * 1000).format('YYYY/MM/DD') : '' }}
        </span>
      </li>
    </ul>
    <div v-else class="project-list-empty">This user did not write anything.</div>
    <button type="button" class="more-btn">show all (12)</button>
  </section>
  <section class="profile-card">
    <h2 class="card-title">Skills & Endoresments</h2>
    <ul class="skills-list">
      <li v-for="skill in skillsList" :key="skill.title" class="skill-card">
        <span class="skill-user-num">{{ skill.users.length }}</span>
        <h3 class="skill-card-title">User experience (UX)</h3>
        <ul class="users-photo-list">
          <li v-for="user in filterFivePerson(skill.users)" :key="user.fileName">
            <router-link to="/">
              <img class="skill-user-img" :src="getImageUrl(user.fileName)" alt="user">
            </router-link>
          </li>
          <li v-if="skill.users.length - 5 > 0" class="user-num-btn">
            <button type="button">+{{ skill.users.length - 5 }}</button>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <section class="profile-card">
    <div class="card-header">
      <h2 class="card-title experience-section-title">Experience</h2>
    </div>
    <ul v-if="user?.experience?.length">
      <li v-for="experience in user?.experience" :key="experience.title" class="experience-card">
        <img class="experience-card-img" :src="handleExpImg(experience)" :alt="experience.title">
        <div class="experience-card-content">
          <div class="experience-card-header">
            <div>
              <h3 class="experience-card-title">{{ experience.title }}</h3>
              <h4>{{ experience.place }}</h4>
            </div>
            <button type="button" class="experience-edit-btn" @click="editExperience(experience)">edit</button>
          </div>
          <p>
            <span>{{ handleStartTime(experience.start_time) }}</span> - 
            <span>{{ handleEndTime(experience.end_time) }}</span>
            <span class="experience-card-experience-time">
              {{ handleRelativeTime(experience.start_time, experience.end_time) }}</span>
          </p>
          <p class="experience-card-paragraph">{{ experience.content }}</p>
        </div>
      </li>
    </ul>
    <div v-else class="experience-empty-notice">
      This user did not write anything.
    </div>
  </section>
  <Education >
    <template v-slot:empty-content>This user did not write anything.</template>
    <template v-slot:header-right><div></div></template>
  </Education>
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
  margin-bottom: 20px;
}
.card-title {
  text-transform: uppercase;
  font-size: $fs-4;
  font-weight: bold;
  margin: 0 10px 25px 0;
}
.projects-title {
  display: inline-block;
  margin: 0;
}
.projects-subtitle {
  color: $gray-100;
  margin-left: 10px;
}
.projects-create-btn {
  @include button;
  background: $blue-200;
  color: $white;
  margin-left: auto;
  &:hover {
    color: $blue-200;
    background: $white;
  }
}
.card-paragraph {
  white-space: pre-wrap;
  line-height: 1.5;
  margin-bottom: 20px;
}
.about-empty-paragraph {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-3;
}
.more-btn {
  display: block;
  text-transform: uppercase;
  background: transparent;
  border: none;
  color: $blue-200;
  cursor: pointer;
  font-weight: bold;
  padding: 0;
  filter: brightness(1);
  transform: translateX(0);
  transition: filter 0.2s, transform 0.2s;
  margin-top: 25px;
  &:hover{
    filter: brightness(1.3);
    transform: translateX(10px);
  }
}
.project-card-title {
  margin-bottom: 5px;
}
.project-card-subtitle {
  font-size: $fs-7;
  color: $gray-100;
}
.project-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2% -20px 0;
}
.project-card {
  width: 31.333333%;
  transition: transform 0.2s, color 0.2s;
  cursor: pointer;
  margin: 0 2% 20px 0;
  > a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-5px);
    color: $blue-400;
  }
}
.project-img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 15px;
}
.project-list-empty, .about-list-empty {
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-3;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -2%;
}
.skill-card {
  width: 31.333333%;
  margin-right: 2%;
  border: 1px solid $white-100;
  border-radius: 6px;
  padding: 15px 20px;
  position: relative;
  transition: color 0.2s, box-shadow 0.2s;
  &:hover {
    color: $blue-300;
    box-shadow: 1px 1px 30px rgba($blue-300, 0.1);
  }
}
.skill-card-title {
  margin-bottom: 10px;
}
.skill-user-img {
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
}
.skill-user-num {
  display: block;
  position: absolute;
  top: 15px;
  right: 20px;
  font-weight: bold;
  color: $blue-200;
}
.users-photo-list {
  display: flex;
}
@for $i from 1 through 36 { 
  .users-photo-list li:nth-of-type(#{$i}) {
    transform: translateX(-8px * $i + 8px);
    z-index: calc(1 * $i);
  }
}
.users-photo-list .user-num-btn {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: $blue-200;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-6;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
  > button {
    border: none;
    background: transparent;
    color: $white;
    cursor: pointer;
  }
}
.experience-card {
  display: flex;
  border-bottom: 1px solid $white-100;
  padding: 25px 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}
.experience-section-title {
  margin: 0; 
}
.create-experience-btn {
  @include button;
  background: $blue-200;
  color: $white;
  &:hover {
    background: white;
    color: $blue-200;
  }
}
.experience-card-img {
  width: 54px;
  height: 54px;
  margin-right: 15px;
}
.experience-card-content {
  flex-grow: 1;
  h4 {
    font-size: $fs-6;
    color: rgba($dark-100, 0.7);
    font-weight: lighter;
  }
  > p {
    margin-top: 10px;
  }
  .experience-card-experience-time {
    margin-left: 10px;
    color: $blue-200;
    font-weight: bold;
  }
}
.experience-card-header {
  display: flex;
}
.experience-edit-btn {
  @include button;
  align-self: center;
  width: auto;
  background: transparent;
  color: $blue-200;
  padding: 5px 10px;
  margin-left: auto;
  transition: color 0.2s, background-color 0.2s;
  &:hover {
    background: $blue-200;
    color: $white;
  }
}
.experience-card-title {
  margin-bottom: 10px;
}
.experience-card-paragraph {
  line-height: 1.5;
}
.experience-empty-notice {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $fs-3;
  min-height: 100px;
}
</style>
