<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isResizing = ref(false);
const emit = defineEmits(['resize']);
const dividerRef = ref<HTMLDivElement | null>(null);
let startY = 0;
let startWidth = 0;
let resizeObserver: ResizeObserver;

const startResize = (event: MouseEvent | TouchEvent) => {
    isResizing.value = true;
    startY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    startWidth = dividerRef.value?.previousElementSibling?.clientWidth || 0;
    document.addEventListener('mousemove', resize);
    document.addEventListener('touchmove', resize);
    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchend', stopResize);
};

const resize = (event: MouseEvent | TouchEvent) => {
    if (!dividerRef.value?.previousElementSibling) return;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
    const newWidth = startWidth + clientY - startY;
    emit('resize', newWidth);
};

const stopResize = () => {
    isResizing.value = false;
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('touchmove', resize);
    document.removeEventListener('mouseup', stopResize);
    document.removeEventListener('touchend', stopResize);
};

onMounted(() => {
    resizeObserver = new ResizeObserver((entries) => {
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
    <div ref="dividerRef" class="divider relative w-full cursor-col-resize [&_*]:cursor-col-resize"
        @mousedown="startResize" @touchstart="startResize">
        <div
            class="absolute inset-0 h-[var(--divider-width)] bg-[var(--divider-bg-color)]  flex items-center justify-center">
            <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[var(--divider-active-width)] z-10 h-full bg-[var(--divider-active-bg-color)] opacity-0 transition-all duration-300 delay-100 hover:opacity-100 hover:delay-0"
                :class="{ 'opacity-100': isResizing }">

            </div>
        </div>
    </div>
</template>
