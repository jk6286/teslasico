<script setup>
import { RouterLink } from 'vue-router';
import { useSideBarStore } from '@/stores/sideBar.js';
const { sideBarToggle } = useSideBarStore();
</script>

<template>
  <header class="header">
    <button
      type="button"
      class="btn_sidebar"
      @click="sideBarToggle()">
      <div class="ico_menu"></div>
      <div class="ico_menu"></div>
      <div class="ico_menu"></div>
      <strong class="screen_out">메뉴 열기 / 닫기</strong>
    </button>
    <h1>
      <RouterLink to="/">
        Teslasico
      </RouterLink>
    </h1>
  </header>
</template>
