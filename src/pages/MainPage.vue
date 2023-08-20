<script setup>
import QuarterBarChart from '@/components/QuarterBarChart.vue';
</script>

<template>
  <div style="max-width:1200px;margin:0 auto;box-sizing: border-box;">
    <h2 class="tit_main">
      테슬라 분기별 생산 및 배송<span>Tesla quarterly production and delivery</span>
    </h2>
    <QuarterBarChart />
  </div>
</template>

<style lang="scss">
.tit_main {
  font-weight: 600;
  font-size: 34px;
  color: #1a1a1a;
  span{
    margin-left:5px;
    font-size:15px;
  }
}
</style>
