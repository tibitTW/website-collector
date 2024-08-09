<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    width: number
}>();

const sideMenuStyle = computed(() => ({
    width: `${props.width}px`,
    transition: 'width 0s'
}));
</script>

<template>
    <div :style="sideMenuStyle" class="side-menu flex items-center justify-center min-w-[var(--sidemenu-min-width)] max-w-[var(--sidemenu-max-width)]">
        <p>Side Menu</p>
        <p>Width: {{ width }} px</p>
    </div>
</template>
