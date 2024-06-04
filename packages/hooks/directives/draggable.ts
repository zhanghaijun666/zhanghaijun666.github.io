/**
 * 元素的拖拽指令
 */
import { Directive, onMounted, onUnmounted } from 'vue';

const draggable: Directive = {
  mounted(el) {
    let startX: number,
      startY: number,
      currentX = 0,
      currentY = 0;

    el.style.position = 'relative';
    el.style.cursor = 'pointer';

    function onMouseDown(event: MouseEvent) {
      event.preventDefault();
      startX = event.pageX - currentX;
      startY = event.pageY - currentY;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    function onTouchStart(event: TouchEvent) {
      event.preventDefault();
      startX = event.touches[0].clientX - currentX;
      startY = event.touches[0].clientY - currentY;
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    function onTouchEnd() {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    }

    function onMouseMove(event: MouseEvent) {
      event.preventDefault();
      currentX = event.pageX - startX;
      currentY = event.pageY - startY;
      drag(el);
    }

    function onTouchMove(event: TouchEvent) {
      event.preventDefault();
      currentX = event.touches[0].clientX - startX;
      currentY = event.touches[0].clientY - startY;
      drag(el);
    }

    function drag(el: HTMLElement) {
      el.style.top = `${currentY}px`;
      el.style.left = `${currentX}px`;
    }

    // 使用onMounted和onUnmounted来注册和取消事件监听器
    onMounted(() => {
      el.addEventListener('mousedown', onMouseDown);
      el.addEventListener('touchstart', onTouchStart);
    });

    onUnmounted(() => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('touchstart', onTouchStart);
    });
  }
};

export default draggable;
