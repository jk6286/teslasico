<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Main
        </RouterLink>
        <!-- <RouterLink to="/sub">
          Sub
        </RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>
