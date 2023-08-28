import './assets/scss/main.scss'; // SCSS
import { createApp } from 'vue'; // vue
import { createPinia } from 'pinia'; // 피니아
import HighchartsVue from 'highcharts-vue'; // 하이차트 생성자 import
import '@/js/highchart/highchartInit.js'; // 하이차트 옵션들 init

import App from './App.vue';
import router from './router'; // 라우터

// 앱 초기화
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(HighchartsVue);
app.mount('body');
