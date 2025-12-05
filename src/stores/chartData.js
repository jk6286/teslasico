import { defineStore } from 'pinia';

export const useChartDataStore = defineStore('chartData', () => {
  const 분기별_생산배송_데이터 = [
    //{ year: 2017, quarter: 1, amount: { production: 25418, delivery: 25051 } },
    //{ year: 2017, quarter: 2, amount: { production: 25708, delivery: 22026 } },
    //{ year: 2017, quarter: 3, amount: { production: 25336, delivery: 26137 } },
    //{ year: 2017, quarter: 4, amount: { production: 24565, delivery: 29967 } },

    // { year: 2018, quarter: 1, amount: { production: 34494, delivery: 29997 } },
    // { year: 2018, quarter: 2, amount: { production: 40740, delivery: 40768 } },
    // { year: 2018, quarter: 3, amount: { production: 80142, delivery: 83775 } },
    // { year: 2018, quarter: 4, amount: { production: 88944, delivery: 90966 } },

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
    { year: 2023, quarter: 3, amount: { production: 430488, delivery: 435059 } },
    { year: 2023, quarter: 4, amount: { production: 494989, delivery: 484507 } },
    
    { year: 2024, quarter: 1, amount: { production: 433371, delivery: 386810 } },
    { year: 2024, quarter: 2, amount: { production: 410831, delivery: 443956 } },
    { year: 2024, quarter: 3, amount: { production: 469796, delivery: 462890 } },
    { year: 2024, quarter: 4, amount: { production: 459445, delivery: 495570 } },
    
    { year: 2025, quarter: 1, amount: { production: 362615, delivery: 336681 } },
    { year: 2025, quarter: 2, amount: { production: 410244, delivery: 384122 } },
    { year: 2025, quarter: 3, amount: { production: 447450, delivery: 497099 } },
  ];

  const 분기별_생산_데이터 = 분기별_생산배송_데이터.map(({ amount }) => amount.production);
  const 분기별_배송_데이터 = 분기별_생산배송_데이터.map(({ amount }) => amount.delivery);
  const 분기별_라벨들 = 분기별_생산배송_데이터.map(({ year, quarter }) => `${year} - Q${quarter}`);

  // 연도별 생산, 배송 데이터 배열 초기화
  const 연도별_생산배송_데이터 = [];

  // 연도별로 데이터를 그룹화하여 처리
  for (const data of 분기별_생산배송_데이터) {
    const { year, quarter, amount } = data;

    // 연도별 데이터를 찾거나 생성
    let 연도별_데이터 = 연도별_생산배송_데이터.find((item) => item.year === year);
    if (!연도별_데이터) {
      연도별_데이터 = { year, amount: { production: 0, delivery: 0 } };
      연도별_생산배송_데이터.push(연도별_데이터);
    }

    // 해당 연도의 생산, 배송 데이터 합산
    연도별_데이터.amount.production += amount.production;
    연도별_데이터.amount.delivery += amount.delivery;

    // 4분기 데이터가 없는 경우에만 quarter 값에 현재 quarter 값 할당
    연도별_데이터.quarter = quarter === 4 ? 4 : quarter;
  }

  const 연도별_생산_데이터 = 연도별_생산배송_데이터.map(({ amount }) => amount.production);
  const 연도별_배송_데이터 = 연도별_생산배송_데이터.map(({ amount }) => amount.delivery);
  const 연도별_라벨들 = 연도별_생산배송_데이터.map(({ year, quarter }) =>
    quarter === 4 ? `${year}년` : `${year}년 ~ ${quarter}분기`
  );

  return {
    분기별_생산_데이터,
    분기별_배송_데이터,
    분기별_라벨들,
    연도별_생산_데이터,
    연도별_배송_데이터,
    연도별_라벨들
  };
});
