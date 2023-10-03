<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let currentDomain = ref('');
let currentPathname = ref('');

onMounted(() => {
  currentDomain.value = window.location.origin;
  currentPathname.value = decodeURIComponent(window.location.pathname);
});
</script>
<template>
  <main class="cont_not_found">
    <div class="inner_cont">
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        <strong>{{ currentDomain }}{{ currentPathname }}</strong> 는 없는 페이지입니다.
      </p>
      <button
        type="button"
        class="btn_back"
        @click="router.back()"
      >
        이전 페이지로
      </button>
    </div>
  </main>
</template>
