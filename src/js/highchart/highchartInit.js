import Highcharts from 'highcharts';
import patternFillInit from 'highcharts/modules/pattern-fill';
import exportingInit from 'highcharts/modules/exporting';
import accessibilityInit from 'highcharts/modules/accessibility';

exportingInit(Highcharts);
accessibilityInit(Highcharts);
patternFillInit(Highcharts);

Highcharts.patterns[0].color = 'rgb(223, 83, 83)'; // 빨강
Highcharts.patterns[1].color = 'orange'; // 주
Highcharts.patterns[2].color = '#ffcd00'; // 노
Highcharts.patterns[3].color = 'green'; // 초
Highcharts.patterns[4].color = 'rgb(20, 151, 238)'; // 파랑
Highcharts.patterns[5].color = 'navy'; // 남
Highcharts.patterns[6].color = 'purple'; // 보

const duration = 300;
Highcharts.setOptions({
  plotOptions: {
    column: {
      animation: {
        duration
      }
    },
    bar: {
      animation: {
        duration
      }
    }
  }
});
