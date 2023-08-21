<script setup>
import { Bar } from 'vue-chartjs';
import 'chart.js/auto';

defineProps({
  data: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    default: () => {}
  }
});
</script>

<template>
  <div class="wrapper_bar">
    <Bar
      :data="data"
      :options="options"
    />
  </div>
</template>

<style scoped>
.wrapper_bar canvas {
  width: 100% !important;
  height: auto !important;
}
</style>
