import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSideBarStore = defineStore('sideBar', () => {
  const isSideBarOpen = ref(false);
  const sideBarToggle = () => {
    isSideBarOpen.value = !isSideBarOpen.value;
  };
  return {
    isSideBarOpen,
    sideBarToggle
  };
});
