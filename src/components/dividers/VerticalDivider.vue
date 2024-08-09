<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

const emit = defineEmits(['resize']);
const dividerRef = ref<HTMLDivElement | null>(null);
let startX = 0;
let startWidth = 0;

const startResize = (event: MouseEvent | TouchEvent) => {
  startX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  startWidth = dividerRef.value?.previousElementSibling?.clientWidth || 0;
  document.addEventListener('mousemove', resize);
  document.addEventListener('touchmove', resize);
  document.addEventListener('mouseup', stopResize);
  document.addEventListener('touchend', stopResize);
};

const resize = (event: MouseEvent | TouchEvent) => {
  if (!dividerRef.value?.previousElementSibling) return;
  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
  const newWidth = startWidth + clientX - startX;
  emit('resize', newWidth);
};

const stopResize = () => {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('touchmove', resize);
  document.removeEventListener('mouseup', stopResize);
  document.removeEventListener('touchend', stopResize);
};

onMounted(() => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === dividerRef.value?.previousElementSibling) {
        emit('resize', entry.contentRect.width);
      }
    }
  });

  if (dividerRef.value?.previousElementSibling) {
    resizeObserver.observe(dividerRef.value.previousElementSibling);
  }
});

onUnmounted(() => {
  if (dividerRef.value?.previousElementSibling) {
    resizeObserver.unobserve(dividerRef.value.previousElementSibling);
  }
});
</script>

<template>
  <div ref="dividerRef" class="divider relative h-full cursor-col-resize [&_*]:cursor-col-resize" @mousedown="startResize" @touchstart="startResize">
    <div class="absolute inset-0 w-[var(--divider-width)] bg-blue-600 flex items-center justify-center">
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[var(--divider-active-width)] z-10 h-full bg-blue-300 opacity-0 transition-all duration-300 delay-100 hover:opacity-100"></div>
    </div>
    </div>
</template>
