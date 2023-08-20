<script setup>
import { useChartDataStore } from '@/stores/chartData.js';
import BarChart from '@/components/BarChart.vue';
const store = useChartDataStore();
</script>

<template>
  <div style="max-width: 1200px; margin: 0 auto; box-sizing: border-box">
    <h2 class="tit_main">
      테슬라 분기별 생산 및 배송<span>Tesla's Production and Delivery by Quarter</span>
    </h2>
    <BarChart :data="store.분기별_생산배송_차트데이터" />

    <h2 class="tit_main">
      테슬라 연도별 생산 및 배송<span>Tesla's Production and Delivery by year</span>
    </h2>
    <BarChart :data="store.연도별_생산배송_차트데이터" />
    <img
      src="/logo.svg"
      alt="">
  </div>
</template>

<style lang="scss" scoped>
.tit_main {
  font-weight: 600;
  font-size: 30px;
  color: #1a1a1a;
  & ~ & {
    margin-top: 100px;
  }
  span {
    margin-left: 5px;
    font-weight: 400;
    font-size: 15px;
    color: #888;
  }
}
</style>
