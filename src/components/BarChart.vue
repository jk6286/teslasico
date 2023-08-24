<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
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

const windowWidth = ref(window.innerWidth);

// 창의 너비를 변경할 때마다 값을 업데이트
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// 컴포넌트가 마운트될 때 리스너 추가
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
});

// 컴포넌트가 언마운트될 때 리스너 제거
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>

<template>
  <div class="wrapper_bar">
    <Bar
      :data="data"
      :options="options" />
  </div>
</template>

<style scoped lang="scss">
.wrapper_bar {
  position: relative;
  canvas{
    width: 100% !important;
    height: auto !important;
  }
}
</style>
