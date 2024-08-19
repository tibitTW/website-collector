<script setup lang="ts">
defineProps({
    icon: String,
    onClick: Function
});

const emit = defineEmits(['click']);
</script>

<template>
    <button @click="emit('click')"
        class="icon-btn flex-center p-0.5 rounded hover:bg-gray-100 transition-colors duration-300">
        <span :class="icon" class="iconify w-[var(--icon-btn-size)] h-[var(--icon-btn-size)]"></span>
    </button>
</template>
