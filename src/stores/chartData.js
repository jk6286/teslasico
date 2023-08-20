import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useChartDataStore = defineStore('chartData', () => {
  const 분기별생산배송데이터 = ref([
    { year: 2017, quarter: 1, amount: { production: 25418, delivery: 25051 } },
    { year: 2017, quarter: 2, amount: { production: 25708, delivery: 22026 } },
    { year: 2017, quarter: 3, amount: { production: 25336, delivery: 26137 } },
    { year: 2017, quarter: 4, amount: { production: 24565, delivery: 29967 } },
    
    { year: 2018, quarter: 1, amount: { production: 34494, delivery: 29997 } },
    { year: 2018, quarter: 2, amount: { production: 40740, delivery: 40768 } },
    { year: 2018, quarter: 3, amount: { production: 80142, delivery: 83775 } },
    { year: 2018, quarter: 4, amount: { production: 88944, delivery: 90966 } },
    
    { year: 2019, quarter: 1, amount: { production: 63019, delivery: 77138 } },
    { year: 2019, quarter: 2, amount: { production: 95356, delivery: 87048 } },
    { year: 2019, quarter: 3, amount: { production: 97186, delivery: 96155 } },
    { year: 2019, quarter: 4, amount: { production: 112095, delivery: 104891 } },
    
    { year: 2020, quarter: 1, amount: { production: 88496, delivery: 102672 } },
    { year: 2020, quarter: 2, amount: { production: 90891, delivery: 82272 } },
    { year: 2020, quarter: 3, amount: { production: 139593, delivery: 145036 } },
    { year: 2020, quarter: 4, amount: { production: 180667, delivery: 179757 } },
    
    { year: 2021, quarter: 1, amount: { production: 180338, delivery: 184877 } },
    { year: 2021, quarter: 2, amount: { production: 206421, delivery: 201304 } },
    { year: 2021, quarter: 3, amount: { production: 237823, delivery: 241391 } },
    { year: 2021, quarter: 4, amount: { production: 305840, delivery: 308650 } },
    
    { year: 2022, quarter: 1, amount: { production: 305407, delivery: 310048 } },
    { year: 2022, quarter: 2, amount: { production: 258580, delivery: 254695 } },
    { year: 2022, quarter: 3, amount: { production: 365923, delivery: 343830 } },
    { year: 2022, quarter: 4, amount: { production: 439701, delivery: 405278 } },
  
    { year: 2023, quarter: 1, amount: { production: 440808, delivery: 422875 } },
    { year: 2023, quarter: 2, amount: { production: 479700, delivery: 466140 } },
  ]);

  const 분기별생산데이터 = 분기별생산배송데이터.value.map(({ amount }) => amount.production);
  const 분기별배송데이터 = 분기별생산배송데이터.value.map(({ amount }) => amount.delivery);
  const 분기별라벨들 = 분기별생산배송데이터.value.map(({ year, quarter }) => `${year} - Q${quarter}`);

  return { 분기별생산배송데이터, 분기별생산데이터, 분기별배송데이터, 분기별라벨들 };
});
