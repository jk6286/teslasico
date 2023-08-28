<script setup>
import { RouterLink } from 'vue-router';
import { useSideBarStore } from '@/stores/sideBar.js';
const sideBarStore = useSideBarStore();
const sideBarToggle = sideBarStore.sideBarToggle;

const sidebarLinks = [
  { to: '/', text: 'Tesla Mission' },
  { to: '/car-sale', text: 'Car Sale' }
];
</script>

<template>
  <aside
    class="sidebar"
    @click.self="sideBarToggle()">
    <nav>
      <ul class="lnb_comm">
        <li
          v-for="link in sidebarLinks"
          :key="link.to">
          <RouterLink
            :to="link.to"
            @click="sideBarStore.isSideBarOpen = false">
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
