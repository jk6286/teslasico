<script setup>
import { useChartDataStore } from '@/stores/chartData.js';
import BarChart from '@/components/BarChart.vue';
const store = useChartDataStore();
</script>

<template>
  <div class="cont_car_sale">
    <h2 class="tit_comm">
      테슬라 분기별 생산 및 배송<span>Tesla's Production and Delivery by Quarter</span>
    </h2>
    <BarChart :data="store.분기별_생산배송_차트데이터" />

    <h2 class="tit_comm">
      테슬라 연도별 생산 및 배송<span>Tesla's Production and Delivery by year</span>
    </h2>
    <BarChart :data="store.연도별_생산배송_차트데이터" />
  </div>
</template>
