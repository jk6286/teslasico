<script setup>
import { storeToRefs } from 'pinia';
import { RouterView } from 'vue-router';
import HeaderView from '@/components/HeaderView.vue';
import SideBar from '@/components/SideBar.vue';
import { useSideBarStore } from '@/stores/sideBar.js';
const { isSideBarOpen } = storeToRefs(useSideBarStore());
</script>

<template>
  <div
    class="test"
    id="teslasico"
    :class="isSideBarOpen ? 'sidebar_open' : ''"
  >
    <HeaderView />
    <SideBar />
    <RouterView />
  </div>
</template>
