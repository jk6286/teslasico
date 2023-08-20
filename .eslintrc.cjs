module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'object-curly-spacing': ['error', 'always'], // 객체 중괄호 안에 여백 여부
    'quotes': ['error', 'single'], // 홑따옴표(single)|쌍따옴표(double)|백틱(backticks)을 쓸 것인지
    'semi': ['error', 'always'], // 명령어 끝에 세미콜론 여부 (always|never)
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never', // img, input, br 태그 등과 같이 닫는 태그가 없는 태그들의 셀프 / 여부
        normal: 'never', // void element를 제외한 나머지 태그들의 셀프 / 여부
        component: 'always' // 컴포넌트 태그의 셀프 / 여부
      },
      svg: 'always', // svg 태그의 셀프 / 여부
      math: 'always' // math 태그들의 셀프 / 여부
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never', // 태그가 싱글 라인일 경우 닫는 부호 > 를 다음 라인으로 내릴 것인지
      multiline: 'never' // 태그가 멀티 라인일 경우 닫는 부호 > 를 다음 라인으로 내릴 것인지
    }]
  }
}