import { onMounted, onBeforeUnmount } from 'vue';

export default function useWindowWidth(callBack) {
  // 창의 너비를 변경할 때마다 값을 업데이트
  const updateWindowWidth = () => {
    callBack();
  };

  // 컴포넌트가 마운트될 때 리스너 추가
  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
  });

  // 컴포넌트가 언마운트될 때 리스너 제거
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
  });
}