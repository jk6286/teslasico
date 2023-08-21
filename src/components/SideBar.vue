<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <aside class="sidebar">
    <nav>
      <ul class="lnb_comm">
        <li>
          <RouterLink to="/"> Tesla Mission </RouterLink>
        </li>
        <li>
          <RouterLink to="/car-sale"> Car Sale </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
