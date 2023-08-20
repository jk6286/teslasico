<script setup>
import { Bar } from 'vue-chartjs';
import 'chart.js/auto';
import { useChartDataStore } from '@/stores/chartData.js';

const store = useChartDataStore();

const data = {
  labels: store.분기별라벨들,
  datasets: [{
    label: '분기별 생산량 (production)',
    data: store.분기별생산데이터,
    backgroundColor: 'rgba(223,83,83,1)',
    hoverBackgroundColor: 'rgba(223,83,83,0.6)',
  }, {
    label: '분기별 배송량 (delivery)',
    data: store.분기별배송데이터,
    backgroundColor: 'rgba(20,151,238,1)',
    hoverBackgroundColor: 'rgba(20,151,238,0.6)',
  }],
};
</script>

<template>
  <div class="wrapper_bar">
    <Bar :data="data" />
  </div>
</template>

<style scoped>
.wrapper_bar canvas{
  width: 100% !important;
  height: auto !important;
}
</style>