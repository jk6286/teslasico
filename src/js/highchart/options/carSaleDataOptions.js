import { useChartDataStore } from '@/stores/chartData.js';
const store = useChartDataStore();

export const 분기_및_연도별_생산배송_차트_옵션 = (type) => {
  const isQuarterly = type === '분기' ? true : false;

  return {
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 768
          },
          chartOptions: {
            chart: {
              type: 'bar'
            }
          }
        }
      ]
    },
    chart: {
      type: 'column',
      zoomType: 'x'
    },
    credits: {
      enabled: false
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    xAxis: {
      categories: isQuarterly ? store.분기별_라벨들 : store.연도별_라벨들,
      title: {
        text: null
      },
      accessibility: {
        description: isQuarterly ? '분기' : '연도'
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        overflow: 'justify'
      }
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: false
        }
      }
    },
    tooltip: {
      stickOnContact: true,
      borderColor: '#555',
      backgroundColor: 'rgba(255, 255, 255, 0.93)'
    },
    legend: {
      enabled: true
    },
    series: [
      {
        name: '생산량',
        data: isQuarterly ? store.분기별_생산_데이터 : store.연도별_생산_데이터,
        color: { patternIndex: 0 },
        borderColor: '#ccc'
      },
      {
        name: '배송량',
        data: isQuarterly ? store.분기별_배송_데이터 : store.연도별_배송_데이터,
        color: { patternIndex: 4 },
        borderColor: '#ccc'
      }
    ]
  };
};
