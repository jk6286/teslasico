<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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
  <div class="wrapper_bar"></div>
</template>

<style scoped lang="scss">
// .wrapper_bar {
//   canvas{
//     width: 100% !important;
//     height: auto !important;
//   }
// }
</style>
