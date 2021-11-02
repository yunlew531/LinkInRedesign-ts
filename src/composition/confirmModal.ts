import { ref, readonly } from 'vue';

const isModalShow = ref(false);
const bodyContent = ref('');

const showModal = (content: string = '') => {
  isModalShow.value = true;
  bodyContent.value = content;
};

const hideModal = () => isModalShow.value = false;

const cleanText = (event: TransitionEvent) => {
  const { propertyName, target } = event;
  const classList = Array.from((<Element>target).classList);
  if (propertyName !== 'visibility' || (classList.includes('show'))) return;
  bodyContent.value = ''
};

export default {
  isModalShow: readonly(isModalShow),
  bodyContent: readonly(bodyContent),
  showModal,
  hideModal,
  cleanText,
};