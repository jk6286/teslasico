<script setup>
import { RouterView } from 'vue-router';
import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <!-- <header></header> -->
  <main>
    <SideBar />
    <RouterView />
  </main>
</template>
