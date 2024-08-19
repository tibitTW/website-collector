<script setup lang="ts">
import { ref, computed } from 'vue';
import IconButton from '../common/IconButton.vue';

const isToggle = ref(false)
const toggleBtnIcon = computed(() => isToggle.value ? "lucide--chevrons-right" : "lucide--chevrons-left");

const props = defineProps<{
    width: number,
}>();

const sideMenuStyle = computed(() => ({
    transform: isToggle.value ? `translateX(-${props.width - 40}px)` : 'translateX(0)',
    transition: 'transform 0.3s'
}));

const toggleSideMenu = () => {
    isToggle.value = !isToggle.value;
};
</script>

<template>
    <div :class="{ 'w-10': isToggle }" :style="[sideMenuStyle, { width: `${props.width}px` }]"
        class="side-menu flex-center flex-col min-w-[var(--sidemenu-min-width)] max-w-[var(--sidemenu-max-width)]">
        <div class="header p-1 flex-center justify-between w-full bg-slate-200">
            <div class="name truncate flex-grow text-center">header</div>
            <IconButton :icon="toggleBtnIcon" @click="toggleSideMenu" />
        </div>
        <div class="folder-list flex-grow">folder-list</div>
        <div class="footer p-1 flex-center justify-between w-full bg-slate-200">
            <div class="space flex-grow"></div>
            <IconButton icon="lucide--settings-2" onclick="none" />
        </div>
    </div>
</template>
