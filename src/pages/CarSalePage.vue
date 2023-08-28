<script setup>
import { 분기_및_연도별_생산배송_차트_옵션 } from '@/js/highchart/options/carSaleDataOptions.js';

const chartOptinos = (type) => 분기_및_연도별_생산배송_차트_옵션(type);
</script>

<template>
  <main class="cont_car_sale">
    <div class="inner_cont">
      <h2 class="tit_comm">
        테슬라 분기별 생산 및 배송<span>Tesla's Production and Delivery by Quarter</span>
      </h2>
      <div class="wrap_chart">
        <highcharts
          ref="분기별차트"
          :options="chartOptinos('분기')"
        />
      </div>
      <h2 class="tit_comm">
        테슬라 연도별 생산 및 배송<span>Tesla's Production and Delivery by year</span>
      </h2>
      <div class="wrap_chart">
        <highcharts
          ref="연도별차트"
          :options="chartOptinos('연도')"
        />
      </div>
    </div>
  </main>
</template>
@/js/highchart/options/carSaleDataOptions.js
